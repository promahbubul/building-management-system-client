import React, { useState } from "react";

const PaymentHistory = () => {
  const [agrements, setAgrement] = useState([]);
  return (
    <div className="">
      <h2 className="bg-violet-950 p-4 text-2xl font-extrabold border-s-amber-50 text-center text-white">
        Payment History
      </h2>
      <form
        action=""
        className="mt-8 flex flex-row justify-end items-center gap-5 "
      >
        <span>Search By Month: </span>
        <input
          className="text-right bg-sky-100 outline-none text-sky-600 border-slate-700 p-2 rounded-md "
          type="month"
        />
      </form>
      <div className="overflow-x-auto mt-3 border-2 border-sky-700 rounded-md overflow-auto h-[calc(100vh-340px)]">
        <table className="table table-xs ">
          <thead>
            <tr className="bg-sky-700 text-white text-base">
              <th>SN.</th>
              <th>Block Name</th>
              <th className="text-center">Apartment No.</th>
              <th className="text-center">Floor No.</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {agrements.map((agrement, index) => (
              <tr className="">
                <th>{index + 1}</th>
                <td>{agrement?.block_name}</td>
                <td className="text-center">{agrement?.apartment_no}</td>
                <td className="text-center">{agrement?.floor_no}</td>

                {agrement.status === "pending" ? (
                  <td className="text-orange-700 text-center  rounded-md ">
                    {agrement?.status}
                  </td>
                ) : (
                  <td className="text-green-700 text-center rounded-md ">
                    {agrement?.status}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
