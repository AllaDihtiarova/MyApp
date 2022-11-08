import { useState } from "react"

import Search from "./assets/icons/Search"
import {libraryCategories} from '../constants/index'
import styles from "../styles/components/SearchForm.module.css"

const SeachForm = () => {
  const [value, setValue] = useState("")
  const [menuActive, setMenuActive] = useState(false)

  const hendleInput = (event) => setValue(event.target.value)

  const filterData = libraryCategories.filter(category => {
    return category.category.toLowerCase().includes(value.toLocaleLowerCase())
  })

  const hendleMenu = () => setMenuActive(!menuActive)

  return (
    <div>
      <div>
        <form className={styles.sectionInput}>
          <input
            type="text"
            placeholder="Search in the category..."
            onChange={hendleInput}
            className={styles.input}
          />
          <div className={styles.icon}>
            <Search />
          </div>
        </form>
      </div>
      <ul>
        {filterData.map(category =>
          <li className={styles.category}>
            <div onClick={hendleMenu}>{category.category}</div>
          </li>)
        }
      </ul>
    </div>
  )
}  
  
export default SeachForm  