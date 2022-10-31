import { useNavigate } from 'react-router-dom' 
import { workWeekes } from '../constants'
import { ReportCard } from '../components'

const Blog = () => {
  const navigate = useNavigate()

  function onDetails() {
    navigate("/report");
  }
  return (
    <div>
      {workWeekes.map(report => 
        <ReportCard {...report} onSelect={ onDetails} /> )}
    </div>
  )
}
 
export default Blog