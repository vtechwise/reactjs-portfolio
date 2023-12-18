import { useFetchProjects } from "../utils/fetchProjects"
import { redirect, useLoaderData } from "react-router-dom";
import { createClient } from "contentful";
import { useNavigation } from "react-router-dom";
import { Project, SectionTitle } from "../component";
export const loader = async () => {
  const client = createClient({
    space: "ty6v85dqhyv5",
    environment: "master",
    accessToken: "hCzQeZhzB2usfuMwbr4KVismWDbt6-aPRaoeorEcnx0",
  });
 try {
  const response =  await client.getEntries({
        content_type: "portfolioProjects",
  });
   const projects = response.items.map((item) => {
     const { title, url, image:img } = item.fields;
     const image = img.fields.file.url
     const id = item.sys.id;
     
      return { id, title, image, url };
   })
   return projects
 } catch (error) {
  return error
 }
}


const Projects = () => {
  const  projects  = useLoaderData()
  // console.log(projects);
  const navigate = useNavigation()
  const isLoading = navigate.state === 'loading'
  if (isLoading) {
    return <section className="h-screen grid place-items-center">
      <div className="loading loading-spinner">bbbb</div>
    </section>
  }
  return (
    <section className="section-margin">
<SectionTitle text='projects'/>
    <div className="grid gap-y-[3rem] sm:grid-cols-2 md:grid-cols-3 sm:gap-x-10  ">
      {projects.map((project) => {
        return <Project {...project} key={project.id} />;
      })}
    </div>
      </section>
  );
}
export default Projects