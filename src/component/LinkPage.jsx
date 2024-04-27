import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const LinkPage = ({text, link}) => {
  return (
    <Link to={link} className="mt-12 flex items-center gap-x-2 ">
      <h3 className="text-lg font-semibold ">{text}</h3>
      <span className="translate-y-[10%]">
        <FaArrowRight />
      </span>
    </Link>
  );
};
export default LinkPage;
