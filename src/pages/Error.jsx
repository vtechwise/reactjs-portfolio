import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="grid h-screen place-items-center p-6">
        <div className="text-center -translate-y-10">
          <p className="text-6xl md:text-9xl mb-4 capitalize font-bold">404</p>

          <h2 className=" text-xl md:text-5xl font-bold capitalize">
            page not found
          </h2>
          <p className="text-lg  mt-2 capitalize">
            sorry we could not find the page you are looking for
          </p>
          <Link to={"/"}>
            {" "}
            <button className="btn btn-primary text-lg capitalize mt-4">
              back home
            </button>{" "}
          </Link>
        </div>
      </div>
    );
  }
  return (
    <section className="h-[100vh] grid place-items-center">
      <div className="text-center">
        <h2 className="text-xl capitalize  ">something went wrong </h2>
        <Link to="/" className="btn btn-primary mt-4 btn-sm text-lg">
          back home
        </Link>
      </div>
    </section>
  );
};
export default Error;
