import styles from "../styles/screens/Author.module.css"
import {authorScreen} from "../constants/index"
import AuthorSection from "../components/section/AuthorSection"
import { SkillCard } from "../components"

const Author = () => {
  return (
    <div className={styles.container}> 
      <AuthorSection/> 
      <div>
        <div className={styles.cardSection}>
          {authorScreen.map(skill => 
            <SkillCard number={skill.number} text={skill.text} style={skill.background } />
          )}
        </div>
      </div> 
    </div>
  )
}
 
export default Author