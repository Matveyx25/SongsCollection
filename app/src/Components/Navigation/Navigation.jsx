import React from 'react'
import s from './Navigation.module.scss'
import { NavLink } from "react-router-dom"


const Navigation = props => {
    return (
        <div className={s.wrapper}>
            <ul>
                <li>
                    <NavLink to={'/'} exact activeClassName={s.active}>
                        <img src="./icons/Vector-2.svg" alt=""/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/collections'} activeClassName={s.active}>
                        <img src="./icons/Vector-1.svg" alt=""/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/book'} activeClassName={s.active}>
                        <img src="./icons/Vector.svg" alt=""/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/search'} activeClassName={s.active}>
                        <img src="./icons/Vector-3.svg" alt=""/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation