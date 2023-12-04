import React from 'react'
import useAuth from '../../Hooks/useAuth'
import imageProfile from '../../assets/images/imageProfile.png'
import { useLoaderData } from "react-router-dom";
import ProfileTable from "../../components/Dashboard/ProfileTable/ProfileTable";

const Profile = () => {
  const { user } = useAuth();
  const agrements = useLoaderData();
  console.log(agrements);
  return (
    <div className="mt-20">
      <div className="mx-auto my-auto">
        <img
          src={user?.photoURL ? user?.photoURL : imageProfile}
          alt=""
          className="text-center w-[100px] h-[103px] mx-auto border-4 p-1 rounded-full border-slate-700"
        />
      </div>
      <div className="mx-auto  my-auto text-center mt-5">
        {user?.displayName == null ? "" : <p> Name: {user?.displayName}</p>}

        <p className="">Email: {user?.email}</p>
      </div>
      <ProfileTable agrements={agrements} />
    </div>
  );
};

export default Profile