import React from 'react'
import Collection from './Collection'
import s from './Collection.module.css'

const Collections = props => {
    return <ul className={s.collectionWrapper}>
        {props.collections.map(u => <Collection collection={u} key={u.id}/>)}
     </ul>
}

export default Collections