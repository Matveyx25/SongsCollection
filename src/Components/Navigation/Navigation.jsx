import { IconHome, IconBook, IconFile } from '@tabler/icons-react'
import s from './Navigation.module.scss'
import { NavLink } from "react-router-dom"
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import classNames from 'classnames';

export const Navigation = () => {
	const [songId, setSongId] = useState(null)

	const queryClient = useQueryClient()
	const queryCache = queryClient.getQueryCache()
	queryCache.subscribe((event) => {
		if(event?.query?.queryKey[0] === 'song' && event?.type === 'added' && event?.query?.queryKey[1]){
			setSongId(event?.query?.queryKey[1])
		}
	})

    return (
        <div className={s.wrapper}>
            <ul>
                <li>
                    <NavLink to={'/'} end className={({isActive}) => isActive ? s.active : ''}> 
											<IconHome color='white' size={24} strokeWidth={2}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/collections'} className={({isActive}) => isActive ? s.active : ''}>
											<IconFile color='white' size={24} strokeWidth={2}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/songs/' + songId} className={songId ? (({isActive}) => isActive ? s.active : '') : s.disabled}>
												<IconBook color='white' size={24} strokeWidth={2}/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}