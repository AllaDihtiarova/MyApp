import styles from "../../styles/cards/SkillCard.module.css"

const SkillCard = (props) => {
  const {number, text, style} = props
  return (
    <div className={styles.container} style={{ background:  style  }}>
      <h3 className={styles.number}>{number}</h3>
      <p>{ text}</p>
    </div>
  )
}

export default SkillCard