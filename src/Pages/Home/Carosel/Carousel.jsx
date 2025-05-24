import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/images/apartment/apartment-2.jpg";
import banner2 from "../../../assets/images/apartment/apartment-3.jpg";
import banner3 from "../../../assets/images/apartment/apartment-1.jpg";
import banner4 from "../../../assets/images/banner/building-4.jpg";
import banner5 from "../../../assets/images/banner/building-5.jpg";

const CarouselSection = () => {
  return (
    <div className="w-full ">
      <Carousel autoPlay={true} interval={2000}>
        <div className="rounded-md bg-slate-900 p-1">
          <img className="h-full" src={banner1} />
        </div>
        <div className="rounded-md bg-slate-900 p-1">
          <img className="h-full" src={banner2} />
        </div>
        <div className="rounded-md bg-slate-900 p-1">
          <img className="h-full" src={banner3} />
        </div>
        <div className="rounded-md bg-slate-900 p-1">
          <img className="h-full" src={banner4} />
        </div>
        <div className="rounded-md bg-slate-900 p-1">
          <img className="h-full" src={banner5} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
