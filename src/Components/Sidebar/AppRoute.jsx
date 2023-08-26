import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Dashboard from '../../Page/Dashboard'
import Bookings from '../../Page/Bookings'
import Inventory from '../../Page/Inventory'
import Users from '../../Page/Users'



const AppRoute = ({isDarkMode}) => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard isDarkMode={isDarkMode}/>} />
        <Route path='/bookings' element={<Bookings/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/users' element={<Users/>} />
    </Routes>
  )
}

export default AppRoute