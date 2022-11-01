import { useLocation } from "react-router-dom";
import styles from "../styles/components/ReportDetails.module.css"

const ReportDetails = () => {
  let {state} = useLocation();

  return (
    <div className={styles.container}>
     
          <h5 className={styles.title}>{state.title}</h5>
          <div className={styles.image}></div>
          <div>
            {state.description.map(description =>
              <div>
                <p className={styles.weekDay}>{description.weekDay}</p>
                <p className={styles.theme}>{description.theme}</p>
                <ul className={styles.skill}>Pumped skills:
                  {description.skills.map(skill =>
                    <li className={styles.skill}>{ skill}</li>)}
                </ul>
                <p className={styles.skill}>
                  The hardest thing was {description.theHeaviest}
                </p>
              </div>)}
          </div>
          
  </div>
  )
}
 
export default ReportDetails