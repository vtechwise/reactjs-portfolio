import { services } from "../utils/data";
import SectionTitle from "./SectionTitle";
import { FaReact } from "react-icons/fa";
import servicesImg from "../assets/services.jpg";
import InfiniteScroll from "./InfiniteScroll";
import ScrollAnimation from "react-animate-on-scroll";
// import BookingCalendar from "./Booking";

function animationCss(index) {
  if (index === 0) {
    return "slideInLeft";
  } else if (index === 1) {
    return "slideInRight";
  } else {
    return "slideInLeft";
  }
}
function duration(index) {
   if (index === 0) {
     return "1";
   } else if (index === 1) {
     return "2";
   } else {
     return "3";
   }
}

const Services = () => {
  return (
    <section className="section-margin">
      <SectionTitle text="services" />
      <div className="grid gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-x-10 pb-6 overflow-x-hidden">
        {services.map((service, index) => {
          const { id, title, description, icon } = service;
          return (
            <div>
              <ScrollAnimation duration={duration(index)} animateIn={animationCss(index)}>
                <article
                  key={id}
                  className="bg-base-300 border-b-[.25rem] border-primary p-6  "
                >
                  <span className="text-5xl inline-block pb-2">{icon}</span>
                  <h2 className="text-2xl pb-4 capitalize font-semibold">
                    {title}
                  </h2>
                  <p>{description}</p>
                </article>
              </ScrollAnimation>
            </div>
          );
        })}
      </div>
      <InfiniteScroll />
      <div className="mt-16 grid sm:grid-cols-2  gap-x-20 md:mt-24">
        <img src={servicesImg} alt="" className=" mb-4" />
        <div className="flex flex-col justify-between gap-y-20">
          <p className="text-">
            empowered by a versatile tools box and honed skills,i utilized
            cutting-edge technology to bring digital visions into life. Each
            tool is carefully selected to elevate projects, ensuring they stand
            out in the ever-evolving landscape of technology and design.{" "}
          </p>
          <div>
            <h4 className="capitalize text-lg font-medium mb-4">
              my daily tools
            </h4>
            <div className="grid  justify-start gap-y-2 grid-cols-2">
              <div className="text-lg capitalize border inline-block py-2 px-4 rounded-full w-36 border-base-300 ">
                <img
                  src="./figma.png"
                  alt=""
                  className="w-8 inline-block pr-2"
                />
                figma
              </div>
              <div className="text-lg capitalize border-2 inline-block py-2 px-4 rounded-full border-base-300  w-36">
                <img
                  src="./vscode.png"
                  alt=""
                  className="w-8 inline-block pr-2"
                />
                vs code
              </div>
              <div className="text-lg capitalize border-2 inline-block py-2 px-4 rounded-full border-base-300  w-36">
                <img
                  src="./github.png"
                  alt=""
                  className="w-8 inline-block pr-2"
                />
                github
              </div>
              <div className="text-lg capitalize border-2 inline-block py-2 px-4 rounded-full border-base-300  w-36">
                <img
                  src="./netlify.png"
                  alt=""
                  className="w-8 inline-block pr-2"
                />
                netlify
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BookingCalendar/> */}
    </section>
  );
};
export default Services;
