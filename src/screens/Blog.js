import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

import routeNames from '../navigation/routeNames'
import { SwitchTabs } from '../components'

const Blog = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabs = (index) => () => setActiveTab(index)  
  const onShow = (title) => () => {
    if (title === "Author") {
      navigate(routeNames.AUTHOR)
    } else if (title === "Articles") {
      navigate(routeNames.ARTICLES)
    } else if (title === "News") {
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