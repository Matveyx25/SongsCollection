import React from 'react'
import s from './Song.module.css'
import { NavLink } from 'react-router-dom'

const Song = props => {
    return <li>
       <NavLink to={'/songs/' + props.song.id}>
           <span className={s.number}>{ props.song.id }.</span>{ props.song.name }
        </NavLink>
     </li>
}

export default Song