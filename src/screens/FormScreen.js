import { useState } from "react"

import { Form, TodoList, Modal } from "../components"
import { Filter } from "../assets/icons"
import { defaultTodos } from "../constants"
import styles from '../styles/screens/FormScreen.module.css'

export const FormScreen = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState(defaultTodos)
  const [activeModal, setActiveModal] = useState(true)

  const onSearch = () => {
    setActiveModal(!activeModal)
  }

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

  const openModal = () => {
    setActiveModal(!activeModal)
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <Form handleSubmit={handleSubmit} value={value} handleChange={handleChange} />
        <button className={styles.btn} onClick={openModal}>
          <Filter className={styles.icon} />
        </button>
      </div>  
      <TodoList data={todos} removeTodo={removeTodo} />
      <Modal activeModal={activeModal} onSearch={ onSearch} />
    </div>
  )  
}