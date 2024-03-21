import { SectionTitle } from "../component";
import { singleProjects } from "../utils/data";
import { Navigate, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
export const loader = ({ params }) => {
  const title = params.id;
  const singleProject = singleProjects.find((project) => {
    return project.title === title;
  });
  return { singleProject };
};

const SingleProject = () => { 
  const { singleProject } = useLoaderData();

  if (!singleProject) return <Navigate to={"/"} />;
  const { title, description, url, stack, service } = singleProject;

  // console.log(skills);
  return (
    <section className="section-margin">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to={"/projects"}>projects</Link>
          </li>
        </ul>
      </div>
      <SectionTitle text={title} />
      <div className="grid gap-y-16 md:grid-cols-2 gap-x-10">
        <div className="grid gap-y-4 md:gap-y-0 items-start">
          <div>
            <span className="text-md capitalize tracking-wider bg-primary py-[0.25rem] px-[.5rem] rounded-sm mr-[.5rem] text-[black]">
              stack :
            </span>
            {stack.map((skill, index) => {
              return (
                <span className="text-lg">
                  {skill}
                  {index < stack.length - 1 ? "," : " "}{" "}
                </span>
              );
            })}
          </div>
          <div>
            <span className="text-md capitalize tracking-wider bg-primary py-[0.25rem] px-[.5rem] rounded-sm mr-[.5rem] text-[black]">
              service :
            </span>
            <span className="text-lg capitalize"> {service}.</span>
          </div>
        </div>
        <div className="grid gap-y-2">
          <h2 className="text-2xl tracking-wider font-semibold">
            project overview
          </h2>
          <p className="leading-8">{description}</p>
          <a href={url} target="blank">
            <button className="btn btn-primary rounded-sm mt-4 ">
              visit website
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default SingleProject;
