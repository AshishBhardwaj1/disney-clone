import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


const img_url = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movies, setMovies] =useState([])
 useEffect(()=>{
getTreandingMovie()
 },[])
 const getTreandingMovie =()=>{
  GlobalApi.getTreandingVids.then(resp=>{
    console.log(resp);
    setMovies(resp.data.results)
  })
}

const screenWidth =window.innerWidth;
const MovieRef =useRef();
 const slideLeft = (ele)=>{
ele.scrollLeft-=screenWidth-100;
 }
 const slideRight = (ele)=>{
  ele.scrollLeft+=screenWidth-100;
   }
  return (
    <div>
      <div>
<HiChevronLeft className= ' hidden md:block text-white text-[30px] absolute m-8 mt-[150px] cursor-pointer' onClick={()=>slideLeft(MovieRef.current)}/>
      <div className='flex overflow-x-auto scrollbar-hide px-16 scroll-smooth' ref={MovieRef}>

{
  movies.map((movie,i)=>(
    
    <img src= {img_url+movie.backdrop_path} className='min-w-full h-[300px] object-cover w-full p-4 object-left-top m-2 rounded-lg hover:border-[4px] border-gray-300'/>
    ))
}
        </div> 
    <HiChevronRight className= 'hidden md:block text-white text-[30px] absolute m-8 mt-[-150px] cursor-pointer right-3' onClick={()=>slideRight(MovieRef.current)}/>
    </div>

      </div>
  )
}

export default Slider