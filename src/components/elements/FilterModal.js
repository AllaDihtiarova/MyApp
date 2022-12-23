import Button from '../buttons/Button'
import { ChevronDawn } from '../../assets/icons'
import { buttonStyles } from '../../constants/intro'
import styles from '../../styles/components/elements/FilterModal.module.css'

const  FilterModal = (props) => {
  const { activeModal, closeModal, value, selectedOption, handleChange, handleChangeOption, onClick, data } = props

  const toggleModal = (() => {
    if (!activeModal) {
      return {opacity: 0, pointerEvents: 'none'}
    } else {
      return {opacity: 1, pointerEvents: 'all'}
    }
  })()

  return (
    <div className={styles.backdrop} style={toggleModal}>
      <div className={styles.modal}>
        <div className={styles.containerSelect}>
          <select value={value} onChange={handleChange} className={styles.select}>
            <option className={styles.selectProduct}>
              all
            </option>
            <option className={styles.selectProduct}>
              products
            </option>
            <option className={styles.selectProduct}>
              shops
            </option> 
          </select>
          <div className={styles.iconType}>
              <ChevronDawn/>
          </div>
          <select value={selectedOption} onChange={handleChangeOption} className={styles.select}>
            {value === "products" && data.map(product => 
              <option key={product.id} className={styles.selectProduct} numberOfLines={1}>{product.product}</option>)}
            {value === "shops" && data.map(shop => 
              <option key={shop.id} className={styles.selectProduct} numberOfLines={1}>{shop.shop}</option>)}
            {value === "all" && data.map(product => 
              <option key={product.id} className={styles.selectProduct} numberOfLines={2} ellipsizeMode='tail'>{product.product}</option>)}
          </select>
          <div className={styles.iconOption}>
              <ChevronDawn/>
          </div>
        </div>        
        <div className={styles.containerBtn}>
          <Button title='Search' type={buttonStyles.SECONDARY} onClick={ onClick} />
        </div> 
        <button className={styles.buttonClose} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  )
}

export default FilterModal