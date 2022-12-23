import { useState } from 'react'
import { Colors } from '../../theme'
import IconButton from '../buttons/IconButton'
import { Check } from '../../assets/icons'
import styles from '../../styles/components/cards/TodoCard.module.css'
import { buttonStyles } from '../../constants/intro'

const TodoCard = (props) => {
  
  const { product, shop, removeTodo, style } = props
  const [isShow, setIsShow] = useState(false)

  const transformStyleCheck = { color: isShow ? Colors.white : Colors.mint }
  const onShow = () => setIsShow(!isShow)
  const transformStyleText = isShow ? { textDecoration: "line-through", opacity: 0.5 } : null

  return (
    <div style={style} className={styles.container}>
      <IconButton
        children={<Check style={transformStyleCheck} />}
        className={styles.check}
        onClick={onShow}
        type={buttonStyles.SECONDARY}
        style={transformStyleCheck} />
      <button className={styles.textContainer} style={transformStyleText}>
        <p className={styles.name}>product: {product},</p>
        <p className={styles.name}>shop: {shop}</p> 
      </button>        
      <button className={styles.button} onClick={removeTodo}>
        X
      </button>
    </div>
  )
}

export default TodoCard