import { SectionTitle } from "../component";
import { singleProjects } from "../utils/data";
import { useLoaderData } from "react-router-dom";
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
  const { title, description, url, skills, service } = singleProject;
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
        <div className="grid gap-y-2 md:gap-y-0 items-start">
          <div>
            <span className="text-md capitalize tracking-wider font-bold">
              skills :
            </span>
            {skills.map((skill) => {
              return (
                <span className="text-lg">{`${
                  skill.length > 1 ? `${skill} ,` : " "
                }`}</span>
              );
            })}
          </div>
          <div>
            <span className="text-md capitalize tracking-wider font-bold">
              service :
            </span>
            <span className="text-lg">{service}</span>
          </div>
          <a href={url} target="blank">
            <button className="btn btn-primary rounded-full mt-4">
              visit website
            </button>
          </a>
        </div>
        <div className="grid gap-y-6">
          <h2 className="text-3xl tracking-wider font-semibold">
            project overview
          </h2>
          <p className="leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleProject;
