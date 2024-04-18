import React, { useEffect, useState } from 'react'

function useOnlineSatatus() {
    const [onlinestaus,setonlinestatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
                setonlinestatus(false);
        })
        window.addEventListener('online', () => {
            setonlinestatus(true);
        })
    },[])
    return  onlinestaus;
}

export default useOnlineSatatus