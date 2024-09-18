import { UserPen } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="h-[10%] flex flex-row items-center justify-around py-3 bg-[#0497c2] text-white">
        <div>
          <h1 className="text-2xl font-bold p-1">Mahalakshmi K</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 px-3">
          <ul className="flex flex-row  justify-center items-center gap-6 px-3">
            <li className="text-2xl font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-2xl font-semibold">
              {" "}
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : ""
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="text-2xl font-semibold">
              {" "}
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : ""
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <UserPen />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
