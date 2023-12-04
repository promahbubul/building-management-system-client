import React from "react";

const ProfileTable = ({ agrements }) => {
  return (
    <div className="overflow-x-auto mt-8 border-2 border-sky-700 rounded-md overflow-auto h-[calc(100vh-340px)]">
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
            <tr key={index} className="">
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
  );
};

export default ProfileTable;
