import TodoCard from "./TodoCard"
import styles from "../styles/components/TodoList.module.css"

const TodoList = ({data, removeTodo}) => {
 const onRemove = (id) => () => removeTodo(id) 

  return (
    <div className={styles.todoList}>
    {data.length>0 ? 
    (<div>
        {data.map(todo => 
        <div key={todo.id}>
          <TodoCard {...todo} removeTodo={onRemove(todo.id)} index={todo.id} />
        </div> )}
      </div>) : 
      (<p className={styles.p}>You have no todos.</p>)}  
    </div>
    
  )
}

export default TodoList