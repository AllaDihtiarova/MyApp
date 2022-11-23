import SearchForm from '../forms/SearchForm'
import SelectForm from '../forms/SelectForm'
import Button from '../buttons/Button'
import { buttonStyles } from '../../constants/intro'
import styles from '../../styles/components/elements/Modal.module.css'

const Modal = (props) => {
  const {activeModal, onSearch} = props

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
        <SearchForm />
        <div className={styles.containerSelectForm}>
          <SelectForm />
        </div>  
        <div className={styles.containerBtn}>
          <Button title='Search' type={buttonStyles.SECONDARY} onClick={onSearch} />
        </div> 
      </div>
    </div>
  )
}

export default Modal