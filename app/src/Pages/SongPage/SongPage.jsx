import React from 'react';
import s from './SongPage.module.scss'


const SongPage = props => {
    return <div>
            <h1 className={s.title}>{props.song.id}. {props.song.name}</h1>
            <pre className={s.text}>{props.song.text}</pre>
            {props.song.authors && <small className={s.author}>{props.song.authors}</small>}
        </div>
    
}

export default SongPage