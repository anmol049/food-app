import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function AppLayout() {
  return (
    <div className="app-containor">
      <Header />
      <Outlet/>
    </div>
  )
}

export default AppLayout