import { LinkPage, SectionTitle } from "../component";
import aboutImage1 from "../assets/about.jpg";
import aboutImage2 from "../assets/about2.jpg";
// import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
// import { Link } from "react-router-dom";

const resumeUrl = "victor-olabisi cv.pdf";
const About = () => {
  return (
    <section>
      <SectionTitle text={"about"} />
      <div className="flex flex-col gap-y-8 md:flex-row gap-x-16">
        <img
          src={aboutImage2}
          alt=""
          className=" w-[28rem] md:w-[40rem]  rounded-lg object-cover"
        />
        {/* <img
          src={aboutImage1}
          alt=""
          className=" w-[28rem] h-[20rem] rounded-xl object-cover"
        /> */}
        <div>
          <h2 className="text-2xl font-bold capitalize">victor olabisi</h2>
          <p className="mt-4">
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
            to life!
          </p>
          <div className="flex flex-col gap-y-3 mt-6">
            <div className="flex items-center gap-x-2">
              <span className="capitalize font-bold">email : </span>
              <p> oguntayovictor65@gamail.com</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="capitalize font-bold">phone number : </span>
              <p>+2345130887338</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="capitalize font-bold">nationality :</span>
              <p>Nigerian</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="capitalize font-bold">education level : </span>
              <p>Graduate</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className=" font-bold">Years of experience :</span>
              <p>3+ years</p>
            </div>
          </div>

          <a href={resumeUrl}>
            <button className="btn btn-sm mt-6 btn-primary rounded-xl">
              <span>
                <MdOutlineFileDownload />
              </span>
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <LinkPage text="See my project" link="/projects" />
    </section>
  );
};
export default About;
