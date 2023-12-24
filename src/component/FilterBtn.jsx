import { useLoaderData } from "react-router-dom"
import { useState } from "react"

const getCurrentItemFromLocalStorage = () => {
  let item = localStorage.getItem('currentItem')
  return JSON.parse(item)
}

const FilterBtn = ({ projects, filterProjects }) => {
  const [currentItem, setCurrentItem] = useState(
    getCurrentItemFromLocalStorage() || 0
  );
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
                    index === currentItem
                      ? "!border-b-primary !border-b-4"
                      : ""
                  } text-sm rounded-sm pb-[0.3rem]  border-b-4 border-white/0`}
                  key={index}
                  onClick={() => {
                    setCurrentItem(index);
                    localStorage.setItem("currentItem", index);
                    filterProjects(category);
                  }}
                >
                  {category ?? ""}
                </button>
              );
        })}
    </div>
  )
}
export default FilterBtn