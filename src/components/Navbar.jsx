import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="max-sm:hidden w-30 px-3 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className=" blue-gradient_text">Noman's Island</p>
      </NavLink>

      <NavLink
        to={"/"}
        className="md:hidden w-30 px-3 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className=" blue-gradient_text">NI</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 hover:w-30 px-3 hover:bg-white  hover:rounded-lg hover:items-center hover:justify-center hover:flex  hover:shadow-md"
              : "text-black  hover:w-30 px-3  hover:bg-white  hover:rounded-lg hover:items-center hover:justify-center hover:flex  hover:shadow-md"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 hover:w-30 px-3  hover:bg-white   hover:rounded-lg hover:items-center hover:justify-center hover:flex  hover:shadow-md"
              : "text-black hover:w-30 px-3   hover:bg-white  hover:rounded-lg hover:items-center hover:justify-center hover:flex  hover:shadow-md"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
