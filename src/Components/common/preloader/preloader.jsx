import { IconLoader2 } from '@tabler/icons-react'
import s from './preloader.module.css'

export const Preloader = () => {
    return <div>
    	<IconLoader2 className={s.preloader}/>
    </div>
}