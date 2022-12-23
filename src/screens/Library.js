import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { SearchForm, MoreButton, CategoriesList } from "../components"
import { libraryCategories } from '../constants/index'
import routeNames from "../navigation/routeNames"
import styles from '../styles/screens/Library.module.css'

const Library = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  
  const hendleInput = (event) => setValue(event.target.value)

  const filterData = libraryCategories.filter(category => category.category.toLowerCase().includes(value.toLocaleLowerCase())).filter((category, index) => index < 10)
  
  const onSelect = (path) => () => navigate(path)

  const onClick = () => navigate(routeNames.ALLCATEGORIES)

  return (
    <div className={styles.containerCategory }>
      <SearchForm hendleInput={hendleInput} classNameInput={styles.input} classNameIcon={ styles.icon} />
      <h2 className={styles.title}>Categories:</h2>
      <div className={styles.listContainer}>
        <CategoriesList data={filterData} onSelect={onSelect}  />
      </div>  
      <MoreButton className={styles.btn} onClick={ onClick} />  
    </div>  
  )
}

export default Library