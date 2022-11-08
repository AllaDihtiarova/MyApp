import { NavLink } from 'react-router-dom'

import styles from '../styles/components/NavBar.module.css'

const NavBar = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.linksContainer}>
        <NavLink 
          style={({isActive}) => {
            return {
              color: isActive ? "#e600ac" : "white",
            }
          }} 
          to='/home' 
          className={styles.linc} 
        >
          Home
        </NavLink>
        <NavLink 
          style={({isActive}) => {
            return {
              color: isActive ? "#e600ac" : "white",
            }
          }} 
          to='/library' 
          className={styles.linc } 
        >
          Library
        </NavLink> 
        <NavLink 
          style={({isActive}) => {
            return {
              color: isActive ? "#e600ac" : "white",
            }
          }} 
          to='/blog' 
          className={styles.linc} 
        >
          Blog
          </NavLink>
        <NavLink 
          style={({isActive}) => {
            return {
              color: isActive ? "#e600ac" : "white",
            }
          }} 
          to='/about' 
          className={styles.linc} 
        >
          About
        </NavLink>      
        
        <NavLink 
          style={({isActive}) => {
            return {
              color: isActive ? "#e600ac" : "white",
            }
          }} 
          to='/contact'
          className={styles.linc} 
        >
          Contact
        </NavLink>
      </div>
    </div>  
  )
}

export default NavBar