import { Outlet } from "react-router-dom";
import { menus } from "../utils/data";
import { Navbar } from "../component";



const HomeLayout = () => {
  return (
    <div className="drawer drawer-end ">
      <input type="checkbox" id="my-drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <section className="align-element pt-28 mb-12">
          <Outlet />
        </section>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pt-10  px-0 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {menus.map((menu) => {
            return (
              <li
                className="capitalize text-xl menu-item p-4 hover:bg-secondary hover:pl-6 transition-all duration-700 "
                key={menu.id}
              >
                {menu.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default HomeLayout