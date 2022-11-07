import { Colors } from '../../theme'
import styles from '../../styles/components/Tab.module.css'

const Tab = (props) => {
  const {title, handleTabs, activeTab, index, icon} = props
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
      <div className={styles.icon} style={getActiveIcon}>{icon}</div>
      
      <span className={styles.text} style={getActiveText}>{title}</span>
    </button>
  )
}

export default Tab