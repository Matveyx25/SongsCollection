import React from 'react'
import s from './BigCard.module.scss'
import { NavLink } from "react-router-dom"


const BigCard = props => {
    return (
        <NavLink className={s.wrapper} to={props.path}>
            <div className={s.img}>
                <img src="/image.png" className={s.backgroundCard}/>
            </div>
            <h1 className={s.title}>{props.date}</h1>
            <h3 className={s.subtitle}>{props.title}</h3>
        </NavLink>
    )
}

export default BigCard