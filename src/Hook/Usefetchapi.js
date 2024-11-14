import React, { useEffect, useState } from "react";

export default function Usefetchapi(url,initialstate) {
    
  const [responsedata,setresponsedata]=useState(initialstate)
    
    useEffect(()=>{
       handlefetch()
    },[])
  
   const handlefetch=async()=>{
        try{
        let res = await fetch(url)
        let data = await res.json()
        setresponsedata(data)
        }catch(err){
            console.log("error", err);
        }

    }


  return{responsedata}
    
}
