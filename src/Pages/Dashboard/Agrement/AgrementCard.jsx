import axios from "axios";
import React, { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AgrementCard = ({ agrement }) => {
  const { user } = useAuth();
  console.log(user.email);
  const handleAgrementStatus = () => {
    const status = { status: "aproved" };
    axios
      .patch(
        `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/agrement/${agrement._id}`,
        status
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
    console.log("Data");
  };

  const handleAgrementReject = () => {
    const status = { status: "rejected" };
    axios
      .patch(
        `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/agrement/${agrement._id}`,
        status
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
    console.log("Data");
  };
  console.log(agrement.status);
  return (
    <div className="flex flex-row items-center rounded-sm shadow-slate-600 shadow-lg">
      {/* cart image */}
      <img src={agrement?.image} alt="" className="w-2/12 h-full" />
      {/* body */}
      <div className="w-full  rounded-sm  flex  p-2">
        <div className="w-full">
          <div className="flex flex-row justify-between">
            <h4 className="text-md p-1 font-bold">{agrement?.block_name}</h4>

            {agrement?.status == "pending" ? (
              <p className="text-orange-500 bg-orange-100 text-center  py-1 px-3 rounded-full">
                pending
              </p>
            ) : agrement.status == "aproved" ? (
              <p className="text-green-600 bg-green-100 text-center  py-1 px-3 rounded-full">
                aproved
              </p>
            ) : (
              <p className="text-red-600 bg-red-100 text-center  py-1 px-3 rounded-full">
                rejected
              </p>
            )}
          </div>
          <div className="flex flex-row justify-between py-1 items-end ">
            <div className="">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <td>:</td>
                    <td>{agrement.name}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Eamil</th>
                    <td>:</td>
                    <td>{agrement.email}</td>
                  </tr>
                </tbody>
              </table>
              <div className=" flex flex-row gap-5 ">
                <p className="text-green-500">Floor No: {agrement?.floor_no}</p>
                <p className="text-primary">
                  Apartment No: {agrement?.apartment_no}
                </p>
                <p className="text-info">Rent: {agrement?.rent}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleAgrementReject}
                className="text-white rounded-full shadow-md shadow-red-950 text-base font-bold bg-red-600 py-2 px-5"
              >
                Reject
              </button>
              <button
                onClick={handleAgrementStatus}
                className="text-white rounded-full shadow-md shadow-green-950 text-base font-bold bg-green-600 py-2 px-6"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgrementCard;
