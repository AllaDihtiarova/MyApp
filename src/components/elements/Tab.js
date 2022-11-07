import { Colors } from '../../theme'
import News from '../assets/icons/News'
import Article from '../assets/icons/Article'
import Author from '../assets/icons/Author'
import styles from '../../styles/components/Tab.module.css'

const Tab = (props) => {
  const {title, handleTabs, activeTab, index} = props
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
      {activeTab === 0 ? <Author className={ styles.icon} style={getActiveIcon} /> : null}
      {activeTab === 1 ? <Article className={ styles.icon} style={getActiveIcon}/> : null}
      {activeTab === 2 ? <News className={ styles.icon} style={getActiveIcon}/> : null}
      <span className={styles.text} style={getActiveText}>{title}</span>
    </button>
  )
}

export default Tab