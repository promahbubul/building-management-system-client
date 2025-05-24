import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreateApartment = () => {
  const navigate = useNavigate();

  const IMAGEBB_API = "918613f4ce8f567723f80cb3e079b7cc";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const blockName = form.blockName.value;
    const floorNumber = form.floorNumber.value;
    const apartmentNumber = form.apartmentNumber.value;
    const rent = form.rent.value;
    let image = form.image.files[0];
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      await axios
        .post(`https://api.imgbb.com/1/upload?key=${IMAGEBB_API}`, formData)
        .then((data) => {
          //    console.log(data.data.data.display_url);
          image = data.data.data.display_url;
        })
        .catch((err) => console.error(err));
    }

    const createApartment = {
      block_name: blockName,
      floor_no: floorNumber,
      apartment_no: apartmentNumber,
      rent,
      image,
    };
    axios
      .post(`http://localhost:8080/api/v1/apartment`, createApartment)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success("Apartment Update");
          navigate("/dashboard/apartment");
        }
      })
      .catch((err) => console.error(err));

    console.log(createApartment);
  };

  // useEffect(() => {
  //     axios.get('http://localhost:8080/api/v1/apartments')
  // }, [])
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <h2
          className="font-extrabold text-4xl bg-slate-500 p-5 rounded-md text-white border-slate-950 border-b-2 mb-5
            "
        >
          Create Apartment
        </h2>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="blockName">Block Name</label>
          <input
            className="border-2 border-slate-500 outline-none p-2 rounded-md"
            type="text"
            id="blockName"
            placeholder="Enter your block name..."
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="floorNumber">Floor Number</label>
          <input
            className="border-2 border-slate-500 outline-none p-2 rounded-md"
            type="text"
            name="floorNumber"
            id="floorNumber"
            placeholder="Enter your floor number..."
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="apartmentNumber">Apartment Number</label>
          <input
            className="border-2 border-slate-500 outline-none p-2 rounded-md"
            type="text"
            name="apartmentNumber"
            id="apartmentNumber"
            placeholder="Enter your apartment number..."
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="rent">Rent</label>
          <input
            className="border-2 border-slate-500 outline-none p-2 rounded-md"
            type="text"
            name="rent"
            id="rent"
            placeholder="Enter your rent..."
          />
        </div>
        <input type="file" name="image" />
        <input
          type="submit"
          value="Update"
          className="block btn btn-primary w-full mt-5"
        />
      </form>
    </div>
  );
}

export default CreateApartment