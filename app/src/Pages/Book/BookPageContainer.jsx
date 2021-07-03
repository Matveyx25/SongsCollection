import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { getSong } from '../../redux/songs-selectors'
import SongPage from '../SongPage/SongPage';


class BookPageContainer extends React.Component {
    
    render() {
        return (
            <SongPage song={this.props.song}/>
        )
    }
}

let mapStateToProps = (state) => ({
    song: getSong(state)
})

export default compose(
    connect(mapStateToProps, null),
    withRouter
)(BookPageContainer)
