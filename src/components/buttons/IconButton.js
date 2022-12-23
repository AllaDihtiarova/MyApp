import { buttonStyles } from "../../constants/intro"
import { Colors } from "../../theme"

const IconButton = (props) => {
  const {className, onClick, type, children} = props
  
  const themeStyle = (() => {
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
    <button className={className} onClick={onClick} style={themeStyle}>
      {/* <Check style={style}/> */}
      {children}
    </button>
  )
}

export default IconButton