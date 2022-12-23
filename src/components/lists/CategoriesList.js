import CategorySection from '../sections/CategorySection'
import DefaultImage from '../elements/DefaultImage'

const CategoriesList = (props) => {
  const { data, onSelect } = props
 
  return (   
    <div>
      {data.length > 0 ? (
        <>  
        {data.map(name => 
          <div key={name.id} >            
            <CategorySection onSelect={onSelect} data={ name} />
          </div>)
        }
      </> 
      ) : 
      <DefaultImage text="You have no categories."/>
    }
    </div>  
  )
}

export default CategoriesList