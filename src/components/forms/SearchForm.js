import { useState } from "react"

import Search from "../../assets/icons/Search" 
import {MoreButton} from '../MoreButton' 
import { libraryCategories } from '../../constants/index'
import CategoriesList from "../lists/CategoriesList"
import styles from "../../styles/components/forms/SearchForm.module.css"

const SearchForm = () => {
  const [value, setValue] = useState("")
  const [activeCategory, setActiveCategory] = useState(0)

  const hendleInput = (event) => setValue(event.target.value)
  const filterData = libraryCategories.filter(category => category.category.toLowerCase().includes(value.toLocaleLowerCase()))
  const onClick = () => setActiveCategory(activeCategory)
  
  return (
    <div className={styles.container}>
      <div className={styles.popularCategoriesSection}>
        <div className={styles.activeCategory} />
        <div className={styles.popularCategories}>
          <div className={styles.shelf} />
          <div className={styles.shelf } />
        </div>
      </div>  
    <div className={styles.categoriesSection}>
      <form className={styles.sectionInput}>
        <input
          type="text"
          placeholder="Search..."
          onChange={hendleInput}
          className={styles.input}  
        />
         <div className={styles.icon}>
          <Search />
        </div>          
      </form>
      
      <div className={styles.listContainer}>
        <h2 className={styles.title}>Categories:</h2>
        <CategoriesList data={filterData} activeCategory={activeCategory} onClick={ onClick} />
      </div>  
      <MoreButton />
    </div>  
  </div>
  )
}  
  
export default SearchForm  