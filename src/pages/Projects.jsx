import { useFetchProjects } from "../utils/fetchProjects"
import { redirect, useLoaderData } from "react-router-dom";
import { createClient } from "contentful";
import { useNavigation } from "react-router-dom";
import { Project, SectionTitle } from "../component";
import FilterBtn from "../component/FilterBtn";
import { useState } from "react";


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
     const { title, url, image:img, category } = item.fields;
     const image = img.fields.file.url
     const id = item.sys.id;
     
      return { id, title, image, url,category };
    })
  //  const projects= response.items
   return projects
 } catch (error) {
  return error
 }
}
const getProjectsFromLocalStorage = () => {
  let projects = localStorage.getItem('projects')
 return  projects = JSON.parse(projects)
}
const getActiveFromLocalStorage = ()=>{
  return localStorage.getItem('active');
}

const Projects = () => {
  const projects = useLoaderData()
  const [allProjects, setAllProjects] = useState(getProjectsFromLocalStorage() || projects)
  const [isActive, setIsActive] = useState(getActiveFromLocalStorage() || false)

  const filterProjects = (category) => {
    const newProjects = projects.filter((project) => {
      if (category === project.category) {
        setIsActive(true)
        localStorage.setItem('active',isActive)
      }
       if (category === "all") {
         return project;
       }
      return project.category === category
     
    })
    localStorage.setItem('projects', JSON.stringify(newProjects))
    setAllProjects(newProjects)
    // console.log(isActive);
    // console.log(allProjects);
  }
  
  // console.log(projects);
 
  return (
    <section className="section-margin">
      <SectionTitle text='projects' />
      <FilterBtn projects={projects} filterProjects={filterProjects} active={isActive} />
    <div className="grid gap-y-[3rem] sm:grid-cols-2 md:grid-cols-3 sm:gap-x-10  ">
      {allProjects.map((project) => {
        return <Project {...project} key={project.id} />;
      })}
        {/* <Project projects={projects} /> */}
    </div>
      </section>
  );
}
export default Projects