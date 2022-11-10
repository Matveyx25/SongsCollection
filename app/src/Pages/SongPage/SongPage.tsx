import React from 'react';
import { SongType } from '../../redux/songs-reducer';
import s from './SongPage.module.scss'

type Props = {
    song: SongType
}

const SongPage = (props: Props) => {
    if(props?.song?.num){
        return (
            <div> 
                <h1 className={s.title}>{props.song.num}. {props.song.name}</h1>
                <pre className={s.text}>{props.song.text}</pre>
                {props.song.authors && <small className={s.author}>{props.song.authors}</small>}
            </div>
        )
    }else{
    return (
            <div> 
                <h1 className={s.mute}>Песня не выбрана</h1>
            </div>
        )
    }
}

export default SongPage