import { Colors } from '../../theme'
import styles from '../../styles/elements/Tab.module.css'

const Tab = (props) => {
  const { title, handleTabs, activeTab, index, icon } = props
  const activeColor = (activeTab === index) ? Colors.white : Colors.black
  const getActiveButton = { backgroundColor: (activeTab === index) ? Colors.orange : Colors.white };

  return (
    <button 
      type="button" 
      className={styles.button} 
      onClick={handleTabs} 
      style={getActiveButton}
    >
      <div className={styles.icon} style={{fill: activeColor}}>{icon}</div>
      
      <span className={styles.text} style={{color: activeColor}}>{title}</span>
    </button>
  )
}

export default Tab