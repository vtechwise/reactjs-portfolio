import { SectionTitle } from "../component";
import { singleProjects } from "../utils/data"
import { useLoaderData } from "react-router-dom";



export const loader = ({ params }) => {
    const title = params.id
    const singleProject = singleProjects.find((project) => {
       return project.title === title 
    })
    return {singleProject}
}


const SingleProject = () => {
    const {singleProject} = useLoaderData()
  return (
      <section className="section-margin">
          <SectionTitle text={singleProject.title}/>
    </section>
  )
}
export default SingleProject