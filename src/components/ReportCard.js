import { Links } from '../constants/Links'
import styles from '../styles/components/ReportCard.module.css'

const ReportCard = (props) => { 
  const {title, main, date, onSelect} = props
  
  return (
    <div className={styles.container}>
      <img src={Links.week1} className={styles.image} alt="work on the laptop"/>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <span className={styles.span}>{ date}</span>
          <h5 className={styles.h5}>
            {title}
          </h5>
          <p className={styles.p}>Highlights this week: { main}</p>
        </div>
        <button type="submit" className={styles.btn} onClick={onSelect}>read more</button>                
      </section>
    </div>  
  )
}

export default ReportCard