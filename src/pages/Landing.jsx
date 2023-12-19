import { Hero, FeaturedProject, Services, SectionTitle } from "../component";
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Services />
      <section className="section-margin">
        <SectionTitle text="want to work" />
        <div className="bg-base-300 p-8">
          <p>
            if you need a modern and powerful website for your business,startup
            or yourself, i am available for work. you can email me directly at{" "}
            <span className="link text-primary font-bold text-lg ">
              victoroguntayo65@gmail.com
            </span>{" "}
          </p>
        </div>
      </section>
      <section className="grid place-items-center py-6" >
        <div><p className="capitalize font-semibold">crafted by victor olabisi</p></div>
      </section>
    </>
  );
};
export default Landing;
