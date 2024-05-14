import { Link } from "react-router-dom";


const Project = ({ image, title, category }) => {
  // console.log(category);
  // console.log(title);
  return (
    <>
      <div className="">
        <Link to={`/project/${title}`}>
          <div className="bg-base-300 rounded-xl shadow-lg group overflow-hidden">
            <img
              src={image}
              alt=""
              className="group-hover:scale-105 duration-300 transition"
            />
          </div>
        </Link>
        <h3 className="text-xl mt-4 capitalize font-semibold t">{title}</h3>
        {/* <h4>{category}</h4> */}
      </div>
    </>
  );
}
export default Project