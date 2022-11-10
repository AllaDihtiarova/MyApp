import { Colors } from '../../theme'
import styles from '../../styles/components/elements/Tab.module.css'

const Tab = (props) => {
  const { title, handleTabs, activeTab, icon } = props
  const activeColor = (activeTab) ? Colors.white : Colors.black
  const getActiveButton = { backgroundColor: (activeTab) ? Colors.orange : Colors.white };

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