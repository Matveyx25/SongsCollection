import React from 'react'
import { connect } from 'react-redux'
import Collections from './Collections'
import {compose} from "redux"
import Preloader from '../common/preloader/preloader.js'
import { requestCollections } from '../../redux/songs-reducer'
import { getCollections } from '../../redux/songs-selectors'
import { Component } from 'react'


class CollectionsAPIComponent extends Component {

    componentDidMount() {
        this.props.requestCollections()
    }
    
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Collections collections={this.props.collections}/>
        </>
    }
    
}


let mapStateToProps = state => {
    return {
        collections: getCollections(state)
    }
}

const CollectionsContainer = connect(mapStateToProps, { requestCollections })(CollectionsAPIComponent)

export default CollectionsContainer