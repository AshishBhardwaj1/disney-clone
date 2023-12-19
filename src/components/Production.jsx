import React from 'react'

import disney from "../assets/Images/disney.png"
import marvel from "../assets/Images/marvel.png"
import nationalG from "../assets/Images/nationalG.png"
import pixer from "../assets/Images/pixar.png"
import starwar from "../assets/Images/starwar.png"
import starwarVid from "../assets/Videos/star-wars.mp4" 
import disneyVid from "../assets/Videos/disney.mp4" 
import marvalVid from "../assets/Videos/marvel.mp4" 
import NationalGeoVid from "../assets/Videos/national-geographic.mp4" 
import pixarVid from "../assets/Videos/pixar.mp4" 

const Production = () => {
    const ProductionHouseList = [
        {
            id:1,
            img: disney,
            vid: disneyVid
        },
        {
            id:2,
            img: starwar,
            vid: starwarVid
        },
        {
            id:3,
            img: pixer,
            vid: pixarVid
        },
        {
            id:4,
            img: marvel,
            vid: marvalVid
        },
        {
            id:5,
            img: nationalG,
            vid: NationalGeoVid
        },
    ]
  return (
    <div className='flex gap-4 p-2 px-16 '>
{
    ProductionHouseList.map((item,id)=>(

<div key={item.id} className='border-[2px] border-gray rounded-lg hover:scale-110 cursor-pointer relative'> 
    <img src={item.img} className='w-full z-[1] '/>
    <video className='absolute z-0 top-0 opacity-0 hover:opacity-50' src={item.vid} autoPlay loop playsInline />
</div>

    ))
}
    </div>
  )
}

export default Production