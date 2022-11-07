import styles from "../styles/components/About.module.css"
import { aboutScreen } from "../constants"
import SkillCard from "../components/SkillCard"

const About = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.mainSection}>
        <div className={styles.image} ></div>
        <div className={styles.textSection}>
          <h2 className={styles.title}>About me</h2>
          <p className={styles.text}>After working four years as a sales manager, I have developed several important skills. As a result, I felt a necessity to change my field of expertise and I decided to choose the IT sphere. I thing that the job of developer will allow me better to use all my gained skills and perform the best.</p>
          <button className={styles.btn}>Learn more</button>
        </div>
      </div> 
      <div>
        <div className={styles.cardSection}>
          {aboutScreen.map(skill => 
            <SkillCard number={skill.number} text={skill.text} style={skill.background } />
          )}
        </div>
      </div> 
    </div>
  )
}
 
export default About