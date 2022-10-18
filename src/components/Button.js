import styles from "./../styles/components/Button.module.css"

const Button = () => {
  return (
    <button
        type="submit"
        className={styles.button}
      >
        Submit
      </button>
  )
}

export default Button