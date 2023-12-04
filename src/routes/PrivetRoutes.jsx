import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router-dom'

const PrivetRoutes = ({ children }) => {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/login"></Navigate>

    }
    return children
}

export default PrivetRoutes