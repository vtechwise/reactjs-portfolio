import SectionTitle from "./SectionTitle";
// import thumbnail from '../../public/project-one.jpg'
// import comfyImg from "../assets/comfyStore.png";
import { featuredProject } from "../utils/data";
import { Link } from "react-router-dom";
import Project from "./Project";
const FeaturedProject = () => {
  return (
    <section className="section-margin">
      <SectionTitle text="my creations" />
      <div className="grid gap-y-[3rem] sm:grid-cols-2 md:grid-cols-3 sm:gap-x-10">
        {featuredProject.map((project) => {
          const { id, image, title } = project;
          return <Project key={project.id} {...project} />;
        })}
      </div>
      <div
        className="flex md:justify-end"
        // style={{ display: "inline-block" }}
      >
        {" "}
        <Link
          to={"/projects"}
          className="btn btn-primary rounded-full capitalize mt-8"
        >
          {" "}
          View all works
        </Link>{" "}
      </div>
    </section>
  );
};
export default FeaturedProject;
