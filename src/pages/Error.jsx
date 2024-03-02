import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="text-center -translate-y-10">
        <p className="text-6xl md:text-9xl mb-4 capitalize font-bold">404</p>

              <h2 className=" text-xl md:text-5xl font-bold capitalize">page not found</h2>
              <p className="text-lg  mt-2 capitalize">sorry we could not find the page you are looking for</p>
             <Link to={'/'}> <button className="btn btn-primary text-lg capitalize mt-4">go back home</button> </Link> 
      </div>
    </div>
  );
};
export default Error;
