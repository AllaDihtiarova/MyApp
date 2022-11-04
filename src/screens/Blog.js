import { useNavigate } from 'react-router-dom' 

import routeNames from '../navigation/routeNames'
import { SwitchTabs } from '../components'

const Blog = () => {
  const navigate = useNavigate()

  const onCards = () => 
    navigate(routeNames.ARTICLES)

  return (
    <SwitchTabs onSelect={onCards()} />
  )
}
 
export default Blog