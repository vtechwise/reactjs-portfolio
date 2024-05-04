import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const LinkPage = ({text, link}) => {
  return (
    <Link to={link}>
      <div className="mt-16 lg:mt-20 inline-block items-center gap-x-2 group ">
        <h3 className="text-lg font-semibold inline ">{text}</h3>
        <span className="translate-y-[30%] ml-2 inline-block group-hover:translate-x-1 transition duration-300">
          <FaArrowRight />
        </span>
      </div>
    </Link>
  );
};
export default LinkPage;
