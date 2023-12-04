import React, { useEffect, useState } from 'react'
import DashboardApartmentCard from './DashboardApartmentCard'
import axios from 'axios'

const DashboardApartment = () => {
  const [apartments, setApartment] = useState([])



  const handleDeleteApartment = (id) => {
    // setApartment(prevApartment => prevApartment.filter(apartment => apartment.id !== id)) 
    setApartment(apartments.filter(item => item._id !== id));
  }

  useEffect(() => {
    axios
      .get(
        "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartments"
      )
      .then((data) => {
        setApartment(data.data);
      })
      .catch((err) => console.error(err));
  }, [])

  console.log(apartments);
  return (
    <div>
      {/* title */}
      <div className="bg-slate-500 w-full p-3 rounded-md border-b-2 border-slate-800 mb-5">
        <h3 className="text-2xl font-bold text-white">Total Apartment: {apartments.length}</h3>

      </div>
      {/* All Apartment Details */}
      <div className="flex flex-col gap-2 p-3 h-[calc(100vh-100px)] overflow-auto">
        {
          apartments.map(apartment => <DashboardApartmentCard onDelete={handleDeleteApartment} key={apartment._id} apartment={apartment} />)
        }
      </div>
    </div>
  )
}

export default DashboardApartment