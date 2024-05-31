import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  if (!singleProject) return <Navigate to={"/"} />;
  const { title, description, url, stack, service } = singleProject;

  function setLoadingFalse() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setLoadingFalse();
  }, []);

  if (loading) {
    return (
      <section className="h-[85vh] grid place-items-center">
        <div className="loading loading-spinner"></div>
      </section>
    );
  }

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
        <div className="grid gap-y-4  items-start lg:grid-rows-[min-content,min-content]">
          <div className="stack-container">
            <span className="text-md text-white stack-title capitalize tracking-wider bg-primary py-[0.25rem] px-[.5rem] rounded-sm mr-[.5rem]">
              stack :
            </span>
            <div className="stack-text">
              {stack.map((skill, index) => {
                return (
                  <span className="text-lg ">
                    {skill}
                    {index < stack.length - 1 ? "," : " "}{" "}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <span className="text-md text-white capitalize tracking-wider bg-primary py-[0.25rem] px-[.5rem] rounded-sm mr-[.5rem] text-[black]">
              service :
            </span>
            <span className="text-lg capitalize"> {service}.</span>
          </div>
        </div>
        <div className="grid gap-y-2">
          <h2 className="text-2xl tracking-wider font-semibold">
            Project overview
          </h2>
          <p className="leading-8">{description}</p>
          <div className="flex">
            <a href={url} target="blank" className="">
              <button className="btn btn-primary block  mt-4 rounded-lg">
                visit website
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProject;
