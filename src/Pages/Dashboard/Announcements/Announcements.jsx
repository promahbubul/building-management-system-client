import React from "react";
import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Announcements = () => {
  const announcements = useLoaderData();
  console.log(announcements);
  return (
    <div className="">
      <h2 className="text-center my-10 bg-slate-700 text-white py-2 text-xl font-bold rounded-md">
        Announcements
      </h2>

      <div className="shadow-current shadow-inner rounded-md h-[calc(100vh-170px)]">
        <marquee height="100%" behavior="" direction="down">
          {announcements.map((announcement) => (
            <div className="mb3 p-3 shadow-primary border-b-2 flex flex-row justify-between">
              <div className="">
                <h3 className="text-xl font-bold underline text-slate-600 pb-2">
                  {announcement?.title}
                </h3>
                <p className="text-secondary font-normal text-base">
                  {announcement?.message}
                </p>
              </div>
            </div>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default Announcements;
