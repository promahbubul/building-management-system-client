import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import profileImage from "../../../assets/images/imageProfile.png";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MemberCard = ({ member, index, onDelete }) => {
  const { user } = useAuth();
  const [role, setRole] = useState();

  const handleDeleteMamber = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/delete-user/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          onDelete(id);
          toast.success("Member Deleted");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleRole = (email, e) => {
    const user = { email, role: e };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch("http://localhost:8080/api/v1/update-user", user)
          .then((res) => {
            if (res.data.modifiedCount > 0);
            {
              toast.success(`Updated`);
            }
          })
          .catch((err) => console.error(err));
      }
    });
    console.log(user);
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={member?.image ? member?.image : profileImage}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{member?.name}</div>
            </div>
          </div>
        </td>
        <td>{member?.email}</td>
        <td>
          <select
            defaultValue={member?.role}
            onChange={(e) => handleRole(member?.email, e.target.value)}
            name="role"
            className="w-full p-2 bg-green-100 rounded-sm outline-none"
            id=""
          >
            <option value="user">user</option>
            <option value="member">mamber</option>
            <option value="admin">admin</option>
          </select>
        </td>

        <td className="flex flex-row items-center justify-center gap-1">
          {" "}
          <button className=" text-red-500 text-2xl hover:text-white hover:bg-red-500 p-2 rounded-full transition-all ease-in ">
            <FaTrashAlt
              onClick={() => handleDeleteMamber(member?._id)}
              className=""
            />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MemberCard;
