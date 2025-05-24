import { NavLink } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import logo from "../../../assets/images/logo.svg";
import Container from "../container/Container";
import useAuth from "../../../Hooks/useAuth";
import { Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import imageProfile from "../../../assets/images/imageProfile.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className=" ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="w-full  bg-slate-100 shadow-lg mb-5 ">
          <Container>
            <div className="flex navbar mx-auto justify-between">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <NavLink to="">
                  <img src={logo} alt="" />
                </NavLink>{" "}
              </div>
              <div className="flex-none hidden gap-5  md:flex">
                <NavbarLinks />
              </div>
            </div>
          </Container>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {user ? (
            <div className="relative ">
              {user.photoURL ? (
                <img
                  className="w-12 h-12 border-2 border-slate-700 p-1 rounded-full"
                  src={user.photoURL}
                />
              ) : (
                <img
                  src={imageProfile}
                  alt=""
                  className="w-10 cursor-pointer "
                />
              )}
              <ul className="submenu">
                <NavLink
                  to="/dashboard"
                  className="hover:bg-gray-400 p-1 rounded-sm"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="hover:bg-gray-400 p-1 rounded-sm w-full"
                >
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <NavLink className={"flex flex-row items-center gap-2 text-lg font-medium"} to="/login">
              <FaUser />
              <span className="">Login</span>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
