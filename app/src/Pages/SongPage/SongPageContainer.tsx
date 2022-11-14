import React from 'react'
import SongPage from './SongPage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestSong , SongType} from '../../redux/songs-reducer'
import { getSong , getFetching} from '../../redux/songs-selectors'
import { compose } from 'redux';
import Preloader from '../../Components/common/preloader/preloader'

type Props = {
    requestSong: (songId: number) => void
    match: any,
    isFetching: boolean,
    song: SongType
}

class SongPageContainer extends React.Component<Props> {
    componentDidMount() {
        let songId = this.props.match.params.songId
        console.log(songId);
        this.props.requestSong(songId)
    }

    componentDidUpdate(prevProps: Props) {
        if(this.props.match.params.songId !== prevProps.match.params.songId){
            let songId = this.props.match.params.userId
            this.props.requestSong(songId)
            console.log(songId);
        }
    }
    
    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <SongPage song={this.props.song}/>
        </>
    }
}


let mapStateToProps = (state: any) => ({
    isFetching: getFetching(state),
    song: getSong(state)
})

export default compose(
    connect(mapStateToProps, {requestSong}),
    withRouter
)(SongPageContainer)
