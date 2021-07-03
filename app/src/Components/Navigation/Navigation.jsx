import React from 'react'
import s from './Navigation.module.scss'
import { NavLink } from "react-router-dom"


const Navigation = props => {
    return (
        <div className={s.wrapper}>
            <ul>
                <li><NavLink to={'/'} exact activeClassName={s.active}>
                    <img src="/icons/Home.png" alt=""/>
                    <span className={s.line}></span>
                    </NavLink></li>
                <li><NavLink to={'/book'} activeClassName={s.active}>
                    <img src="/icons/Book.png" alt=""/>
                    <span className={s.line}></span>
                    </NavLink></li>
                {/* <li><NavLink to={'/add'}>
                    <img src="/icons/Add.png" activeClassName={s.activeLink} alt=""/>
                    </NavLink></li> */}
                <li><NavLink to={'/search'} activeClassName={s.active}>
                    <img src="/icons/Search.png" alt=""/>
                    <span className={s.line}></span>
                    </NavLink></li>
                {/* <li><NavLink to={'/profile'}>
                    <img src="/icons/Profile.png" activeClassName={s.activeLink} alt=""/>
                    </NavLink></li> */}
            </ul>
        </div>
    )
}

export default Navigation