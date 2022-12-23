import TodoCard from "../cards/TodoCard"
import DefaultImage from "../elements/DefaultImage"
import styles from "../../styles/components/lists/TodoList.module.css"

const TodoList = (props) => {
  const { data, removeTodo } = props
  const onRemove = (id) => () => removeTodo(id)
    
  return (
    <div >
    {data.length> 0 ? 
    (<div className={styles.todoList}>
        {data.map(todo => 
          <div key={todo.id} className={styles.checkCard}>  
            <TodoCard {...todo} removeTodo={onRemove(todo.id)} style={{ marginTop: (todo.id!==1) && "20px" }}/>
          </div> )}
      </div>) : 
      (<DefaultImage text="You have no todos."/>)}  
    </div>
    
  )
}

export default TodoList