import { Outlet } from "react-router-dom";
import { menus } from "../utils/data";
import { Navbar } from "../component";
import { useNavigation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link, ScrollRestoration } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="drawer drawer-end ">
      <input type="checkbox" id="my-drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <section className="align-element pt-16 mb-6">
          {isLoading ? (
            <section className="h-screen grid place-items-center">
              <div className="loading loading-spinner"></div>
            </section>
          ) : (
            <Outlet />
          )}
        </section>
      </div>
      <div className="drawer-side z-20 ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pt-10  px-0 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {menus.map((menu) => {
            return (
              <Link to={menu.url}>
                <ScrollRestoration />
                <li
                  className="capitalize text-xl menu-item p-4 hover:bg-primary hover:pl-6 transition-all duration-700 "
                  key={menu.id}
                >
                  {menu.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default HomeLayout;
