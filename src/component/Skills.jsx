import SectionTitle from "./SectionTitle";
import { BiCodeCurly } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Skills = () => {
  return (
    <section>
      <SectionTitle text="skills" />
      <article className="skill grid grid-cols-[auto,1fr,auto] items-center gap-x-4">
        <span>
          <BiCodeCurly className="text-[3rem] fill-primary " />
        </span>
        <h4 className="text-2xl capitalize font-bold">frontend engineeering</h4>
        <div className="relative mr-6">
          <span>
            <MdOutlineKeyboardArrowUp className="text-[3rem] fill-primary absolute" />
          </span>
          <span>
            <MdOutlineKeyboardArrowDown className="text-[3rem] fill-primary absolute" />
          </span>
        </div>
      </article>
    </section>
  );
};
export default Skills;
