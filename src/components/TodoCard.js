import styles from './../styles/components/TodoCard.module.css'

const TodoCard = ({ title, removeTodo, index }) => {
  
  return (
    <div style={{ marginTop: (index!==1) && "20px" }} className={styles.container}>
      <h2>
        {title}
      </h2>
      <button className={styles.button} onClick={removeTodo}>x</button>
    </div>
  )
}

export default TodoCard