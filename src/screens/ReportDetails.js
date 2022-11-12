import { useLocation } from "react-router-dom";
import styles from "../styles/screens/ReportDetails.module.css"

const ReportDetails = () => {
  let {state} = useLocation();

  return (
    <div className={styles.container}>
          <h5 className={styles.title}>{state.title}</h5>
          <img src={state.image} className={styles.image} alt="work on the laptop"/>
          <div className={styles.descriptionSection}>
            {state.description.map(description =>
              <div className={styles.description}>
                <p className={styles.weekDay}>{description.weekDay}</p>
                <p className={styles.theme}>{description.theme}</p>
                <ul className={styles.skill}>Pumped skills:
                  {description.skills.map(skill =>
                    <li className={styles.skill}>{ skill.skill}</li>)}
                </ul>
                <p className={styles.skill} style={{color: "#000080"}}>
                  The hardest thing was {description.theHeaviest}
                </p>
              </div>)}
          </div>
          
  </div>
  )
}
 
export default ReportDetails