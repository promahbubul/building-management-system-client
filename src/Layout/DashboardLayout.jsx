import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardContainer from '../components/Dashboard/DashboardContainer'

const DashboardLayout = () => {
  return (
    <div>
      <DashboardContainer>
        <Outlet />

      </DashboardContainer>
    </div>
  )
}

export default DashboardLayout