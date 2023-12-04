import React, { useEffect, useState } from "react";
import Container from "../../components/shared/container/Container";
import ApartmentCard from "./ApartmentCard/ApartmentCard";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const Apartment = () => {
  const apartments = useLoaderData();

  return (
    <div className="my-10">
      <Container>
        <h1 className="text-5xl font-bold">Apartment</h1>
        <div className="grid grid-cols-3 gap-5 my-10">
          {apartments.map((apartment) => (
            <ApartmentCard apartment={apartment} key={apartment?._id} />
          ))}
          {/* <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard /> */}
        </div>
      </Container>
    </div>
  );
};

export default Apartment;
