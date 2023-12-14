import { services } from "../utils/data";
import SectionTitle from "./SectionTitle";
import { FaReact } from "react-icons/fa";

const Services = () => {
  return (
    <section className="section-margin">
      <SectionTitle text="services" />
      <div className="grid gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-x-10">
        {services.map((service) => {
          const { id, title, description, icon } = service;
          return (
            <article
              key={id}
              className="bg-base-300 border-b-4 border-primary p-10 rounded-xl "
            >
              <span className="text-8xl inline-block pb-2">{icon}</span>
              <h2 className="text-2xl pb-4 capitalize font-semibold">
                {title}
              </h2>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-8">
        <h4 className="capitalize text-lg font-medium mb-4">my daily tools</h4>
        <div className="grid  justify-start gap-y-2">
          <div className="text-lg capitalize border inline-block py-2 px-4 rounded-full border-base-300 ">
            <img src="./figma.png" alt="" className="w-8 inline-block pr-2" />
            figma
          </div>
          <div className="text-lg capitalize border-2 inline-block py-2 px-4 rounded-full border-base-300">
            <img src="./vscode.png" alt="" className="w-8 inline-block pr-2" />
            vs code
          </div>
          <div className="text-lg capitalize border-2 inline-block py-2 px-4 rounded-full border-base-300">
            <img src="./github.png" alt="" className="w-8 inline-block pr-2" />
            github
          </div>{" "}
          <div className="text-lg capitalize border-2 inline-block py-2 px-4 rounded-full border-base-300">
            <img src="./netlify.png" alt="" className="w-8 inline-block pr-2" />
            netlify
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
