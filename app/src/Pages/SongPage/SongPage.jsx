import React from 'react';
import s from './SongPage.module.scss'


const SongPage = song => {
    return  <div>
        <h1>{ song.title }, #{ song.id }</h1>
        <p>{ song.text }</p>
        <small>{ song.author }</small>
    </div>
}

export default SongPage