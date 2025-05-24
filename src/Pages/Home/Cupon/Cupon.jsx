import cupon from "../../../assets/images/cupon.jpg";
import { Link } from "react-router-dom";

const Cupon = () => {
  return (
    <div className="flex bg-[#edf9f9] py-10 flex-col md:flex-row mx-5 md:mx-0  mb-10 justify-center items-center">
      {/* right */}
      <div className="w-full md:w-5/12 h-full m-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-custom1 mb-5">WINTER OFFER</h2>
        <p className="my-5 flex flex-col md:flex-row items-center text-xl text-custom2">
          <span className="bg-[#ffcc41] w-20 h-20 flex justify-center items-center leading-none  text-3xl  md:text-4xl font-extrabold rounded-full text-white ">
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
      <div className="w-full md:w-7/12 shadow-lg shadow-[#ffcc41] px-5 mt-5 md:pt-0 md:px-0 md:mr-5 h-full">
        <img src={cupon} alt="" className="h-80 w-full" />
      </div>
    </div>
  );
};

export default Cupon;
