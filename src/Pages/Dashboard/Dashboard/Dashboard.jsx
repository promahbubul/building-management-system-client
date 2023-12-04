import React from 'react'
import { MdOutlineApartment } from 'react-icons/md'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom'
import LineChart from '../../../components/LineChart/LineChartMap';

const Dashboard = () => {
    const apartments = useLoaderData()


    const totalRentArray = apartments?.data.map(id => parseFloat(id.rent))

    const totalRent = totalRentArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    // const totalRent = 
    const totalApartment = apartments?.data.length

    const averageApartment = Math.round(totalRent / totalApartment)

    // console.log(`Total Rent: ${totalRent}. Total Apartment: ${totalApartment}. Avarage: ${totalRent / totalApartment}. total`);
    console.log(averageApartment);


    // console.log(apartments.data);
    return (
        <div className='h-full'>
            {/* Top Box */}
            <div className="grid grid-cols-3  justify-around">
                <div className="bg-green-600 shadow-lg  shadow-green-800 pt-3 rounded-md text-center text-2xl text-white  flex flex-col justify-between w-72 ">
                    <h1 className='m-auto pb-5  font-medium'>
                        <MdOutlineApartment className='text-6xl text-center mx-auto mb-2 bg-green-400 rounded-full p-2' />
                        Total Apartment</h1>
                    <div className="text-white rounded-t-none rounded-md bg-green-800 p-3 text-3xl font-extrabold">{apartments?.data?.length}</div>
                </div>
                <div className="bg-purple-600 shadow-lg  shadow-purple-800 pt-3 rounded-md text-center text-2xl text-white  flex flex-col justify-between w-72 ">
                    <h1 className='m-auto pb-5  font-medium'>
                        <FaRegMoneyBillAlt className='text-6xl text-center mx-auto mb-2 bg-purple-400 rounded-full p-2' />
                        Avarage Rent</h1>
                    <div className="text-white rounded-t-none rounded-md bg-purple-800 p-3 text-3xl font-extrabold">{averageApartment}</div>
                </div><div className="bg-orange-600 shadow-lg  shadow-orange-800 pt-3 rounded-md text-center text-2xl text-white  flex flex-col justify-between w-72 ">
                    <h1 className='m-auto pb-5  font-medium'>
                        <MdOutlineApartment className='text-6xl text-center mx-auto mb-2 bg-orange-400 rounded-full p-2' />
                        Total Apartment</h1>
                    <div className="text-white rounded-t-none rounded-md bg-orange-800 p-3 text-3xl font-extrabold">{apartments?.data?.length}</div>
                </div>
            </div>
            {/* main area */}
            <div className="flex items-center justify-center h-4/6">
                <LineChart apartments={apartments?.data} />
            </div>
        </div>
    )
}

export default Dashboard