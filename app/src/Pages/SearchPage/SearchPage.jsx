import React from 'react';
import Search from '../../Components/Search/Search';
import SongsContainer from '../../Components/Songs/SongsContainer';
import s from './SearchPage.module.scss'


const SearchPage = props => {
    return (
        <div>
            <Search/>
            <SongsContainer songs={props.songs}/>
        </div>
    )
}

export default SearchPage