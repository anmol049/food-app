import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodTypes from '../FoodTypes'
import { clearcart } from '../../Redux/Slices/Cartslice'
import { deleteitem } from '../../Redux/Slices/Cartslice'
function CartPage() {
  const cartdata = useSelector((store)=>store.cartlist.item)
  const dispatch = useDispatch()
  function handleclearcart(){
    dispatch(clearcart())
  }
  function handleremoveitem(index){
    dispatch(deleteitem(index))
  }
  return (
    <div className="containor mt-7 flex flex-col items-center">
        <h1 className='text-2xl font-medium'>Cart</h1>
        <button className='border border-black bg-black text-white px-4 mt-5' onClick={()=>{handleclearcart()}}>Clear Cart</button>
        <>
          {cartdata.map((obj,index)=>{
            return (
              <div className='border-b-[1.5px] w-6/12 border-gray-400 border-solid text-left mt-10 pb-9 pl-2 flex justify-between' key={index}>
              <div className="left-containor ">
              <p className='text-sm'><span className='border border-green-500 text-xs'>🟢</span></p>
              <p className='mt-2 font-medium text-lg text-gray-800'>{obj.name}</p>
              <p className='mt-2 font-medium'>$ {obj.price}</p>
              <p className='mt-2 text-gray-500'>{obj.description}</p>
              </div>
              {/* <div className="right-containor relative">
                <img src={obj.image} alt="food-image" className='h-[150px] w-[200px]'/>
                <div className='absolute bottom-1 left-14'>
                  <button className='border bolder-black rounded-md bg-black text-white px-3' onClick={()=>{handleremoveitem(index)}}>Remove</button>
                </div>
              </div> */}
              <div className="right-containor relative">
                  <img src={obj.image} alt="food-image" className='h-[150px] w-[200px] rounded-md' />
                  <div className='absolute bottom-1 left-14'>
                    <button className='border border-black bg-black text-white px-3 rounded-md' onClick={()=>{handleremoveitem(index)}}>Remove</button>
                  </div>
                </div>
            </div>
            )
          })}
        </>
    </div>
  )
}

export default CartPage