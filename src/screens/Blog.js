import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

import routeNames from '../navigation/routeNames'
import intro from '../constants/intro'
import { SwitchTabs } from '../components'

const Blog = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabs = (index) => () => setActiveTab(index)  
  const onShow = (title) => () => {
    if (title === intro.AUTHOR) {
      navigate(routeNames.AUTHOR)
    } else if (title === intro.ARTICLES) {
      navigate(routeNames.ARTICLES)
    } else if (title === intro.NEWS) {
      navigate(routeNames.NEWS)
    }
  }

  return (
    <SwitchTabs 
      activeTab={activeTab} 
      handleTabs={handleTabs} 
      onShow={onShow}
    />
  )
}
 
export default Blog