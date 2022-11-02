import { useState } from "react"

import Tab from "./elements/Tab"
import { defaultTabs } from "../constants"
import { Links } from "../constants/Links"
import styles from '../styles/components/SwitchTabs.module.css'

const SwitchTabs = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleActive = () => {
    setIsDisabled(!isDisabled);
  }
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {defaultTabs.map(tab => 
          <Tab 
            text={tab.text} 
            path1={tab.path1} 
            path2={tab.path2} 
            path3={tab.path3} 
            path4={tab.path4} 
            isDisabled={isDisabled} 
            handleActive={handleActive}
          />) 
        }
      </div>
      <div className={styles.line}></div>
      <div className={styles.section}>
        <div>
          <h3 className={styles.title}>Lorem ipsum</h3>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img 
          src={Links.switchTabs} 
          className={styles.image}
          alt="icon"
        />
      </div>
      <button type="submit" className={styles.btn}>Show details</button>
    </div>  
  )
}

export default SwitchTabs