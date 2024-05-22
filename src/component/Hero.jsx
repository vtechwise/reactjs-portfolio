import portfolioImg from "../assets/avatarImg.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import aboutMe from "../assets/aboute me.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  const resumeUrl = "victor-olabisi cv.pdf";
  return (
    <>
      <div
        className="flex flex-col gap-y-10 gap-x-10 sm:flex-row md:justify-between  pt-14 md:mb-24"
        id="home"
      >
        <div className=" hidden md:block rounded-lg relative">
          <img
            src={portfolioImg}
            className=" w-screen md:w-[35rem] h-[25rem] md:h-[40rem] object-cover rounded-lg fill-black"
            alt=""
          />

          <button className="btn btn-primary absolute btn- rounded-full left-5  btn-sm bottom-20">
            {" "}
            <span>
              <CgMail />
            </span>
            hello@victor
          </button>
          <p className="mt-4 flex justify-end items-center gap-x-2 text-xs text-content-neutral ">
            {" "}
            <span className="h-2 w-2 bg-secondary rounded-full"></span>
            Available for new projects
          </p>
        </div>
        <div className=" md:text-left sm:order-first flex flex-col mt-12 justify-between gap-y-24">
          <div className="text-center md:text-left">
            <ScrollAnimation animateIn="fadeInDown" duration="1">
              <h1 className="text-3xl  md:text-5xl  font-semibold max-w-xl capitalize">
                building user interfaces with frontend magic
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration={"2"}>
              <h4 className="mt-4 leading-6 max-w-[25rem] mx-auto md:mx-0 ">
                in my code every details serves a purpose- orchestrating a
                digital masterpiece where user experience flow seamlessly.
              </h4>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceIn" duration={"6"} delay={""}>
              <Link to={"/contact"}>
                <button className="btn mt-6 btn-primary   rounded-xl text-md  md:btn-lg  ">
                  Work with me
                </button>
              </Link>
            </ScrollAnimation>
          </div>
          <div className="mb-8 flex gap-x-6 justify-center md:justify-start ">
            <Link
              to={"/projects"}
              className=" h-[7.5rem] max-w--[15rem] md:h-[12rem] md:w-[17rem] bg-secondary rounded-lg flex flex-col justify-end  px-[1.3rem] mdpx-[1.7rem] pb-[1rem] text-black group"
            >
              <h4 className="text-3xl">20+</h4>
              <p className="capitalize  flex gap-x-4 items-start text-[0.8rem]">
                completed project{" "}
                <span className="text-xl md:text-3xl group-hover:scale-[1.3] duration-300">
                  <MdArrowOutward />
                </span>
              </p>
            </Link>
            <Link
              to={"/about"}
              className=" h-[7.5rem] max-w-[15rem] md:h-[12rem] md:w-[17rem] bg-blue-300 flex flex-col justify-end px-[1.3rem] md:px-[1.7rem] pb-[1rem] text-black rounded-lg group"
            >
              <h4 className="text-3xl">3</h4>
              <p className="capitalize  flex  gap-x-4 items-start text-[0.8rem] ">
                years of experience{" "}
                <span className="text-xl md:text-3xl group-hover:scale-[1.3] duration-300">
                  <MdArrowOutward />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-2 ">
        <img
          src={aboutMe}
          alt=""
          className="pb-12 pt-10 fill-blue-500 w-[23rem] mx-auto md:mx-0 md:w-[30rem]"
        />

        <div>
          <h2 className="text-2xl text-semibold">
            My goal as a Frontend web developer is to create memorable,
            user-centered experiences.
          </h2>
          <p className="my-4 leading-7 font-san-serif ">
            Hello, I'm victor olabisi, a dedicated React.js Frontend Developer
            passionate about crafting seamless user experiences. With a strong
            foundation in JavaScript and expertise in React.js, I specialize in
            building responsive and intuitive web applications. I bring a
            commitment to clean, maintainable code and thrive in collaborative
            environments. From e-commerce platforms to interactive dashboards,
            my diverse project experience reflects my ability to find elegant
            solutions to unique challenges. Committed to continuous learning, I
            actively contribute to open-source projects and stay on top of the
            latest industry trends. Let's collaborate and bring innovative ideas
            to life!{" "}
          </p>
          <a href={resumeUrl}>
            <button className="btn btn-primary rounded-xl">
              <span>
                <MdOutlineFileDownload />
              </span>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Hero;
