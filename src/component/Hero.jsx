import portfolioImg from "../assets/portfolioImg.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import aboutMe from '../assets/about me.svg'
import { Link } from "react-router-dom";
const Hero = () => {
    const resumeUrl= 'VICTOR OGUNTAYO CV.pdf'
  return (
    <>
      <div className="flex flex-col gap-y-10 sm:flex-row gap-x-12 items-center pt-14 md:mb-24">
        <div className="rounded-lg relative">
          <img
            src={portfolioImg}
            className="w-screen md:w-[35rem] h-[25rem] md:h-[32rem] object-cover rounded-lg"
            alt=""
          />
          <button className="btn btn-secondary absolute btn- rounded-full left-5  btn-sm bottom-20">
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
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-semibold max-w-xl">
            I craft beautiful and unique products.
          </h1>
          <p className="mt-4 leading-7">
            in my code every details serves a purpose- <br /> orchestrating a
            digital masterpiece where user experience flow seamlessly{" "}
          </p>
          <Link to={'/contact'}>
            <button className="btn mt-6 btn-primary  rounded-full text-md  ">
              Work with me
            </button>
          </Link>
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
          <p className="my-4 leading-7 ">
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
            <button className="btn btn-primary rounded-full">
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
