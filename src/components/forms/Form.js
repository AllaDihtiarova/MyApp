import Input from '../elements/Input'
import Button from '../buttons/Button'
import { buttonStyles } from '../../constants/intro'
import styles from "../../styles/components/forms/Form.module.css"

const Form = (props ) => {
  const { handleSubmit, product, shop, handleChangeProduct, handleChangeShop } = props
  
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.containerInput}>
          <Input handleSubmit={handleSubmit} value={product} handleChange={handleChangeProduct } label="Product:"/>
          <Input handleSubmit={handleSubmit} value={shop} handleChange={handleChangeShop } label="Shop:"/>
        </div> 
        <div className={styles.containerButton}>
          <Button type={buttonStyles.SECONDARY} title="Submit" />
        </div>
      </form>  
    </div>
  )  
}

export default Form