import styles from "../../styles/components/elements/Error.module.css"

const Error = (props) => {
  const {message} = props

  return (
    <div className={styles.text}>{message}</div>
  )
}

export default Error