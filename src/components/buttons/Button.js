import styles from "../../styles/components/buttons/Button.module.css"
import { Colors } from "../../theme"
import { buttonSize, buttonStyles } from "../../constants/intro"

const Button = (props) => {
  const {type, disabled, title, onClick, size} = props 
  
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

  const themeSize = (() => {
    switch (size) {
      case buttonSize.SMALL:
        return { width: "80px", height: "30px" };
      case buttonSize.MEDIUM: 
        return { width: "130px", height: "40px" };
      case buttonSize.BIG: 
        return { width: "200px", height: "50px" };
      default:
        return { width: "130px", height: "40px" };
    }
  })()

  return (
    <button disabled={disabled} className={styles.container} style={themeStyle} onClick={onClick}>
      <p className={styles.text} >{title }</p>
    </button>
  )
}

export default Button