import { useLoaderData } from "react-router-dom"
import { useState } from "react"

const FilterBtn = ({ projects, filterProjects,isActive }) => {
    let filter = projects.map((project) => {
        if(!project) return 
        return project.category
    })
    filter = new Set(['all', ...filter])
    filter= Array.from(filter)
//    console.log(filter);
  return (
      <div className="flex gap-x-4 justify-center mb-12">
          {filter.map((category,index) => {
              return <button className={` btn btn-sm rounded-sm  border-2 border-primary hover:btn-primary ${isActive ? 'btn-primary' : ' '}`} key={index} onClick={()=> filterProjects(category)}>{category??''}</button>
        })}
    </div>
  )
}
export default FilterBtn