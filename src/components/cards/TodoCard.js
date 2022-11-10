import styles from '../../styles/components/cards/TodoCard.module.css'

const TodoCard = (props) => {
  const { title, removeTodo, style } = props

  return (
    <div style={style} className={styles.container}>
      <h2>
        {title}
      </h2>
      <button className={styles.button} onClick={removeTodo}>x</button>
    </div>
  )
}

export default TodoCard