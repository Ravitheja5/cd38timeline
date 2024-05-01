import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {title, courseTitle, description, duration, tagsList} = courseDetails
  console.log('props coures', props)
  console.log('course details', courseDetails)
  return (
    <div className="bg-container">
      <div className="box-1">
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list">
        {tagsList.map(eachObject => (
          <li key={eachObject.id}>{eachObject}</li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
