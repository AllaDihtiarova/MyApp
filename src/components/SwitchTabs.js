import { useState } from "react"

import Tab from "./elements/Tab"
import TabSection from '../components/section/TabSection'
import { tabs, blogContent} from "../constants"
import styles from '../styles/components/SwitchTabs.module.css'

const SwitchTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabs = (index) => () => setActiveTab(index)

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {tabs.map((tab, index) => 
          <Tab 
            title={tab.text} 
            path1={tab.path1} 
            path2={tab.path2} 
            path3={tab.path3} 
            path4={tab.path4}
            index={index}
            activeTab={activeTab}  
            handleTabs={handleTabs(index)}
          />) 
        }
      </div>
      <div className={styles.line} />
      <TabSection
        title={blogContent[activeTab].title}
        text={blogContent[activeTab].text}
        image={blogContent[activeTab].image}
      />      
    </div>  
  )
}

export default SwitchTabs