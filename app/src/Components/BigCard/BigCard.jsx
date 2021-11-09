import React from 'react'
import s from './BigCard.module.scss'
import { NavLink } from "react-router-dom"


const BigCard = props => {
    return (
        <NavLink className={s.wrapper} to={props.path}>
            <img src="/image8.png" className={s.backgroundCard}/>
            <h1 className={s.title}>{props.date}</h1>
            <h3 className={s.subtitle}>{props.title}</h3>
        </NavLink>
    )
}

export default BigCard