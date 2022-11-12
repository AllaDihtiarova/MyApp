import Arrow from '../assets/icons/Arrow'
import styles from '../styles/components/MoreButton.module.css'
import { Colors } from '../theme'

export const MoreButton = (props) => {
  const { onClick, light } = props

  const {color, background} = (() => {
    if (light) { 
      return  {color: Colors.black, background:  Colors.white}
    } else {
      return {color: Colors.white, background:  Colors.black}
    } 
  })()  
  
  return (
    <button className={styles.btn} style={{ background: background}} onClick={onClick}>
      <p className={styles.text} style={{ color: color }}>More</p>        
      <Arrow color={color} width={20} height={20} />        
    </button>
  )
}