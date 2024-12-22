import s from './Song.module.css'
import { NavLink } from 'react-router-dom'


const Song = (props) => {
    return <li>
       <NavLink to={'/songs/' + props.song.num}>
           <span className={s.number}>{ props.song.num }.</span>{ props.song.name }
        </NavLink>
     </li>
}

export default Song