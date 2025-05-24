/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import {  NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { BsBuildingFillAdd } from "react-icons/bs";
import { TbBuildingCommunity } from "react-icons/tb";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { AiFillDashboard } from "react-icons/ai";
import { LuBellPlus, LuBellRing } from "react-icons/lu";

import { MdManageAccounts } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import axios from "axios";

const DashboardContainer = ({ children }) => {
  const [member, setMember] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    logout()
      .then((res) => {
        toast.success("User Logout Successfully", {
          position: "top-center",
        });
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  console.log("first User", user);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/single-member/${user?.email}`)
      .then((res) => {
        console.log("first", res);
        if (res?.data?.role == "admin") {
          setIsAdmin(true);
          console.log("Admin", res?.data);
        } else if (res?.data?.role == "member") {
          setMember(true);
          console.log("Member", res?.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="w-[320px] bg-slate-800   text-white ">
        <img className="p-3 text-center mx-auto mb-3" src={logo} alt="" />
        {/* Navigation Links */}
        <div className="flex flex-col gap-1 h-[calc(100vh-110px)] ">
          {isAdmin ? (
            <>
              <NavLink to="/dashboard">
                <div className="flex flex-row items-center gap-2 text-lg p-2 bg-slate-700">
                  {/* icon */}
                  <AiFillDashboard />

                  {/* name */}
                  <p>Dashboard</p>
                </div>
              </NavLink>
              <NavLink to="manage-member">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <MdManageAccounts />

                  {/* name */}
                  <p>Manage Members</p>
                </div>
              </NavLink>
              <NavLink to="agrement-request">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <IoNewspaperOutline />

                  {/* name */}
                  <p>Agreement Requests</p>
                </div>
              </NavLink>{" "}
              <NavLink to="manage-coupons">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <RiCoupon3Line />

                  {/* name */}
                  <p>Manage Coupons</p>
                </div>
              </NavLink>
              <NavLink to="create-apartment">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <BsBuildingFillAdd />
                  {/* name */}
                  <p>Create Apartment</p>
                </div>
              </NavLink>
              <NavLink to="apartment">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <TbBuildingCommunity />

                  {/* name */}
                  <p>Apartments</p>
                </div>
              </NavLink>
              <NavLink to="make-announcement">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <LuBellPlus />

                  {/* name */}
                  <p>Make Announcement</p>
                </div>
              </NavLink>
            </>
          ) : (
            <></>
          )}

          {/* ***************************** */}
          {member || isAdmin ? (
            <>
              <NavLink to="make-payment">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <CgProfile />
                  {/* name */}
                  <p>Make Payment</p>
                </div>
              </NavLink>
              <NavLink to="payment-history">
                <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
                  {/* icon */}
                  <CgProfile />
                  {/* name */}
                  <p>Payment History</p>
                </div>
              </NavLink>
            </>
          ) : (
            ""
          )}

          {/* ------------------------------- */}

          <NavLink to={`announcements`}>
            <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
              {/* icon */}
              <LuBellRing />
              {/* name */}
              <p>Announcements</p>
            </div>
          </NavLink>
          <NavLink to={`profile/${user.email}`}>
            <div className="flex flex-row items-center gap-2 text-lg p-3 bg-slate-700">
              {/* icon */}
              <CgProfile />
              {/* name */}
              <p>Profile</p>
            </div>
          </NavLink>
        </div>

        <button
          className="flex flex-row justify-center mx-auto items-center gap-2 text-2xl"
          onClick={handleLogout}
        >
          <CiLogout />
          Logout
        </button>
      </div>
      {/* container */}
      <div className="w-full p-5 ">{children}</div>
    </div>
  );
};

export default DashboardContainer;
