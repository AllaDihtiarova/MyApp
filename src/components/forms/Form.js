import Button from '../Button'
import styles from "../../styles/forms/Form.module.css"

const Form = (props) => {
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
        <Button />
      </form>
    </div>
  )  
}
export default Form