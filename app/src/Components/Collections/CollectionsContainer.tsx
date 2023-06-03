import React from 'react'
import { connect } from 'react-redux'
import Collections from './Collections'
import {compose} from "redux"
import { requestCollections, ThemeType } from '../../redux/songs-reducer'
import { getCollections } from '../../redux/songs-selectors'
import { Component } from 'react'
import Preloader from '../common/preloader/preloader'
import { AppStateType } from '../../redux/store'

type Props = {
    requestCollections: () => void,
    isFetching: boolean,
    collections: Array<ThemeType>
}

class CollectionsAPIComponent extends Component<Props> {

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


let mapStateToProps = (state: AppStateType) => {
    return {
        collections: getCollections(state)
    }
}

const CollectionsContainer = connect(mapStateToProps, { requestCollections })(CollectionsAPIComponent)

export default CollectionsContainer