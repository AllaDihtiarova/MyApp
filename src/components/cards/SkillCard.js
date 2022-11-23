import styles from "../../styles/components/cards/SkillCard.module.css"
import { Star } from "../../assets/icons"

const SkillCard = (props) => {
  const {number, text, style} = props
  return (
    <div className={styles.container} style={{ background:  style  }}>
      <h3 className={styles.number}>{number}</h3>
      <div className={styles.icon} >
        <Star />
      </div>  
      <p className={styles.text}>{ text}</p>
    </div>
  )
}

export default SkillCard