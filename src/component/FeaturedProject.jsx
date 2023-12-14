import SectionTitle from "./SectionTitle";
// import thumbnail from '../../public/project-one.jpg'
// import comfyImg from "../assets/comfyStore.png";
import { featuredProject } from "../utils/data";
import { Link } from "react-router-dom";
const FeaturedProject = () => {
  return (
    <section className="section-margin">
      <SectionTitle text="my creations" />
      <div className="grid gap-y-[5rem]">
        {featuredProject.map((project) => {
          const {id,image,title} = project
         return (
           <article>
             <div className="bg-base-300 rounded-xl">
               <img src={image} alt="" />
             </div>
             <h3 className="text-2xl mt-4 capitalize font-bold">{title}</h3>
           </article>
         );
       })}
      </div>
<Link to={'/projects'}> <button className="btn btn-primary rounded-full capitalize mt-8">  View all works</button> </Link>
    </section>
  );
};
export default FeaturedProject;
