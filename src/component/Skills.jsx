import SectionTitle from "./SectionTitle";
import { BiCodeCurly } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { skills } from "../utils/data";

const Skills = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <section>
      <SectionTitle text="skills" />
      <article className="">
        <div
          className={`content-title skill grid grid-cols-[auto,1fr,auto] items-center align-start gap-x-4 cursor-pointer`}
          onClick={() => {
            setShowContent(!showContent);
          }}
        >
          <span>
            <BiCodeCurly className="text-[3rem] fill-primary " />
          </span>
          <h4 className="text-2xl capitalize font-bold">
            frontend engineeering
          </h4>
          <div className="relative mr-10 ">
            <span>
              <MdOutlineKeyboardArrowUp
                className={`${
                  showContent ? "opacity-100" : "opacity-0"
                } text-[3rem] fill-primary absolute translate-y-[-1.2rem]  top- transition duration-300`}
              />
            </span>
            <span>
              <MdOutlineKeyboardArrowDown
                className={`${
                  showContent ? "opacity-0" : "opacity-100"
                } text-[3rem] fill-primary absolute top-0 translate-y-[-1.2rem] transition duration-300`}
              />
            </span>
          </div>
        </div>
        <div
          className={`${
            showContent ? "display-block" : "display-none hidden"
          } pl-[4rem] pt-9`}
        >
          {skills.map((skillz) => {
            const { icon, skill } = skillz;
            return (
              <div key={skill} className="flex justify-between border-b border-b-4 border-b-primary pb-4">
                <h4 className="text-xl font-bold capitalize">{skill}</h4>
                <span className="text-[1.5rem]">{icon}</span>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Skills;
