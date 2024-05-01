import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {title, projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails

  console.log('props project', props)
  console.log('project Details', projectDetails)

  return (
    <div className="container">
      <img src={imageUrl} alt={projectTitle} className="project-image" />
      <div className="box">
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
