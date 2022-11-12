import Menu from '../../assets/icons/Menu'
import styles from '../../styles/components/lists/CategoriesList.module.css'

const CategoriesList = (props) => {
  const {data, activeCategory, onClick} = props

  return (
    <div>
        {data.map(category =>
          <div className={styles.category} onClick={onClick}>
            <div className={styles.icon} >
              <Menu/>
            </div>
            <div >
              {category.category}
              {category.subcategorys.map((subcategory, index) =>
                (index === activeCategory) ? <div>{ subcategory.name}</div> : null
                )}
            </div>
          </div>)
        }
      </div>
  )
}

export default CategoriesList