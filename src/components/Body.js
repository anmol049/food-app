import React, { useEffect, useState } from 'react'
import Cards, { cardspromoted } from './Cards'
import Shimmer from './Shimmer';
import { checkmockdata } from '../utils/mock';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import useOnlineSatatus from '../utils/useOnlineSatatus';


function Body() {
  const[cartlist,setcartlist] = useState([]);
  const[newcartlist,setnewcartlist] = useState([])
  const[search,setsearch] = useState("")
  const onlinestaus = useOnlineSatatus();
  const PromotedCards = cardspromoted(Cards)
  useEffect(()=>{
    setTimeout(() => {
      setcartlist(checkmockdata.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
      setnewcartlist(checkmockdata.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
    }, 1000);
  },[]) 
  if(onlinestaus === false){
    return <h1>you are offline</h1>
  }


  return (
    <div className="body-containor">

        <div className="search-containor flex justify-center gap-14 text-base py-3 mt-4">
            <input type="text"id="input-data" placeholder='search' value={search} onChange={(e)=>{
                  setsearch(e.target.value)
            }} className='border border-black py-1 pl-2'/>
            <button onClick={()=>{
              const newlist = cartlist.filter((obj)=>{
                console.log(search.toLowerCase());
                console.log(obj.info.name.toLowerCase().includes(search.toLowerCase()));
                return obj.info.name.toLowerCase().includes(search.toLowerCase())
              })
              setnewcartlist(newlist);
            }} className='border border-black px-3 bg-gray-300'>search</button>
            <button onClick={()=>{
               const cartlistnew = cartlist.filter((obj)=>{return obj.info.avgRating>=4.5})
                setnewcartlist(cartlistnew)
            }} className='border border-black bg-gray-300 px-3'>Top rated restaurants</button>
        </div>
        {newcartlist.length===0?(<Shimmer />):(
            <div className="card-containor mt-6 flex flex-wrap gap-7 pl-20">
                {newcartlist.map((obj)=>{
                    return <Link to={"/restaurants/"+obj.info.id} key={obj.info.id}>
                      {obj.info.promoted?(<PromotedCards data={obj.info}/>):(<Cards data={obj.info} />)}
                      </Link>  
                })}
            </div>
        )}
        <Footer/>
    </div>
  )
}

export default Body