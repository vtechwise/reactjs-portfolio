import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { menus } from "../utils/data";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import portfolioImg from '../assets/avatarImg.jpg'
const themes = {
    cupcake: 'cupcake',
    dark:'dark'
}
const getThemeFromLocalStorage = () => {
   return localStorage.getItem('theme') || themes.cupcake
}


const NavBar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const toggleTheme = () => {
        const {cupcake, dark} = themes
        const newTheme = theme == cupcake ? dark : cupcake;
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', theme)
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme)
},[theme])

  return (
    <section className=" bg-base-300 ">
      <nav className="navbar align-element  fixed top-0 sm:static h-16 w-full bg-base-300 shadow-xl z-10">
        <div className="navbar-start ">
          {/* <h3 className="text-2xl tracking-wider font-bold  text-slant capitalize">
            vtech
            <span className="text-primary font-normal">wise</span>
          </h3> */}
          {/* <Link to={'/'} className="h-8 w-8 bg-primary grid place-items-center rounded-md  "><span className="text-2xl">v</span></Link>
           */}
          <Link to={'/'} className="flex items-center justify-items-center ">
            <img src={portfolioImg} className=" w-[2.1rem] h-[2.1rem] object-cover rounded-[100%]" alt="" />
            <span className="ml-4 capitalize " >victor olabisi</span>
          </Link>
        </div>
        <div className="navbar-center hidden md:!flex">
          <div className="menu  menu-horizontal gap-x-4">
            {menus.map((menu, index) => {
              <li
                className="text-lg border-b border-transparent capitalize hover:border-b hover:border-primary pb-2  transition-all duration-300"
                key={menu.id}
              >
                {menu.text}
              </li>;
              return (
                <Link to={menu.url} key={index}>
                  <li
                    className="text-lg border-b border-transparent capitalize hover:border-b hover:border-primary pb-2  transition-all duration-300"
                    key={menu.id}
                  >
                    {menu.text}
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            <BsMoonFill className="swap-on h-4 w-4" />
            <BsSunFill className="swap-off h-4 w-4" />
          </label>
          <label htmlFor="my-drawer" className="drawer-button lg:hidden ml-8">
            <FaBarsStaggered className="h-6 w-6 " />
          </label>
        </div>
      </nav>
      {/* // ; */}
    </section>
  );
};
export default NavBar;
 