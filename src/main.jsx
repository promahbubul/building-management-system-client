import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios  from 'axios'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ToastContainer />
    <RouterProvider router={routes} ></RouterProvider>
  </AuthProvider>
)
