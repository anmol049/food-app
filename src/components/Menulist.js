import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useMenulist from '../utils/useMenulist';
import FoodTypes from './FoodTypes';
import Footer from './Footer'

function Menulist() {
    const id = useParams();

    const data = useMenulist(id)

  return data.length==0?(<Shimmer/>):(
    <div className="menu-list text-center mt-4 flex flex-col gap-5">
        <div className='flex justify-between w-6/12 mx-auto'>
          <div className="text-start">
            <h1 className='text-2xl font-medium'>{data[0].info.name}</h1>
            <p className='text-gray-500 text-sm mt-1'>{data[0].info.cuisines.join(", ")}</p>
            <p className='text-gray-500 text-md mt-1'>{data[0].info.locality} - {data[0].info.areaName} , {data[0].info.sla.lastMileTravelString}</p>
          </div>
          <div className="">
            <p className='text-green-500 font-medium text-xl pt-3 pr-3'>⭐ {data[0].info.avgRating}</p>
          </div>
        </div>
        <div className='border-t-2 border-dashed w-6/12 mx-auto flex gap-6'>
            <span className='mt-3 text-md font-medium text-gray-800'>🌐Currently</span>
            <span className='mt-3 text-md font-medium text-gray-800'>💸{data[0].info.costForTwo}</span>
        </div>
        <div className='flex justify-center p-2 mx-auto  gap-x-7 border'>
          <div className='border border-black rounded-md p-2'>
            <p className='text-md text-gray-600 font-bold '>🪇{data[0].info.aggregatedDiscountInfoV3[0].header} {data[0].info.aggregatedDiscountInfoV3[0].subHeader}</p>
            <p className='text-sm text-gray-500 font-medium'>{data[0].info.aggregatedDiscountInfoV3[0].bottom}</p>          
          </div>
          <div className='border border-black rounded-md p-2'>
            <p className='text-sm text-gray-600 font-bold'>🪇{data[0].info.aggregatedDiscountInfoV3[1].header} {data[0].info.aggregatedDiscountInfoV3[1].subHeader}</p>
            <p className='text-sm text-gray-500 font-medium'>{data[0].info.aggregatedDiscountInfoV3[1].bottom}</p>
          </div>
          <div className='border border-black rounded-md p-2'>
            <p className='text-sm text-gray-600 font-bold'>🪇{data[0].info.aggregatedDiscountInfoV3[2].header} {data[0].info.aggregatedDiscountInfoV3[2].subHeader}</p>
            <p className='text-sm text-gray-500 font-medium'>{data[0].info.aggregatedDiscountInfoV3[2].bottom}</p>
          </div>
          <div className='border border-black rounded-md p-2'>
            <p className='text-sm text-gray-600 font-bold'>🪇{data[0].info.aggregatedDiscountInfoV3[3].header} {data[0].info.aggregatedDiscountInfoV3[3].subHeader}</p>
            <p className='text-sm text-gray-500 font-medium'>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
          {/* <div className='border border-black rounded-md p-2'>
            <p className='text-sm text-gray-600 font-bold'>🪇{data[0].info.aggregatedDiscountInfoV3[4].header} {data[0].info.aggregatedDiscountInfoV3[4].subHeader}</p>
            <p className='text-sm text-gray-500 font-medium'>USE SWIGGY50 | ABOVE ₹149</p>
          </div> */}
        </div>
        <div className="food-recomandation">
           {data[0].info.menu.sections.map((obj,index)=>{
               return (
                 <div key={index}>
                 <FoodTypes data1 = {obj}/>
                 </div>
                )
          })}
        </div>
        <Footer/>
       
    </div>
  )
}

export default Menulist