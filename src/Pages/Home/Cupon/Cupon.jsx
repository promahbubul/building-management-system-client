import React from "react";
import cupon from "../../../assets/images/cupon.jpg";
import { Link } from "react-router-dom";

const Cupon = () => {
  return (
    <div className="flex bg-[#edf9f9] py-10 flex-row  mb-10 justify-center items-center">
      {/* right */}
      <div className="w-5/12 h-full m-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-custom1 mb-5">WINTER OFFER</h2>
        <p className="my-5 text-xl text-custom2">
          <span className="bg-[#ffcc41] px-2 py-3  text-4xl font-extrabold rounded-full text-white ">
            50%
          </span>{" "}
          Discount Using this Cupon
        </p>
        <p className="text-[#ffcc41] my-5 font-extrabold text-4xl border-b border-[#ffcc41]">
          WINTER50
        </p>
        <Link to="/apartment">
          <button className="btn bg-[#0ba] text-white hover:bg-[#ffcc41]  btn-lg">
            Agreement
          </button>
        </Link>
      </div>
      {/* left */}
      <div className="w-7/12 shadow-lg shadow-[#ffcc41] mr-5 h-full">
        <img src={cupon} alt="" className="h-80 w-full" />
      </div>
    </div>
  );
};

export default Cupon;
