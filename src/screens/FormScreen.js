import { useState } from "react"

import Form from "../components/forms/Form"
import { defaultTodos } from "../../constants"
import TodoList from '../TodoList'
import styles from '../styles/screens/FormScreen.module.css'

const FormScreen = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState(defaultTodos)

  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault()
    setTodos(todos.concat([{
      id: Date.now(),
      title: value
    }]))
    setValue("")
  }

  const removeTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))
 
  return (
    <div className={styles.container}>
      <Form handleSubmit={handleSubmit} value={value} handleChange={ handleChange} />
      <TodoList data={todos} removeTodo={removeTodo}/>
    </div>
  )  
}
export default FormScreen