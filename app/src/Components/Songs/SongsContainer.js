import React from 'react'
import { connect } from 'react-redux'
import Songs from './Songs'
import Preloader from '../common/preloader/preloader.js'
import { requestSongs, toggleIsFetching } from '../../redux/songs-reducer'
import { getSongs , getFetching } from '../../redux/songs-selectors'
import { Component } from 'react'


class SongsAPIComponent extends Component {

    componentDidMount() {
        this.props.requestSongs()
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Songs songs={this.props.songs}/>
        </>
    }
    
}


let mapStateToProps = state => {
    return {
        songs: getSongs(state),
        isFetching: getFetching(state)
    }
}

const SongsContainer = connect(mapStateToProps, { requestSongs , toggleIsFetching})(SongsAPIComponent)

export default SongsContainer