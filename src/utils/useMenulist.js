import React from 'react'
import { useEffect, useState } from 'react'
import { listData } from '../utils/mockData';

function useMenulist(id) {

  const[data,setdata] = useState([])
  useEffect(()=>{
    const newarr = listData.restaurants.filter((obj)=>{

      return obj.info.id == id.userid
  })
  setdata(newarr)
  },[])

  return data;
  
}

export default useMenulist