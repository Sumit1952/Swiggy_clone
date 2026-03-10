import React from 'react'
import {dineoutRestaurants}  from "./Utilss/DineData"
import { DineCard } from './DineCard'

export const DineOption = () => {
  return (
    <div className='w-[80%] mx-auto mt-20 mb-20 '>
        <h1 className='text-3xl font-bold'>Discover best Restaurants on DineOut</h1>
        <div className=' flex flex-nowrap overflow-x-auto mt-5 gap-4 '>
            {
                dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData = {RestData}></DineCard>)
            }

        </div>
    </div>
  )
}
