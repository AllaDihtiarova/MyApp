import {Link, NavLink } from 'react-router-dom'

import styles from '../styles/components/NavBar.module.css'
import { navBarScreens } from '../constants'
import { Colors } from '../theme'
import routeNames from '../navigation/routeNames'

const NavBar = () => {
  const styleLink = ({ isActive }) => { return { color: (isActive ? Colors.darkPink : Colors.white) } }

  return (
    <div className={styles.container}>
      <Link to={routeNames.HOME}>
        <div className={styles.logo}></div>
      </Link>
      <div className={styles.linksContainer}>
        {navBarScreens.map(route =>
          <div >
            <NavLink 
            className={styles.link}
              style={styleLink} 
              to={route.path}  
            >
              {route.name}
            </NavLink>
          </div>
        )}
      </div>
    </div>  
  )
}

export default NavBar