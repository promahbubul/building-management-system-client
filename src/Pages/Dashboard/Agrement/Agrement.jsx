import AgrementCard from "./AgrementCard";
import Container from "../../../components/shared/container/Container";
import { useLoaderData } from "react-router-dom";

const Agrement = () => {
  const agrements = useLoaderData();
  return (
    <div>
      <Container>
        <h1 className="text-4xl bg-sky-900 text-white text-center py-3 rounded-md font-bold">
          agrement: {agrements.length}
        </h1>
        <div className="flex flex-col gap-5 mt-5 h-[calc(100vh-120px)] shadow-gray-950 shadow-2xl py-2 px-2 overflow-auto">
          {agrements.map((agrement) => (
            <AgrementCard key={agrement?._id} agrement={agrement} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Agrement;
