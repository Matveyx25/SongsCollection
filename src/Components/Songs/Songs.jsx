import { useState } from 'react'
import Song from './Song'
import s from './Song.module.css'

export const Songs = ({songs, searchValue}) => {
    const [flag, setFlag] = useState(false)

    return <ul className={s.songsWrapper}>
        {Object.values(songs).map(u => {
            const string = u.name.toUpperCase() + u.num
            if(string.search(searchValue?.toUpperCase()) !== -1 || !searchValue){
                if(!flag) setFlag(true)
                return <Song song={u} key={u.num}/>
            }
        })}
        {(searchValue && flag) && <span className={s.notResult}>Ничего не найдено</span>}
     </ul>


}