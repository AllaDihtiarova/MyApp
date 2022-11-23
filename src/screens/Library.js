import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { SearchForm, MoreButton, CategoriesList } from "../components"
import {libraryCategories} from '../constants/index'
import styles from '../styles/screens/Library.module.css'

const Library = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  
  const hendleInput = (event) => setValue(event.target.value)

  const filterData = libraryCategories.filter(category => category.category.toLowerCase().includes(value.toLocaleLowerCase())).filter((category, index) => index < 10)
  
  const onSelect = (path) => () => navigate(path)

  return (
    <div className={styles.container }>
      <SearchForm hendleInput={hendleInput} filterData={filterData} onSelect={onSelect}/>
      <h2 className={styles.title}>Categories:</h2>
      <div className={styles.listContainer}>
        <CategoriesList data={filterData} onSelect={onSelect}  />
      </div>  
        <MoreButton  className={styles.btn}/>  
    </div>  
  )
}

export default Library