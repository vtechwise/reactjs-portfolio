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
      <div className="flex gap-x-2 justify-center mb-12">
          {filter.map((category,index) => {
              return (
                <button
                  className={`${
                    isActive ? "btn-primary" : " "
                  } btn btn-xs rounded-sm  border border-primary hover:btn-primary `}
                  key={index}
                  onClick={() => filterProjects(category)}
                >
                  {category ?? ""}
                </button>
              );
        })}
    </div>
  )
}
export default FilterBtn