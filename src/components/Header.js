import React, { useState } from 'react'
import { LOGO_LINK } from '../utils/constant';
import {Link} from 'react-router-dom'
import useOnlineSatatus from '../utils/useOnlineSatatus';
import { useSelector } from 'react-redux';
function Header() {
  const[buttontext,setbuttontext] = useState("Login");
  const onlinestaus = useOnlineSatatus();
  const cartlist = useSelector((store)=>store.cartlist.item)
  return (
    <div className="header-containor border border-black flex justify-between m-2">
        <div className="logo mt-1 mb-3 ml-2 ">
            <img src={LOGO_LINK} alt="app-logo" width="130px"/>
        </div>
        <div className="nav-links">
            <ul className='flex gap-8 my-7 mr-4  p-4 text-lg'>
              <li className='cursor-pointer text-gray-700 font-medium hover:text-orange-500'>OnlineStatus:{onlinestaus?"🟢": "🔴"}</li>
              <Link to="/" className='text-gray-700 font-medium hover:text-orange-500'><li>Home</li></Link>
              <Link to="/contact" className='text-gray-700 font-medium hover:text-orange-500'><li>Contact Us</li></Link>
              <Link to="/about" className='text-gray-700 font-medium hover:text-orange-500'><li>About Us</li></Link>
              <Link to="/cart" className='text-gray-700 font-medium hover:text-orange-500'><li>cart ({cartlist.length}) </li></Link>
              <Link to="/groceries" className='text-gray-700 font-medium hover:text-orange-500'><li>Groceries Shop</li></Link>
              <button onClick={()=>{
                  buttontext=="Login"?setbuttontext("Logout"):setbuttontext("Login")
                  
                }} className='border border-black px-2 bg-gray-300 hover:text-orange-500'>{buttontext}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header