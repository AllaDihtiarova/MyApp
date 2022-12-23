import IconButton from "../buttons/IconButton"
import { Filter, DocumentPlus, Document } from "../../assets/icons"
import { buttonStyles } from "../../constants/intro"
import styles from '../../styles/components/elements/ToolsBar.module.css'

const ToolsBar = (props) => {
  const { onOpen, onToggle, isShow } = props

  return ( 
        <div className={styles.containerButtons}>
          <IconButton  
            className={styles.btn}
            onClick={onToggle}
          >
        {isShow ? <Document /> :
          
            <DocumentPlus />
          
          }
          </IconButton>
          <IconButton 
            className={styles.btn}
            onClick={onOpen}         
          >
            <Filter />
          </IconButton>
        </div>
  )
}

export default ToolsBar