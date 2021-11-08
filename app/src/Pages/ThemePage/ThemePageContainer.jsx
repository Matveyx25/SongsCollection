import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestThemeSongs } from '../../redux/songs-reducer'
import { getSongs } from '../../redux/songs-selectors'
import { compose } from 'redux';
import SongsContainer from '../../Components/Songs/SongsContainer'
import Songs from '../../Components/Songs/Songs'

class ThemePageContainer extends React.Component {


    componentDidMount() {
        let themeId = this.props.match.params.themeId
        this.props.requestThemeSongs(themeId)
    }

    componentDidUpdate(prevProps , prevState , snapshot) {
        if(this.props.match.params.themeId != prevProps.match.params.themeId){
            let themeId = this.props.match.params.themeId
            this.props.requestThemeSongs(themeId)
            console.log(themeId);
        }
    }
    
    render() {
        return <Songs songs={this.props.songs}/>
    }
}


let mapStateToProps = (state) => ({
    songs: getSongs(state)
})

export default compose(
    connect(mapStateToProps, { requestThemeSongs }),
    withRouter
)(ThemePageContainer)
