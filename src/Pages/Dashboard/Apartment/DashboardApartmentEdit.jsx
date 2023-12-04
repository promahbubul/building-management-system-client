import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const DashboardApartmentEdit = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  // const [blockName, setBlockName] = useState(data?.block_name)
  // const [floorNumber, setFloorNumber] = useState(data?.floor_no)
  // const [apartmentNumber, setApartmentNumber] = useState(data?.apartment_no)
  // const [rent, setRent] = useState(data?.rent)
  // const [image, setImage] = useState()

  // console.log(blockName);

  const IMAGEBB_API = "918613f4ce8f567723f80cb3e079b7cc";

  const handleEdit = async (e) => {
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

    if (!image) {
      image = data?.image;
    }

    const editApartment = {
      block_name: blockName,
      floor_no: floorNumber,
      apartment_no: apartmentNumber,
      rent,
      image,
    };
    axios
      .patch(
        `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartment/${data?._id}`,
        editApartment
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount > 0) {
          toast.success("Apartment Update");
          navigate("/dashboard/apartment");
        }
      })
      .catch((err) => console.error(err));

    console.log(editApartment);
  };

  // useEffect(() => {
  //     axios.get('https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartments')
  // }, [])
  return (
    <div>
      <form onSubmit={handleEdit} className="">
        <h2
          className="font-extrabold text-4xl bg-slate-500 p-5 rounded-md text-white border-slate-950 border-b-2 mb-5
            "
        >
          Edit Apartment
        </h2>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="blockName">Block Name</label>
          <input
            defaultValue={data?.block_name}
            className="border-2 border-slate-500 outline-none p-2 rounded-md"
            type="text"
            id="blockName"
            placeholder="Enter your block name..."
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="floorNumber">Floor Number</label>
          <input
            defaultValue={data?.floor_no}
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
            defaultValue={data?.apartment_no}
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
            defaultValue={data?.rent}
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

export default DashboardApartmentEdit