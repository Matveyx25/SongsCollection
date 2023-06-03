import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestThemeSongsContain, SongType } from '../../redux/songs-reducer'
import { getSongs } from '../../redux/songs-selectors'
import { compose } from 'redux';
import Songs from '../../Components/Songs/Songs'
import { AppStateType } from '../../redux/store'

type Props = {
    match: any,
    requestThemeSongsContain: (themeId: string) => void,
    songs: Array<SongType>
}

class ThemePageContainer extends React.Component<Props> {
    componentDidMount() {
        let themeId = this.props.match.params.themeId
        this.props.requestThemeSongsContain(themeId)
    }

    componentDidUpdate(prevProps: Props) {
        if(this.props.match.params.themeId != prevProps.match.params.themeId){
            let themeId = this.props.match.params.themeId
            this.props.requestThemeSongsContain(themeId)
            console.log(themeId);
        }
    }
    
    render() {
        return <Songs songs={this.props.songs}/>
    }
}


let mapStateToProps = (state: AppStateType) => ({
    songs: getSongs(state)
})

export default compose(
    connect(mapStateToProps, { requestThemeSongsContain }),
    withRouter
)(ThemePageContainer)
