import React from 'react'
import s from './BigCard.module.scss'
import { NavLink } from "react-router-dom"


const BigCard = props => {
    return (
        <div className={s.wrapper}>
            <img src="/image8.png" className={s.backgroundCard}/>
            <h1 className={s.title}>25 декабря</h1>
            <h3 className={s.subtitle}>Рождество Христово</h3>
        </div>
    )
}

export default BigCard