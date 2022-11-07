import Tab from "./elements/Tab"
import TabSection from '../components/section/TabSection'
import { blogScreens } from "../constants"
import styles from '../styles/components/SwitchTabs.module.css'

const SwitchTabs = (props) => {
  const {activeTab, handleTabs, onShow} = props

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {blogScreens.map((tab, index) => 
          <Tab 
            title={tab.title} 
            index={index}
            activeTab={activeTab}  
            handleTabs={handleTabs(index)}
          />) 
        }
      </div>
      <div className={styles.line} />
      <TabSection
        title={blogScreens[activeTab].title}
        text={blogScreens[activeTab].text}
        image={blogScreens[activeTab].image}
        onShow={onShow}
      />      
    </div>  
  )
}

export default SwitchTabs