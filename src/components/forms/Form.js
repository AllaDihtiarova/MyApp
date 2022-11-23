import Button from '../buttons/Button'
import styles from "../../styles/components/forms/Form.module.css"
import { buttonStyles } from '../../constants/intro'

const Form = (props ) => {
  const {handleSubmit, value, handleChange} = props

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className={styles.input}
          onChange={handleChange}
        />
        <Button type={buttonStyles.SECONDARY} title="Sabmit"/>
      </form>
    </div>
  )  
}

export default Form