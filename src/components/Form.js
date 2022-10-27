import { useState } from "react"
import Button from "./Button"
import styles from "../styles/components/Form.module.css"
import { defaultTodos } from "../constants"
import TodoList from "./TodoList"

const Form = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState(defaultTodos)

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault()
    setTodos(todos.concat([{
      id: Date.now(),
      title: value
    }]))
    setValue("")
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
 
  return (
      <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className={styles.input}
        onChange={handleChange} />
        <Button />
        </form>
      <TodoList data={todos} removeTodo={removeTodo}/>
      </div>
  )  
}
export default Form