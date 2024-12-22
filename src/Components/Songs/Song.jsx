import s from './Song.module.css'
import { NavLink } from 'react-router-dom'


const Song = (props) => {
    return <li>
       <NavLink to={'/songs/' + props.song.num} className={s.link}>
				<div className={s.content}>
						<span className={s.number}>{ props.song.num }.</span>{ props.song.name }
				</div>
				<div className={s.tags}>
				{props?.fields.length > 0 && props?.fields.map(el => (
					<span className={s.tag}>
						{{'name': 'Название', 'text': 'Текст', 'authors': 'Автор'}[el]}
					</span>
					))}
				</div>
      </NavLink>
     </li>
}

export default Song