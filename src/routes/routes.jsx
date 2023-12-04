import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Apartment from "../Pages/Apartment/Apartment";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile";
import DashboardApartment from "../Pages/Dashboard/Apartment/DashboardApartment";
import DashboardApartmentEdit from "../Pages/Dashboard/Apartment/DashboardApartmentEdit";
import axios from "axios";
import CreateApartment from "../Pages/Dashboard/Apartment/CreateApartment";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageMember from "../Pages/Dashboard/ManageMember/ManageMember";
import Anouncement from "../Pages/Dashboard/Anouncement/Anouncement";
import Announcements from "../Pages/Dashboard/Announcements/Announcements";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Agrement from "../Pages/Dashboard/Agrement/Agrement";
import ManageCupon from "../Pages/Dashboard/ManageCupon/ManageCupon";
import MakePayment from "../Pages/Dashboard/MakePayment/MakePayment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
        loader: () =>
          fetch(
            "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartments/"
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivetRoutes>
    ),

    children: [
      {
        path: "",
        element: <Dashboard />,
        loader: () =>
          axios.get(
            "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartments/"
          ),
      },
      {
        path: "manage-member",
        element: <ManageMember />,
        // loader: () => axios.get("https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/members"),
      },
      {
        path: "agrement-request",
        element: <Agrement />,
        loader: () =>
          fetch(
            "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/agrement"
          ),
      },
      {
        path: "make-announcement",
        element: <Anouncement />,
        // loader: () => axios.get("https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/members"),
      },
      {
        path: "announcements",
        element: <Announcements />,
        loader: () =>
          fetch(
            "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/announcements"
          ),
      },
      {
        path: "profile/:id",
        element: <Profile></Profile>,
        loader: ({ params }) =>
          fetch(
            `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/user-agrement/${params.id}`
          ),
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "make-payment",
        element: <MakePayment />,
      },
      {
        path: "apartment",
        element: <DashboardApartment />,
      },
      {
        path: "apartment/:id",
        element: <DashboardApartmentEdit />,
        loader: ({ params }) =>
          axios.get(
            `https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/apartment/${params.id}`
          ),
      },
      {
        path: "manage-coupons",
        element: <ManageCupon />,
      },
      {
        path: "create-apartment",
        element: <CreateApartment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes