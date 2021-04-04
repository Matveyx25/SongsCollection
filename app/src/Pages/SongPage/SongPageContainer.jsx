import React from 'react';
import SongPage from './SongPage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class SongPageContainer extends React.Component {

    refreshProfile() {
        let songId = this.props.match.params.userId
        this.props.requestSong(songId)
    }

    componentDidMount() {
       this.refreshSong()
    }

    componentDidUpdate(prevProps , prevState , snapshot) {
        if(this.props.match.params.songId != prevProps.match.params.songId){
            this.refreshSong()
        }
    }

    render() {
        return (
            <SongPage song={...this.props.song}/>
        )
    }
}


let mapStateToProps = (state) => ({
    song: state.songsPage.song
})

export default compose(
    connect(mapStateToProps, { requestSong }),
    withRouter
)(SongPageContainer)

export default SongPageContainer