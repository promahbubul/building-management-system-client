import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar/Navbar'
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </div>
  );
};

export default MainLayout