import Button from '../buttons/Button'
import { buttonStyles } from '../../constants/intro'
import styles from '../../styles/components/cards/ReportCard.module.css'

const ReportCard = (props) => { 
  const {title, main, date, onSelect, image} = props
  
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} alt="work on the laptop"/>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <span className={styles.span}>{ date}</span>
          <h5 className={styles.h5}>
            {title}
          </h5>
          <p className={styles.p}>Highlights this week:</p>
          <p className={styles.main}>{main}</p>
        </div>
        <Button type={buttonStyles.SECONDARY} title='read more' onClick={onSelect}/>
      </section>
    </div>  
  )
}

export default ReportCard