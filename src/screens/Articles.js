import { useNavigate } from "react-router-dom"

import ReportCard from "../components/cards/ReportCard"
import { workReports } from "../constants/workReports"
import routeNames from "../navigation/routeNames"

const Articles = () => {  
  const navigate = useNavigate()

  const onSelect = (report)=> () => navigate(routeNames.REPORT_DETAILS, {state: report})

  return (
    <div>
      {workReports.map(report =>
        <ReportCard {...report}
        onSelect={onSelect(report)}
      />
      )}
    </div>
  )
}
 
export default Articles