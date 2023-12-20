import React from 'react'
import logo from "../assets/Images/logo.png"
import {HiHome,HiStar,HiPlayCircle,HiMagnifyingGlass,HiTv} from "react-icons/hi2"
import { HiPlus } from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import Profile from "../assets/userprofile.avif"
const Header = () => {
const menu = [
  {
    name: "HOME",
    icon:HiHome
  },

  {
    name: "MOVIES",
    icon:HiPlayCircle
  },
  {
    name: "SEARCH",
    icon:HiMagnifyingGlass},
  {
    name: "WATCH LIST",
    icon:HiPlus
  },
  {
    name: "ORIGINALS",
    icon:HiStar
  },
  {
    name: "SERIES",
    icon:HiTv
  },
]

  return (
    <div className='flex items-center gap text-white'>
      <div className='flex justify-between items-center gap-8 p-6'>

<img src={logo}  className='w-[100px] md:w-[120px] object-cover' />

{
menu.map((item)=>(
  <HeaderItem name={item.name} Icon={item.icon}/>
))}
      </div >
      <img src= {Profile} alt=""  className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header