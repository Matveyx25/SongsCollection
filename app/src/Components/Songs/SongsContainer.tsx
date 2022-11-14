import React from 'react'
import { connect } from 'react-redux'
import Songs from './Songs'
import Preloader from '../common/preloader/preloader'
import { requestSongs, SongType } from '../../redux/songs-reducer'
import { getSongs , getFetching } from '../../redux/songs-selectors'
import { Component } from 'react'

type Props = {
    isFetching: boolean,
    songs: Array<SongType>,
    requestSongs: () => void,
    searchValue: string
}

class SongsAPIComponent extends Component<Props> {

    componentDidMount() {
        this.props.requestSongs()
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Songs songs={this.props.songs} searchValue={this.props.searchValue}/>
        </>
    }
    
}


let mapStateToProps = (state: any) => {
    return {
        songs: getSongs(state),
        isFetching: getFetching(state)
    }
}

const SongsContainer = connect(mapStateToProps, { requestSongs})(SongsAPIComponent)

export default SongsContainer