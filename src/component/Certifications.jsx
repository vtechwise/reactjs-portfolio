import SectionTitle from "./SectionTitle";
import udemyLogo from "../assets/udemy.png";

const certifications = [
  {
    image: udemyLogo,
    company: "Udemy",
    description: "Master Javascript from Basic to Advanced",
    url: "https://www.udemy.com/certificate/UC-056f22fd-78ef-49ce-a4f4-a43de3973bed/",
  },
  {
    image: udemyLogo,
    company: "Udemy",
    description: "NodeJs- The Complete Guide (MVC, REST APIS, GraphQL Deno)",
    url: "https://www.udemy.com/certificate/UC-ba005a59-76e2-445a-953c-cf0a7090266a/",
  },
];

const Certifications = () => {
  return (
    <section className="mb-[5rem]">
      <SectionTitle text={"certifications"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((certifcation) => {
          const { image, company, description, url } = certifcation;
          return (
            <a href={url}>
              <div className="bg-base-200 p-4 lg:p-8 rounded-xl flex gap-4 cursor-pointer hover:bg-base-300 duration-300">
                <div className="bg-white h-[5rem] w-[5rem] p-4 rounded-full flex justify-center shrink-0 items-center">
                  <img src={image} alt="" className="h-[2rem]  " />
                </div>
                <div className="flex-grow-1">
                  <h2 className="capitalize font-semibold">{company}</h2>
                  <p className="font-small mt-3 ">{description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Certifications;
