import Label from './Label'
import styles from '../../styles/components/elements/Input.module.css'

const Input = (props) => {
  const {value, handleChange, label} = props

  return (
    <div>
      {label && <Label label={label } />}
        <input
          type="text"
          value={value}
          className={styles.input}
          onChange={handleChange}
        />
    </div>
  )
}

export default Input