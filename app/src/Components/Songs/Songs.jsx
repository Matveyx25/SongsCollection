import React from 'react'
import Song from './Song'

const Songs = props => {
    return <ul>
        {props.songs.map(u => <Song Song={u} key={u.id}/>)}
     </ul>
}

export default Songs