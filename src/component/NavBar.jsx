import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState,useEffect } from "react";
const themes = {
    cupcake: 'cupcake',
    synthwave:'synthwave'
}
const getThemeFromLocalStorage = () => {
   return localStorage.getItem('theme') || themes.synthwave
}


const NavBar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const toggleTheme = () => {
        const {cupcake, synthwave} = themes
        const newTheme = theme == cupcake ? synthwave : cupcake;
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', theme)
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme)
},[theme])

  return (
    <section className=" bg-base-300 ">
      <nav className="navbar align-element items-center">
        <div className="navbar-start ">
          <h3 className="text-2xl tracking-wider font-bold capitalize">
            vtech
            <span className="text-primary font-normal drawer-button">wise</span>
          </h3>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <label htmlFor="my-drawer" className="drawer-button lg:hidden ml-8">
            <FaBarsStaggered className="h-6 w-6 " />
          </label>
        </div>
      </nav>
      ;
    </section>
  );
};
export default NavBar;
 