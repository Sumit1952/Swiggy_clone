import React from 'react'
import { Link } from 'react-router'

export const RestCard = ({restInfo}) => {
  return (
    <Link to ={"/city/delhi/"+restInfo?.info?.id}>
    <div className='max-w-[280px] mt-2 transform transition duration-200 hover:scale-95'>
    <img className='h-45 w-70 object-cover rounded-xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
    <div className='w-[95%] mx-auto mt-3'>
    <div className='font-bold text-2xl  '>{restInfo?.info?.name}</div>
    <div className='flex gap-2'>
    
    <span className='text-lg'>⭐{restInfo?.info?.avgRating}</span>
    <span className='text-lg font-semibold'>{restInfo?.info?.sla?.slaString}</span>
    </div>
    <div className='text-gray-500  text-xl mt-1 overflow-hidden h-7'>{restInfo?.info?.cuisines?.join(", ")}</div>
    <div>{restInfo?.info?.areaName}</div>
    </div>
    </div>
    </Link>
  )
}
