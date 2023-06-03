import React from 'react'
import { connect } from 'react-redux'
import Songs from './Songs'
import Preloader from '../common/preloader/preloader'
import { requestSongs, SongType } from '../../redux/songs-reducer'
import { getSongs , getFetching } from '../../redux/songs-selectors'
import { Component } from 'react'
import { AppStateType } from '../../redux/store'

type MapStateType = {
    isFetching: boolean,
    songs: Array<SongType>
}

type MapDispatchType = {
    requestSongs: () => void,
}

type OwnPropsType = {
    searchValue: string
}

type Props = MapStateType & MapDispatchType & OwnPropsType

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


let mapStateToProps = (state: AppStateType): MapStateType => ({
    songs: getSongs(state),
    isFetching: getFetching(state)
})

const SongsContainer = connect<MapStateType, MapDispatchType, OwnPropsType, AppStateType>(mapStateToProps, {requestSongs})(SongsAPIComponent)

export default SongsContainer