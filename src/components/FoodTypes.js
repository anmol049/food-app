import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { additem } from '../Redux/Slices/Cartslice'

function FoodTypes({data1}) {
  const[foodDisplay, setFoodDisplay] = useState(false)
  const displayfood = ()=>{
     setFoodDisplay(!foodDisplay)
  }
  const dispatch = useDispatch();
  function handleclick(obj){
    dispatch(additem(obj))
  }
  return (
   <div className="food   bg-gray-50 w-6/12 mx-auto  shadow-lg rounded-md cursor-pointer">
      <div className="top-containor flex justify-between border border-black shadow-lg rounded-md p-3 mt-4" onClick={displayfood}>
      <h1 className='text-lg font-medium'>{data1.name} ({data1.items.length})</h1>
      <h1 className='text-xl'>{foodDisplay?"⬆️":"⬇️"}</h1>
      </div>
      <div className="bottom-containor">
        {data1.items.map((obj,ind)=>{
          if(foodDisplay){
            return (
              <div className='border-b-[1.5px] border-gray-400 border-solid text-left mt-3 pb-9 pl-2 flex justify-between' key={ind}>
                <div className="left-containor">
                  <p className='text-sm'><span className='border border-green-500 text-xs'>🟢</span></p>
                  <p className='mt-2 font-medium text-lg text-gray-800'>{obj.name}</p>
                  <p className='mt-2 font-medium'>$ {obj.price}/-</p>
                  <p className='mt-2 text-gray-500'>{obj.description}</p>
                </div>
                <div className="right-containor relative">
                  <img src={obj.image} alt="food-image" className='h-[150px] w-[200px] rounded-md' />
                  <div className='absolute bottom-1 left-14'>
                    <button className='border border-black bg-black text-white px-5 rounded-md' onClick={()=>{handleclick(obj)}}>Add</button>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
   </div>
  )
}

export default FoodTypes