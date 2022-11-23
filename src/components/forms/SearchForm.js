import { Search } from "../../assets/icons" 

import styles from "../../styles/components/forms/SearchForm.module.css"

const SearchForm = (props) => {
  const {hendleInput} = props

  return (
    
      <div className={styles.categoriesSection}>
        <form className={styles.sectionInput}>
          <input
            type="text"
            placeholder="Search..."
            onChange={hendleInput}
            className={styles.input}  
        />
        <div className={styles.icon}>
          <Search className={styles.dandruff } />
        </div>          
        </form>
      </div> 

  )
}

export default SearchForm