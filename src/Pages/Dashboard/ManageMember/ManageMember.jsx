import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MemberCard from "./MemberCard";
import axios from "axios";

const ManageMember = () => {
  // const members = useLoaderData();
  const [updateMember, setUpdateMember] = useState([]);

  const handleDeleteMember = (id) => {
    setUpdateMember(updateMember.filter((item) => item?._id !== id));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/members")
      .then((res) => {
        setUpdateMember(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(updateMember);
  return (
    <div>
      <div>
        {/* All Apartment Details */}
        <div className="flex flex-col gap-2 p-3 h-[calc(100vh-100px)] overflow-auto">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-purple-950 text-white font-bold text-lg rounded-sm">
                  <th>SN.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Member Role</th>
                  <th className="text-center ">Action</th>
                </tr>
              </thead>
              <tbody>
                {updateMember.map((member, index) => (
                  <MemberCard
                    onDelete={handleDeleteMember}
                    key={index}
                    member={member}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* {apartments.map((apartment) => (
            <DashboardApartmentCard
              onDelete={handleDeleteApartment}
              key={apartment._id}
              apartment={apartment}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ManageMember;
