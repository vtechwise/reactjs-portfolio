import { useLoaderData } from "react-router-dom"


const FilterBtn = ({ projects, filterProjects }) => {
    let filter = projects.map((project) => {
        if(!project) return 
        return project.category
    })
    filter = new Set(['all', ...filter])
    filter= Array.from(filter)
//    console.log(filter);
  return (
      <div className="flex gap-x-4 justify-center mb-12">
          {filter.map((category) => {
              return <button className="btn-primary btn btn-sm rounded-sm" key={category} onClick={()=> filterProjects(category)}>{category??''}</button>
        })}
    </div>
  )
}
export default FilterBtn