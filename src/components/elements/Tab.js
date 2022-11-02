import { Colors } from '../../theme'
import styles from '../../styles/components/Tab.module.css'

const Tab = ({text, path1, path2, path3, path4, handleActive, isDisabled}) => {
  const getActiveStyleButton = { backgroundColor: isDisabled ? Colors.orange : Colors.white };
  const getActiveStyleText = { color: isDisabled ? Colors.white : Colors.black };
  const getActiveStyleIcon = { fill: isDisabled ? Colors.white : Colors.black };
  return (
    <button 
    type="button" 
    className={styles.button} 
    onClick={handleActive} 
    style={getActiveStyleButton}
    >
      <svg
        className={styles.icon}
        style={getActiveStyleIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d={path1}></path>
        <path d={path2}></path>
        <path d={path3}></path>
        <path d={path4}></path>
      </svg>
      <span className={styles.text} style={getActiveStyleText}>{text}</span>
    </button>
  )
}

export default Tab