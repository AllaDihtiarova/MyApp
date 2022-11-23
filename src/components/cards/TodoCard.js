import styles from '../../styles/components/cards/TodoCard.module.css'

const TodoCard = (props ) => {
  const { product, shop, removeTodo, style } = props

  return (
    <div style={style} className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.product}>
          {product}
        </h2>
        <p>
          {shop}
        </p>
      </div>  
      <button className={styles.button} onClick={removeTodo}>
        <p>
          X
        </p>
      </button>
    </div>
  )
}

export default TodoCard