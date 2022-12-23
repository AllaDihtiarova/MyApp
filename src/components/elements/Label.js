import styles from "../../styles/components/elements/Label.module.css"

const Label = (props) => {
  const {label} = props
  return (
    <label className={styles.label}>
      {label}
    </label>
  )
}

export default Label