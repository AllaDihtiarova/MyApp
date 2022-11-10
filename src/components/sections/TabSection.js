import styles from '../../styles/components/sections/TabSection.module.css'

const TabSection = (props) => {
  const {title, text, image, onShow} = props
  
  return (
    <div className={styles.section}>
        <div className={styles.textSection}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
          <button type="submit" className={styles.btn} onClick={onShow(title)}>Show details</button>
        </div>
        <img 
          src={image} 
          className={styles.image}
          alt="icon"        
        /> 
      </div>
  )
}

export default TabSection