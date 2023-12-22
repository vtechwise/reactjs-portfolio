import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="text-center -translate-y-10">
        <p className="text-9xl mb-4 capitalize font-bold">404</p>

              <h2 className="text-6xl font-bold capitalize">page not found</h2>
              <p className="text-lg tracking-wider mt-2">sorry we couldn't find te page you are looking</p>
             <Link to={'/'}> <button className="btn btn-primary text-lg capitalize mt-4">go back home</button> </Link> 
      </div>
    </div>
  );
};
export default Error;
