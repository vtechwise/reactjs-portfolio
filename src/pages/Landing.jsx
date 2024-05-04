import {
  Hero,
  FeaturedProject,
  Services,
  SectionTitle,
  Skills,
} from "../component";
import contactImg from "../assets/contact-us.svg";
import { Link, ScrollRestoration } from "react-router-dom";
import { TERipple } from "tw-elements-react";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";

const Landing = () => {
  const [scroll, setScroll] = useState(false);
  // const bodyRef = useRef(null);

  useEffect(() => {
    
    const handleScroll=()=> {
      const scrollThreshold = 3000;
      console.log(scrollThreshold);
      console.log('scroll');
      console.log(window.scrollY);
      if (window.scrollY >= scrollThreshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

       window.addEventListener("scroll", handleScroll);
    
   
  }, [scroll]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }

  return (
    <>
      <section className="relative">
        {/* <ScrollRestoration/> */}
        <Hero />
        <FeaturedProject />
        <Skills />
        <Services />
        <section className="section-margin">
          <SectionTitle text="want to work" />
          <div className="grid md:grid-cols-2 gap-x-12">
            <div className="bg-base-300 p-8 max-w-[36rem] self-start md:mt-16 ">
              <img
                src={contactImg}
                className="mb-6 w-[25rem] mx-auto "
                alt=""
              />
              <p>
                if you need a modern and powerful website for your
                business,startup or yourself, i am available for work.
                <div
                  className=" font-bold   grid place-items-center "
                  // style={{display:'block'}}
                >
                  <Link
                    to={"/contact"}
                    className="btn-primary btn btn-md  mt-6 text-center  rounded-full text-lg "
                  >
                    contact us
                  </Link>
                </div>
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
                    foundation of my frontend development skills. Additionally,
                    I have hands-on experience with popular frontend libraries
                    and frameworks such as React.js, enabling me to build
                    interactive and dynamic user interfaces efficiently.
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
                    mobile-first strategy. I prioritize the mobile user
                    experience and then progressively enhance for larger
                    screens. I leverage flexible grids and media queries to
                    ensure that websites adapt seamlessly to various devices,
                    providing an optimal viewing and interaction experience.
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
                    content, and minimizing HTTP requests through bundling. I
                    also prioritize efficient caching strategies and utilize
                    tools like Lighthouse to identify and address performance
                    bottlenecks.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-lg font-medium">
                  What is your experience with version control systems, and
                  which one do you prefer?
                </div>
                <div className="collapse-content">
                  <p>
                    I am well-versed in using Git as my primary version control
                    system. I have extensive experience with platforms like
                    GitHub, which facilitates collaborative development and code
                    review processes. Git enables me to manage code changes
                    effectively, track project history, and collaborate
                    seamlessly with team members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid place-items-center pt-6 ">
          <div>
            <p className="capitalize font-semibold text-sm w-full ">
              crafted by victor olabisi
            </p>
            <div className="flex gap-x-3 justify-center mt-4 ">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={{ color: "#333" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* instagram */}
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={{ color: "#c13584" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* linkedin */}
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={{ color: "#0077b5" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              {/* facebook */}
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={{ color: "#1877f2" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {scroll && (
          <div onClick={scrollToTop} className="fixed bottom-[3rem] right-[1rem] font-bold grid place-items-center rounded-md cursor-pointer h-[1.5rem] w-[1.5rem] bg-primary">
            <span>
              <FaArrowUp />
            </span>
          </div>
        )}
      </section>
    </>
  );
};
export default Landing;
