import Container from "../../components/shared/container/Container";
import ApartmentCard from "./ApartmentCard/ApartmentCard";
import { useLoaderData } from "react-router-dom";

const Apartment = () => {
  const apartments = useLoaderData();

  return (
    <div className="my-10 mx-5 md:mx-0 ">
      <Container>
        <h1 className="text-5xl font-bold">Apartment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {apartments.map((apartment) => (
            <ApartmentCard apartment={apartment} key={apartment?._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Apartment;
