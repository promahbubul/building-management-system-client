/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";

import { GiChart } from "react-icons/gi";
import axios from "axios";
import { CiLight } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import aboutBuilding from "../../../assets/images/banner/building-4.jpg";

const About = () => {
  const [setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("card.json")
      .then((res) => {
        setAbout(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-0 shadow-lg rounded-md font-roboto shadow-gray-200 bg-white p-5 my-10 gap-10">
      {/* Left */}
      <img src={aboutBuilding} alt="" className="w-full md:w-5/12" />
      {/* right */}
      <div className="w-full md:w-7/12 flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold text-[#0ba] font-roboto">
          ABOUT THE BUILDING
        </h2>
        <p className="text-[#606e7c] text-base font-normal mt-4 font-roboto">
          OUR MISSION IS TO EMPOWER CONSUMERS WITH INFORMATION TO MAKE SMART
          DECISIONS. REALTYSPACE IS A REAL ESTATE MARKETPLACE DEDICATED TO
          HELPING HOMEOWNERS, HOME BUYERS, SELLERS, RENTERS AND AGENTS FIND AND
          SHARE INFORMATION ABOUT HOMES, REAL ESTATE AND HOME IMPROVEMENT.
        </p>
        <div className="grid md:grid-cols-2 mt-10 gap-3 justify-between">
          <div className="mt-5">
            <FaMoneyBillAlt className="text-5xl text-custom2" />
            <h3 className="text-custom1 text-xl font-bold my-3 ">SAVE MONEY</h3>
            <p className="text-custom2 text-sm">
              It starts with our living database of more than 110 million U.S.
              homes – including homes for sale, homes for rent and homes not
              currently on the market.
            </p>
          </div>
          <div className="mt-5">
            <GiChart className="text-5xl text-custom2" />
            <h3 className="text-custom1 text-xl font-bold my-3 ">
              GOOD SALES & MARKETING
            </h3>
            <p className="text-custom2 text-sm">
              In addition, RealtySpace operates the largest real estate and
              rental advertising networks in the U.S. in partnership with
              Livemile Homes!
            </p>
          </div>
          <div className="mt-5">
            <CiLight className="text-5xl text-custom2" />
            <h3 className="text-custom1 text-xl font-bold my-3 ">COMFORT</h3>
            <p className="text-custom2 text-sm">
              We are transforming the way consumers make home-related decisions
              and connect with professionals.
            </p>
          </div>
          <div className="mt-5">
            <FiSearch className="text-5xl text-custom2" />
            <h3 className="text-custom1 text-xl font-bold my-3 ">
              EASY TO FIND
            </h3>
            <p className="text-custom2 text-sm">
              It starts with our living database of more than 110 million U.S.
              homes {"–"} including homes for sale, homes for rent and homes not
              currently on the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
