import React from 'react'
import { NavLink } from 'react-router-dom'

const Song = props => {
    return <li>
       <NavLink to={'/songs?id=' + props.song.id}>
           { props.song }
        </NavLink>
     </li>
}

export default Song