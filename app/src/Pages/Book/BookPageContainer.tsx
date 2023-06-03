import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { SongType } from '../../redux/songs-reducer';
import { getSong } from '../../redux/songs-selectors'
import { AppStateType } from '../../redux/store';
import SongPage from '../SongPage/SongPage';

class BookPageContainer extends React.Component<{song: SongType}> {
    
    render() {
        return (
            <SongPage song={this.props.song}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    song: getSong(state)
})

export default compose(
    connect(mapStateToProps, null),
    withRouter
)(BookPageContainer)
