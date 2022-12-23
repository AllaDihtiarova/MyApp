import styles from "../../styles/components/elements/DefaultImage.module.css"

const DefaultImage = (props) => {
  const {text} = props

  return (
    <>
      <p className={styles.p}>{ text}</p>
      <div className={styles.image}/>
    </>
  )
}

export default DefaultImage