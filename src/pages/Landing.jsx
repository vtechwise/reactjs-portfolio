import { Hero, FeaturedProject, Services, SectionTitle } from "../component";
import contactImg from  '../assets/contact-us.svg'
import { Link, ScrollRestoration } from "react-router-dom";

const Landing = () => {
  return (
    <>
      {/* <ScrollRestoration/> */}
      <Hero />
      <FeaturedProject />
      <Services />
      <section className="section-margin">
        <SectionTitle text="want to work" />
        <div className="grid md:grid-cols-2 gap-x-12">
          <div className="bg-base-300 p-8 max-w-[36rem] self-start md:mt-16 ">
            <img src={contactImg} className="mb-6 w-[25rem] mx-auto " alt="" />
            <p>
              if you need a modern and powerful website for your
              business,startup or yourself, i am available for work.
              <Link to={'/contact'} className=" font-bold   grid place-items-center ">
                <button className="btn-primary btn block mt-6 text-center rounded-full text-lg ">contact us</button>
              </Link>{" "}
            </p>
          </div>
          <div className="faq mt-6 hidden md:block">
            <SectionTitle text="frequently asked question" />
            <div className="collapse collapse-arrow bg-base-200 ">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-lg font-medium">
                What technologies are you proficient in for frontend
                development?{" "}
              </div>
              <div className="collapse-content">
                <p>
                  I am proficient in HTML, CSS, and JavaScript, which form the
                  foundation of my frontend development skills. Additionally, I
                  have hands-on experience with popular frontend libraries and
                  frameworks such as React.js, enabling me to build interactive
                  and dynamic user interfaces efficiently.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 ">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-lg font-medium">
                Can you describe your approach to responsive web design?
              </div>
              <div className="collapse-content">
                <p>
                  My approach to responsive web design involves using a
                  mobile-first strategy. I prioritize the mobile user experience
                  and then progressively enhance for larger screens. I leverage
                  flexible grids and media queries to ensure that websites adapt
                  seamlessly to various devices, providing an optimal viewing
                  and interaction experience.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 ">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-lg font-medium">
                How do you optimize web performance for faster loading times?{" "}
              </div>
              <div className="collapse-content">
                <p>
                  I optimize web performance by employing several techniques.
                  This includes code splitting to reduce initial load times,
                  lazy loading images and components to defer non-essential
                  content, and minimizing HTTP requests through bundling. I also
                  prioritize efficient caching strategies and utilize tools like
                  Lighthouse to identify and address performance bottlenecks.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 ">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-lg font-medium">
                What is your experience with version control systems, and which
                one do you prefer?
              </div>
              <div className="collapse-content">
                <p>
                  I am well-versed in using Git as my primary version control
                  system. I have extensive experience with platforms like
                  GitHub, which facilitates collaborative development and code
                  review processes. Git enables me to manage code changes
                  effectively, track project history, and collaborate seamlessly
                  with team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid place-items-center pt-6">
        <div>
          <p className="capitalize font-semibold text-sm w-full">crafted by victor olabisi</p>
        </div>
      </section>
    </>
  );
};
export default Landing;
