import { Colors } from '../../theme'
import styles from '../../styles/components/Tab.module.css'

const Tab = (props) => {
  const {title, path1, path2, path3, path4, handleTabs, activeTab, index} = props
  const getActiveButton = { backgroundColor: (activeTab === index) ? Colors.orange : Colors.white };
  const getActiveText = { color: (activeTab === index) ? Colors.white : Colors.black };
  const getActiveIcon = { fill: (activeTab === index) ? Colors.white : Colors.black };
  
  return (
    <button 
    type="button" 
    className={styles.button} 
    onClick={handleTabs} 
    style={getActiveButton}
    >
      <svg
        className={styles.icon}
        style={getActiveIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d={path1}></path>
        <path d={path2}></path>
        <path d={path3}></path>
        <path d={path4}></path>
      </svg>
      <span className={styles.text} style={getActiveText}>{title}</span>
    </button>
  )
}

export default Tab