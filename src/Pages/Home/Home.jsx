import React from 'react'
import Container from '../../components/shared/container/Container'
// import Carousel from "./Carosel/Carousel";
import MapComponent from "./MapComponent";
import CarouselSection from './Carosel/Carousel';
import About from './AboutSection/About';
import Cupon from './Cupon/Cupon';
import Contact from './Contact/Contact';


const Home = () => {
  return (
    // <Container className="">
    // </Container>
    <Container>
      <CarouselSection />
      <About />
      <Cupon />
      <Contact />
     
    </Container>
  );
};

export default Home