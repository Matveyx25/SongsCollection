import React, { FC } from 'react'
import { ThemeType } from '../../redux/songs-reducer'
import Collection from './Collection'
import s from './Collection.module.css'

type Properties = {
    properties: ThemeType,
    id: number
}

type Props = {
    collections: Array<Properties>
}

const Collections: FC<Props> = (props) => {
    if(!props.collections){
        return <></>
    }
    return <ul className={s.collectionWrapper}>
        {props.collections.map(u => <Collection collection={u} key={u.id}/>)}
     </ul>
}

export default Collections