import { useState } from "react"

import Search from "../../assets/icons/Search" 
import { libraryCategories } from '../../constants/index'
import CategoriesList from "../lists/CategoriesList"
import styles from "../../styles/forms/SearchForm.module.css"

const SearchForm = () => {
  const [value, setValue] = useState("")
  const [menuActive, setMenuActive] = useState(false)

  const hendleInput = (event) => setValue(event.target.value)

  const filterData = libraryCategories.filter(category => category.category.toLowerCase().includes(value.toLocaleLowerCase()))

  const handleMenu = () => setMenuActive(!menuActive)

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
      <CategoriesList handleMenu={handleMenu} filterData={ filterData} />
    </div>
  )
}  
  
export default SearchForm  