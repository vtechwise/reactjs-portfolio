import SectionTitle from "./SectionTitle";
import udemyLogo from "../assets/udemy.png";

const certifications = [
  {
    image: udemyLogo,
    company: "Udemy",
        description: "Master Javascript from Basic to Advanced",
        url:''
  },
  {
    image: udemyLogo,
    company: "Udemy",
      description: "NodeJs- The Complete Guide (MVC, REST APIS, GraphQL Deno)",
    url:''
  },
];


const Certifications = () => {
  return (
    <section>
          <SectionTitle text={"certifications"} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((certifcation) => {
                  const { image, company, description } = certifcation
                  return (
                    <div className="bg-base-200 p-4 lg:p-8 rounded-xl flex gap-4 cursor-pointer hover:bg-base-300 duration-300">
                      <div className="bg-white h-[5rem] w-[5rem] p-4 rounded-full flex justify-center shrink-0 items-center">
                        <img src={image} alt="" className="h-[2rem]  " />
                      </div>
                      <div className="flex-grow-1">
                              <h2 className="capitalize font-semibold">{company}</h2>
                              <p className="font-small mt-3 ">{description}</p>
                      </div>
                    </div>
                  );
              })}
          </div>
     
    </section>
  );
};
export default Certifications;
