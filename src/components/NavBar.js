import { Link } from 'react-router-dom'

import styles from '../styles/components/NavBar.module.css'

const NavBar = () => {

  return (
    <div className={styles.container}>
      <Link to='/' className={styles.linc}>Home</Link> 
      <Link to='/blog' className={styles.linc}>Blog</Link>
      <Link to='/library' className={styles.linc}>Library</Link>
      <Link to='/about' className={styles.linc}>About</Link>
    </div>  
  )
}

export default NavBar