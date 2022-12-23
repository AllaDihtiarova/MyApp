import { useState } from "react"

import { TodoList, FilterModal, ToolsBar } from "../components"
import {Form, SearchForm} from "../components"
import { defaultTodos } from "../constants"
import styles from '../styles/screens/PurchaseList.module.css'

const Purchase = () => {
  const [todos, setTodos] = useState(defaultTodos)
  const [type, setType] = useState('all')
  const [option, setOption] = useState('')
  const [isActiveModal, setIsActiveModal] = useState(false)
  const [value, setValue] = useState({ product: "", shop: "" })
  const [isShowForm, setIsShowForm] = useState(false)

  const filterData = todos.filter(prod => prod.product.toLowerCase().includes(value.product.toLocaleLowerCase())) 

  const newTodo = () => {
    setTodos(todos.concat([{
        id: Date.now(),
        product: value.product,
        shop: value.shop
      }]))
  }
  
  const handleChange = (event) => setType(event.target.value);
	
  const handleChangeOption = (event) => setOption(event.target.value);
  
  const handleSubmitTodo = event => {
    event.preventDefault()
    newTodo()
    setValue("")
    setIsShowForm(false)
  }

  const handleChangeProduct = event => setValue(event.target.value);

  const handleChangeShop = event => setValue(event.target.value);

  const hendleInput = (event) => {
    setValue(event.target.value)
  }

  const removeTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))

  const openModal = () => setIsActiveModal(!isActiveModal)
  
  const closeModals = () => {
    setValue("")
    setIsShowForm(false)
    setIsActiveModal(!isActiveModal)
  }

  const onSelect = event => {
    event.preventDefault()
    closeModals()
    if (type === "products") {
      return setTodos(todos.filter(todo => todo.product === option))
    } if (type === "shops") {
      return setTodos(todos.filter(todo => todo.shop === option))
    } 
  }

  
  const toggleForm = () => setIsShowForm(!isShowForm)
 
  return (
    <div className={styles.container}>
      <div>
        {isShowForm ?  
          <Form handleSubmit={handleSubmitTodo} product={value.product} handleChangeProduct={handleChangeProduct} shop={value.shop} handleChangeShop={handleChangeShop} />       
          : 
          < SearchForm hendleInput={hendleInput} classNameInput={styles.input} classNameIcon={styles.icon} />
        }
        <ToolsBar
        onToggle={toggleForm}
        onOpen={openModal}
        isShow={isShowForm}
      />
      </div>  
      <TodoList data={ filterData} removeTodo={removeTodo} />
      <FilterModal
        activeModal={isActiveModal}
        closeModal={openModal}
        value={type}
        selectedOption={option}
        handleChange={handleChange}
        handleChangeOption={handleChangeOption}
        onClick={onSelect}
        data={todos}
      />
    </div>
  )  
}

export default Purchase