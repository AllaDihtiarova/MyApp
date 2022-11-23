import CategorySection from '../sections/CategorySection'
import styles from '../../styles/components/lists/CategoriesList.module.css'

const CategoriesList = (props) => {
  const { data, onSelect } = props
 
  return (   
    <div>
      {data.length > 0 ? (
        <>  
        {data.map(category => 
          <div key={category.id} >            
            <CategorySection onSelect={onSelect} data={ category} />
          </div>)
        }
      </> 
      ) : 
      <>
        <p className={styles.p}>You have no categories.</p>
        <div className={styles.image}/>
      </>
    }
    
    </div>  
  )
}

export default CategoriesList