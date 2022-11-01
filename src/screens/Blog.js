import { useNavigate } from 'react-router-dom' 
import { workWeekes } from '../constants'
import { ReportCard } from '../components'
import routeNames from '../navigation/routeNames'

const Blog = () => {
  const navigate = useNavigate()

  const onDetails = (report) => () => 
    navigate(routeNames.REPORT_DETAILS, {state: report});

  return (
    <div>
      {workWeekes.map(report => 
        <ReportCard {...report} onSelect={ onDetails(report)} /> )}
    </div>
  )
}
 
export default Blog