import { workWeekes } from "../constants"
import styles from "../styles/components/ReportDetails.module.css"

const ReportDetails = () => {
  
  return (
    <div className={styles.container}>
      {workWeekes.map(report =>
        <div>
          <h5 className={styles.title}>{report.title}</h5>
          <div className={styles.image}></div>
          <div>
            {report.description.map(description =>
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
        </div>)}  
  </div>
  )
}
 
export default ReportDetails