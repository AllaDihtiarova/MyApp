import styles from '../../styles/components/lists/CategoriesList.module.css'

const CategoriesList = (props) => {
  const {handleMenu, filterData} = props

  return (
    <ul>
        {filterData.map(category =>
          <li className={styles.category}>
            <div onClick={handleMenu}>{category.category}</div>
          </li>)
        }
      </ul>
  )
}

export default CategoriesList