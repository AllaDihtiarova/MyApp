import { useState } from "react"

import { Form, TodoList, FilterModal, Error, SearchForm, IconButton } from "../components"
import { Filter, DocumentPlus, Document } from "../assets/icons"
import { buttonStyles } from "../constants/intro"
import { defaultTodos } from "../constants"
import styles from '../styles/screens/PurchaseList.module.css'

const PurchaseList = () => {
  const [product, setProduct] = useState("")
  const [shop, setShop] = useState("")
  const [todos, setTodos] = useState(defaultTodos)
  const [isActiveModal, setIsActiveModal] = useState(false)
  const [isShowForm, setIsShowForm] = useState(false)
  const [type, setType] = useState('all')
  const [option, setOption] = useState('')
  const [showError, setShowError] = useState(false)
  const [showFilterData, setShowFilterData] = useState(false)

  const filterData = defaultTodos.filter(prod => prod.product.toLowerCase().includes(product.toLocaleLowerCase()))

  const newTodo = () => {
    setTodos(todos.concat([{
        id: Date.now(),
        product: product,
        shop: shop
      }]))
  } 
  
  const handleChange = (event) => setType(event.target.value);
	
	const handleChangeOption = (event) => setOption(event.target.value);

  const handleChangeProduct = event => setProduct(event.target.value);

  const handleChangeShop = event => setShop(event.target.value);

  const handleSubmitTodo = event => {
    event.preventDefault()
    if (product.length < 10) {
      newTodo()
      setProduct("")
      setShop("")
      setIsShowForm(false)
      setShowFilterData(false)
    } else {
      setShowError(true)
    }
  }

  const hendleInput = (event) => {
    setProduct(event.target.value)
    setShowFilterData(true)
  }

  const removeTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))
  
  const toggleForm = () => setIsShowForm(!isShowForm)

  const openModal = () => setIsActiveModal(!isActiveModal)

  const activeModal = () => setIsActiveModal(!isActiveModal)
  
  const closeModals = () => {
    setProduct("")
    setShop("")
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
 
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        {isShowForm ?  
          <Form handleSubmit={handleSubmitTodo} product={product} handleChangeProduct={handleChangeProduct} shop={shop} handleChangeShop={handleChangeShop} />       
          : 
          < SearchForm hendleInput={hendleInput} classNameInput={styles.input} classNameIcon={styles.icon} />
        } 
        <div className={styles.containerButtons}>
          <IconButton
            children={isShowForm ? <Document /> : <DocumentPlus />}  
            className={styles.btn}
            onClick={toggleForm}
            type={buttonStyles.SECONDARY}
          />
          <IconButton
            children={<Filter />}  
            className={styles.btn}
            onClick={openModal}
            type={buttonStyles.SECONDARY}          
          />
        </div>
      </div>
      {showError && <Error message="too long" />} 
      {showFilterData ?
        <TodoList data={filterData} removeTodo={removeTodo} /> :
        <TodoList data={todos} removeTodo={removeTodo} />
      } 
      <FilterModal
        activeModal={isActiveModal}
        closeModal={activeModal}
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

export default PurchaseList