import styles from "../../styles/components/buttons/Button.module.css"
import { Colors } from "../../theme"
import { buttonStyles } from "../../constants/intro"

const Button = (props) => {
  const {type, disabled, title, onClick} = props 
  
  const themeStyle = (() => {
    if(disabled) {
      return {color: Colors.gray10, background: Colors.gray6}
    }
    switch(type) {
      case buttonStyles.PRIMARY:
        return {color: Colors.white, background: Colors.violet};        
      case buttonStyles.DANGER:
        return {color: Colors.white, background: Colors.red };
      case buttonStyles.SECONDARY:
        return {color: Colors.white, background: Colors.mint};
      default:
        return {color: Colors.white, background: Colors.violet};  
    }  
  })()

  return (
    <button disabled={disabled} className={styles.container} style={themeStyle} onClick={onClick}>
      <p className={styles.text} style={themeStyle}>{title }</p>
    </button>
  )
}

export default Button