import React, { useEffect, useState } from "react";
import thumbnail from "../../../assets/images/apartment/apartment-1.jpg";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ApartmentCard = ({ apartment }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loadedAgrements, setLoadedAgrements] = useState();

  // console.log(apartments);

  useEffect(() => {
    axios
      .get(
        "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/agrement"
      )
      .then((res) => {
        setLoadedAgrements(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(
    loadedAgrements?.find((item) => item?.apartmentId == apartment?._id)
  );

  /**
   * block_name
   * floor_no
   * image
   * rent
   * apartment_no
   */

  const handleAgrementSubmit = () => {
    if (user) {
      const apartmentId = apartment?._id;
      const image = apartment?.image;
      const block_name = apartment?.block_name;
      const floor_no = apartment?.floor_no;
      const apartment_no = apartment?.apartment_no;
      const rent = apartment?.rent;
      const agrement = {
        image,
        apartmentId,
        block_name,
        floor_no,
        apartment_no,
        rent,
        name: user?.displayName,
        email: user?.email,
        status: "pending",
      };

      axios
        .post(
          "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/agrement",
          agrement
        )
        .then((res) => {
          if (res.data.message) {
            toast.error("Apartment already booked");
          }
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Agrement Successfull", {
              position: "top-center",
            });
          }
        })
        .catch((error) => console.error(error));
      // console.log(agrement);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="shadow-md rounded-md shadow-blue-300">
      <img
        src={apartment?.image}
        className="h-72 w-full rounded-t-md border-b-primary border-b-4"
      />
      <div className="p-3 pb-5">
        <h2 className="text-xl font-semibold">{apartment?.block_name}</h2>
        <div className="flex flex-row justify-between my-5 items-end">
          <div className="flex flex-col gap-3">
            <p className="text-base">
              Apartment No.{" "}
              <span className="text-base font-bold bg-purple-500 text-white px-2 rounded-full py-1">
                {apartment?.apartment_no}
              </span>
            </p>
            <p className="text-base">
              Floor No.{" "}
              <span className="text-base font-bold bg-green-500 text-white px-2 rounded-full py-1">
                {apartment?.floor_no}
              </span>
            </p>
          </div>
          <p className="text-lg font-semibold">
            Rent: <span className="text-orange-500">$ {apartment?.rent}</span>
          </p>
        </div>
        {
          <div className="flex justify-end mb-5 ">
            {loadedAgrements?.find(
              (item) => item?.apartmentId == apartment?._id
            ) ? (
              <p className="bg-orange-500 right-0 px-3 py-2 text-white  rounded-sm inline">
                Already Ordered
              </p>
            ) : (
              ""
            )}
          </div>
        }
        <div className="flex flex-row justify-between w-full">
          <button
            onClick={handleAgrementSubmit}
            className="btn btn-primary w-full btn-lg"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
