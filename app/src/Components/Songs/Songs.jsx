import React from 'react'
import Song from './Song'
import s from './Song.module.css'

const Songs = songs => {
    return <ul className={s.songsWrapper}>
        {songs.songs.map(u => <Song song={u} key={u.id}/>)}
     </ul>
}

export default Songs