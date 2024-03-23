import SectionTitle from "./SectionTitle";
import { BiCodeCurly } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { skills } from "../utils/data";

const Skills = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [showSecondContent, setShowSecondContent] = useState(false)
  return (
    <section>
      <SectionTitle text="skills" />
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-14 md:gap-y-0">
        <article className="">
          <div
            className={`content-title skill grid grid-cols-[auto,1fr,auto] items-center align-start gap-x-4 cursor-pointer`}
            onClick={() => {
              setShowFirstContent(!showFirstContent);
              setShowSecondContent(false);
            }}
          >
            <span>
              <BiCodeCurly className="text-[3rem] fill-primary " />
            </span>
            <h4 className="text-xl capitalize font-bold">
              frontend engineering
            </h4>
            <div className="relative mr-10 ">
              <span>
                <MdOutlineKeyboardArrowUp
                  className={`${
                    showFirstContent ? "opacity-100" : "opacity-0"
                  } text-[3rem] fill-primary absolute translate-y-[-1.2rem]  top- transition duration-300`}
                />
              </span>
              <span>
                <MdOutlineKeyboardArrowDown
                  className={`${
                    showFirstContent ? "opacity-0" : "opacity-100"
                  } text-[3rem] fill-primary absolute top-0 translate-y-[-1.2rem] transition duration-300`}
                />
              </span>
            </div>
          </div>
          <div
            className={`${
              showFirstContent ? "display-block" : "display-none hidden"
            } pl-[4rem] pt-9`}
          >
            {skills.map((skillz) => {
              const { icon, skill } = skillz;
              return (
                <div
                  key={skill}
                  className="flex justify-between border-b border-b-[0.2rem] border-b-primary mb-8 pb-4"
                >
                  <h4 className="text-lg font-semibold capitalize">{skill}</h4>
                  <span className="text-[1.5rem]">{icon}</span>
                </div>
              );
            })}
          </div>
        </article>
        <article className="">
          <div
            className={`content-title skill grid grid-cols-[auto,1fr,auto] items-center align-start gap-x-4 cursor-pointer`}
            onClick={() => {
              setShowSecondContent(!showSecondContent);
              setShowFirstContent(false);
            }}
          >
            <span>
              <BiCodeCurly className="text-[3rem] fill-primary " />
            </span>
            <h4 className="text-xl capitalize font-bold">
              frontend engineering
            </h4>
            <div className="relative mr-10 ">
              <span>
                <MdOutlineKeyboardArrowUp
                  className={`${
                    showSecondContent ? "opacity-100" : "opacity-0"
                  } text-[3rem] fill-primary absolute translate-y-[-1.2rem]  top- transition duration-300`}
                />
              </span>
              <span>
                <MdOutlineKeyboardArrowDown
                  className={`${
                    showSecondContent ? "opacity-0" : "opacity-100"
                  } text-[3rem] fill-primary absolute top-0 translate-y-[-1.2rem] transition duration-300`}
                />
              </span>
            </div>
          </div>
          <div
            className={`${
              showSecondContent ? "display-block" : "display-none hidden"
            } pl-[4rem] pt-9`}
          >
            {skills.map((skillz) => {
              const { icon, skill } = skillz;
              return (
                <div
                  key={skill}
                  className="flex justify-between border-b border-b-[0.2rem] border-b-primary mb-8 pb-4"
                >
                  <h4 className="text-lg font-bold capitalize">{skill}</h4>
                  <span className="text-[1.5rem]">{icon}</span>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};
export default Skills;
