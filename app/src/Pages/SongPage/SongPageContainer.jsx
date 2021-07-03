import React from 'react'
import SongPage from './SongPage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestSong , toggleIsFetching} from '../../redux/songs-reducer'
import { getSong , getFetching} from '../../redux/songs-selectors'
import { compose } from 'redux';
import Preloader from '../../Components/common/preloader/preloader'


class SongPageContainer extends React.Component {


    componentDidMount() {
        let songId = this.props.match.params.songId
        this.props.requestSong(songId)
    }

    componentDidUpdate(prevProps , prevState , snapshot) {
        if(this.props.match.params.songId != prevProps.match.params.songId){
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


let mapStateToProps = (state) => ({
    isFetching: getFetching(state),
    song: getSong(state)
})

export default compose(
    connect(mapStateToProps, { requestSong , toggleIsFetching}),
    withRouter
)(SongPageContainer)
