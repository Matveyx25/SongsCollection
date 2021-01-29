import React from 'react'
import s from './Navigation.module.scss'
import { NavLink } from "react-router-dom"


const Navigation = props => {
    return (
        <div className={s.wrapper}>
            <ul>
                <li><NavLink to={'/'}>
                    <img src="/icons/Home.png" alt=""/>
                    </NavLink></li>
                <li><NavLink to={'/book'}>
                    <img src="/icons/Book.png" alt=""/>
                    </NavLink></li>
                <li><NavLink to={'/add'}>
                    <img src="/icons/Add.png" alt=""/>
                    </NavLink></li>
                <li><NavLink to={'/search'}>
                    <img src="/icons/Search.png" alt=""/>
                    </NavLink></li>
                <li><NavLink to={'/profile'}>
                    <img src="/icons/Profile.png" alt=""/>
                    </NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation