import SectionTitle from "./SectionTitle";
import { BiCodeCurly } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Skills = () => {
  const [showContent, setShowContent] = useState(false)
  return (
    <section>
      <SectionTitle text="skills" />
      <article className="skill grid grid-cols-[auto,1fr,auto] items-center align-start gap-x-4">
        <span>
          <BiCodeCurly className="text-[3rem] fill-primary " />
        </span>
        <h4 className="text-2xl capitalize font-bold">frontend engineeering</h4>
        <div className="relative mr-6 ">
          <span>
            <MdOutlineKeyboardArrowUp className={`${showContent?'opacity-100':'opacity-0'} text-[3rem] fill-primary absolute translate-y-[-1.2rem]  top-`} />
          </span>
          <span>
            <MdOutlineKeyboardArrowDown className="text-[3rem] fill-primary absolute top-0 translate-y-[-1.2rem]" />
          </span>
        </div>
      </article>
    </section>
  );
};
export default Skills;
