import { Arrow } from '../../assets/icons'
import styles from '../../styles/components/buttons/MoreButton.module.css'
import { Colors } from '../../theme'

const MoreButton = (props) => {
  const { onClick, light, className } = props

  const {color, background} = (() => {
    if (light) { 
      return  {color: Colors.black, background:  Colors.white}
    } else {
      return {color: Colors.white, background:  Colors.black}
    } 
  })()  
  
  return (
    <button className={className} style={{ background: background}} onClick={onClick}>
      <p className={styles.text} style={{ color: color }}>More</p>        
      <Arrow color={color} width={20} height={20}/>        
    </button>
  )
}

export default MoreButton