import { NavLink } from 'react-router-dom'

const Collection = (props) => {
    return <li>
       <NavLink to={'/themes/' + props.collection.theme}>
           <span>{ props.collection.theme }</span>
           <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.01887 6.50372L0 11.5507L1.53561 13L7.2793 7.22417L8 6.49944L7.27923 5.77477L1.53554 0L6.77704e-05 1.44947L5.01887 6.50372Z" fill="#090808" fill-opacity="0.35"/>
            </svg>
        </NavLink>
     </li>
}

export default Collection