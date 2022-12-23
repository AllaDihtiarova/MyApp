import { useState } from "react"

import { Menu } from "../../assets/icons"
import styles from '../../styles/components/sections/CategorySection.module.css'

const CategorySection = (props) => {
  const { onSelect, data } = props
  const { category, subcategories } = data

  const [isShow, setIsShow] = useState(false)

  const transformStyle = { transform: `rotate(${isShow ? "90deg" : "0deg"})` }
  
  const onShow = () => setIsShow(!isShow)

  return (
    <div className={styles.category}>
      <div className={styles.icon} >
        <Menu style={transformStyle} />  
      </div>
      <div onClick={onShow}>
        <span>
          {category}
        </span>
        {isShow ? (
          <div>
            { subcategories.map((subcategory) =>
              <div key={subcategory.id} onClick={onSelect(subcategory.path)} className={styles.subcategory}>
                <span>
                  {subcategory.name}
                </span>
              </div>  
            )}
          </div>
        ) : null}       
      </div>
    </div>
  )
}

export default CategorySection