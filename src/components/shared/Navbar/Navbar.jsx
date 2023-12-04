import { NavLink } from "react-router-dom"
import NavbarLinks from "./NavbarLinks"
import logo from '../../../assets/images/logo.svg'
import Container from '../container/Container'
import useAuth from "../../../Hooks/useAuth"


const Navbar = ({ children }) => {
const {user} = useAuth()
console.log(user);
    return (

        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className="w-full  bg-slate-100 shadow-lg mb-5 ">
                   <Container>
                  <div className="flex navbar mx-auto justify-between">
                  <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <NavLink to="">
                            <img src={logo} alt="" />
                            </NavLink>                    </div>
                    <div className="flex-none hidden gap-5  md:flex">
                        <NavbarLinks />
                    </div>
                  </div>
                   </Container>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar