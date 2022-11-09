import { descriptionTypes } from "../../constants/intro"
import styles from "../../styles/sections/AuthorSection.module.css"

const AuthorSection = () => {
  return (
    <div className={styles.mainSection}>
        <div className={styles.image} ></div>
        <div className={styles.textSection}>
          <h2 className={styles.title}>About me</h2>
          <p>{descriptionTypes.BIOGRAPHY}</p>
          <button className={styles.btn}>Learn more</button>
        </div>
      </div>
  )
}

export default AuthorSection