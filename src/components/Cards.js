import React from 'react'
import { CDN_LINK } from '../utils/constant'
function Cards({data}) {
  return (
    
    <div className="food-cards w-[240px] h-[482.77px] rounded-md px-3 pt-2 flex flex-col gap-y-3 bg-gray-100 hover:border border-black">
        <img src={CDN_LINK+ data.cloudinaryImageId} alt="food-image" className='w-[240px] h-[200px] rounded-md' />
       <h3 className='text-xl font-semibold pl-1 tracking-wide'>{data.name}</h3>
        <p><span className='text-lg font-medium'>Cusines:</span> {data.cuisines.join(" , ")}</p>
        <p><span className='text-lg font-medium'>Rating:</span> {data.avgRating} star</p>
        <p><span className='text-lg font-medium'>Price:</span> {data.costForTwo}</p>
        <p><span className='text-lg font-medium'>Delivery Time:</span> {data.sla.deliveryTime} min</p>
    </div>
  )
}

export default Cards

export const cardspromoted = (Cards)=>{
  return (props)=>{
    return (
      <div className='promotedCard-div'>
      <label className='absolute bg-black text-white rounded-md mt-1'>Promoted</label>
      <Cards {...props}/>
      </div>
    )
  }
}