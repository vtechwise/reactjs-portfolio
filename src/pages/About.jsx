import { SectionTitle } from "../component"
import aboutImage1 from '../assets/about.jpg'
import aboutImage2 from "../assets/about2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


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
        </div>
      </div>
      <Link to={'/projects'} className="mt-8 flex items-center gap-x-2 ">
        <h3 className="text-lg font-semibold ">See my project </h3>
        <span className="translate-y-[10%]">
          <FaArrowRight />
        </span>
      </Link>
    </section>
  );
}
export default About