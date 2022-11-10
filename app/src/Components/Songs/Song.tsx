import React from 'react'
import s from './Song.module.css'
import { NavLink } from 'react-router-dom'
import { SongType } from '../../redux/songs-reducer'

type Props = {
   song: SongType
}

const Song = (props: Props) => {
    return <li>
       <NavLink to={'/songs/' + props.song.num}>
           <span className={s.number}>{ props.song.num }.</span>{ props.song.name }
        </NavLink>
     </li>
}

export default Song