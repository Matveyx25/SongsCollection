import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestThemeSongs, SongType } from '../../redux/songs-reducer'
import { getSongs } from '../../redux/songs-selectors'
import { compose } from 'redux';
import Songs from '../../Components/Songs/Songs'

type Properties = {
    properties: SongType
}

type Props = {
    match: any,
    requestThemeSongs: (themeId: number) => void,
    songs: Array<Properties>
}

class ThemePageContainer extends React.Component<Props> {
    componentDidMount() {
        let themeId = this.props.match.params.themeId
        this.props.requestThemeSongs(themeId)
    }

    componentDidUpdate(prevProps: Props) {
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


let mapStateToProps = (state: any) => ({
    songs: getSongs(state)
})

export default compose(
    connect(mapStateToProps, { requestThemeSongs }),
    withRouter
)(ThemePageContainer)
