import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

import routeNames from '../navigation/routeNames'
import { blogScreens } from '../constants/intro'
import { SwitchTabs } from '../components'

const Blog = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabs = (index) => () => setActiveTab(index)  
  const onShow = (title) => () => {
    if (title === blogScreens.AUTHOR) {
      navigate(routeNames.AUTHOR)
    } else if (title === blogScreens.ARTICLES) {
      navigate(routeNames.ARTICLES)
    } else if (title === blogScreens.NEWS) {
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