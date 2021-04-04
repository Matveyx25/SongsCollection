import React from 'react'
import { connect } from 'react-redux'
import Songs from './Songs'
import {compose} from "redux"
import Preloader from '../common/preloader/preloader.js'
import { requestSongs } from '../../redux/songs-reduser'
import { getSongs } from '../../redux/songs-selectors'
import { Component } from 'react'


class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.requestUsers()
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Songs
                songs={this.props.songs}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        songs: getSongs(state)
    }
}

const SongsContainer = connect(mapStateToProps, { requestSongs })(UsersAPIComponent)

export default SongsContainer