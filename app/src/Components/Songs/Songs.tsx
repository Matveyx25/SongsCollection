import { FC, useState } from 'react'
import { SongType } from '../../redux/songs-reducer'
import Song from './Song'
import s from './Song.module.css'

type Properties = {
    properties: SongType
}

type Props = {
    songs: Array<Properties>,
    searchValue?: string
}

const Songs: FC<Props> = ({songs, searchValue}) => {
    const [flag, setFlag] = useState(false)

    return <ul className={s.songsWrapper}>
        {songs.map(u => {
            const string = u.properties.name.toUpperCase() + u.properties.num
            if(string.search(searchValue!.toUpperCase()) !== -1 || !searchValue){
                if(!flag) setFlag(true)
                return <Song song={u.properties} key={u.properties.num}/>
            }
        })}
        {(searchValue && flag) && <span className={s.notResult}>Ничего не найдено</span>}
     </ul>


}

export default Songs