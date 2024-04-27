import { SectionTitle } from "../component";
import contactImg from "../assets/contact-us.svg";
import { LuLinkedin } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";



const Contact = () => {
  return (
    <section className="my-16">
      <SectionTitle text="lets talk" />
      {/* <div className="grid place-items-center">
        <img src={contactImg} alt="" />
      </div> */}
      <div className="flex flex-col gap-y-8 mb-16 sm:flex-row justify-center gap-x-20">
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <LuLinkedin />
          </span>
          <div>
            <h5 className="text-xl font-semibold  mb-[.3rem] capitalize">
              connect
            </h5>
            <a href="">Linkedin</a>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <FaRegEnvelope />
          </span>
          <div>
            <h5 className="text-xl font-semibold  mb-[.3rem] capitalize">
              email
            </h5>
            <a href="">oguntayovictor65@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <IoLocationOutline />
          </span>
          <div>
            <h5 className="text-xl font-semibold  mb-[.3rem] capitalize">
              location
            </h5>
            <a href="">Nigeria Akure</a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-20 ">
        <form action="" className="">
          <div className="form-control">
            <label htmlFor="" className="label capitalize">
              <span className="label-text"> name</span>
            </label>
            <input
              type="text"
              className=" input input-bordered bg-base-300 border-none outline-none rounded-lg"
              name="first name"
              required
            />
          </div>
          {/* <div className="form-control">
            <label htmlFor="" className="label capitalize">
              <span className="label-text">last name</span>
            </label>
            <input
              type="text"
              className=" input input-bordered "
              name="last name"
              required
            />
          </div> */}
          <div className="form-control">
            <label htmlFor="email" className="label capitalize">
              <span className="label-text">email</span>
            </label>
            <input
              required
              type="email"
              className=" input bg-base-300 border-none outline-none rounded-lg"
              name="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="" className="capitalize mt-2">
              <span className="label-text">message</span>
            </label>
            <textarea
              name="message"
              required
              cols="30"
              rows="10"
              className="textarea resize-none textarea-bordered bg-base-300 border-none outline-none rounded-lg"
            ></textarea>
            <button className="btn btn-primary mt-4 rounded-xl">submit</button>
          </div>
        </form>
        <div className="faq mt-6">
          <SectionTitle text="frequently asked question" />
          <div className="collapse collapse-arrow bg-base-200 ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-lg font-medium">
              What technologies are you proficient in for frontend development?{" "}
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
                seamlessly to various devices, providing an optimal viewing and
                interaction experience.
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
                I optimize web performance by employing several techniques. This
                includes code splitting to reduce initial load times, lazy
                loading images and components to defer non-essential content,
                and minimizing HTTP requests through bundling. I also prioritize
                efficient caching strategies and utilize tools like Lighthouse
                to identify and address performance bottlenecks.
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
                system. I have extensive experience with platforms like GitHub,
                which facilitates collaborative development and code review
                processes. Git enables me to manage code changes effectively,
                track project history, and collaborate seamlessly with team
                members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
