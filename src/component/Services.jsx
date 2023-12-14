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
    </section>
  );
};
export default Services;
