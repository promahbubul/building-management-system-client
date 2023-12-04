import axios from 'axios'
import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'


const DashboardApartmentCard = ({ apartment, onDelete }) => {


  const handleDeleteApartment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios
          .delete(
            `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartment/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              onDelete(id);
              toast.success("Apartment Deleted Successfully");
            }
          })
          .catch((err) => console.error(err));

        // console.log(result.isConfirmed, id);
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }

  

  return (
    <div className='flex flex-row rounded-sm shadow-slate-600 shadow-md'>
      {/* cart image */}
      <img src={apartment?.image} alt="" className="w-2/12 h-32" />
      {/* body */}
      <div className="w-10/12  border-2 rounded-sm border-l-0 border-slate-700  flex justify-between p-4">
        <div className="">
          <h4 className="text-lg p-1 font-bold">{apartment?.block_name}</h4>
          <hr className='text-slate-700 border-slate-700' />
          <div className="pl-5 flex flex-row gap-5 py-3">
            <p className="text-green-500">Floor No: {apartment?.floor_no}</p>
            <p className="text-primary">Apartment No: {apartment?.apartment_no}</p>
            <p className="text-info">Rent: {apartment?.rent}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <Link to={`/dashboard/apartment/${apartment?._id}`}>
            <FaEdit className='text-2xl cursor-pointer text-green-500' />
          </Link>
          <FaTrash onClick={() => handleDeleteApartment(apartment?._id)} className='text-2xl cursor-pointer text-red-500' />
        </div>
      </div>
    </div>
  )
}

export default DashboardApartmentCard