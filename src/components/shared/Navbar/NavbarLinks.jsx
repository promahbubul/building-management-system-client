import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import imageProfile from "../../../assets/images/imageProfile.png";
import "./NavbarLinks.css";
import { toast } from "react-toastify";
import { AiFillDashboard } from "react-icons/ai";

const NavbarLinks = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then((data) => {
        toast.success("Logout Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/apartment">Apartment</NavLink>
      <div className="profileData ">
        {" "}
        {user ? (
          <div className="relative ">
            {user.photoURL ? (
              <img
                className="w-12 h-12 border-2 border-slate-700 p-1 rounded-full"
                src={user.photoURL}
              />
            ) : (
              <img src={imageProfile} alt="" className="w-10 cursor-pointer " />
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
          <NavLink to="/login">
            <FaUser />
          </NavLink>
        )}
      </div>
    </>
  );
};

export default NavbarLinks;
