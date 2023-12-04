import axios from "axios";
import React from "react";
import { FaEdit, FaRegEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const AnnouncementCard = ({ announcement, onDelete }) => {
  const handleAnnouncementDelete = (id) => {
    axios
      .delete(
        `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/announcement/${id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          onDelete(id);
          toast.success("Deleted Successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mb3 p-3 shadow-primary border-b-2 flex flex-row justify-between">
      <div className="">
        <h3 className="text-xl font-bold underline text-slate-600 pb-2">
          {announcement?.title}
        </h3>
        <p className="text-secondary font-normal text-base">
          {announcement?.message}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => handleAnnouncementDelete(announcement?._id)}
          className=" text-red-500 text-2xl hover:text-white hover:bg-red-500 p-2 rounded-full transition-all ease-in "
        >
          <FaTrashAlt className="" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementCard;
