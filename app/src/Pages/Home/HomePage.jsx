import React from 'react';
import BigCard from '../../Components/BigCard/BigCard'
import Search from '../../Components/Search/Search'
import CollectionsContainer from '../../Components/Collections/CollectionsContainer'
import SongsContainer from '../../Components/Songs/SongsContainer'
import s from './HomePage.module.scss'


const HomePage = props => {
    return (
        <div>
            <SongsContainer/>
        </div>
    )
}

export default HomePage