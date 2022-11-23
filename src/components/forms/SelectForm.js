import SelectList from '../lists/SelectList'
import { selectMenu } from '../../constants'
import styles from '../../styles/components/forms/SelectForm.module.css'

const SelectForm = (props) => {
  const {hendleInput} = props
  return (
    <div className={styles.container}>
      <form className={styles.sectionInput}>
          <input
            type="text"
            placeholder="Select..."
            onChange={hendleInput}
            className={styles.input}  
        />          
      </form>
      <div>
        <SelectList data={selectMenu} className={styles.containerList} />
      </div>  
    </div>  
  )
}

export default SelectForm