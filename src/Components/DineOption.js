import React from 'react'
import {dineoutRestaurants}  from "./Utilss/DineData"
import { DineCard } from './DineCard'

export const DineOption = () => {
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 mb-10 md:mb-20'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>
          Discover best Restaurants on DineOut
        </h1>

        <div className='flex flex-nowrap overflow-x-auto mt-4 md:mt-5 gap-3 md:gap-4'>
            {
                dineoutRestaurants.map((RestData)=>(
                  <DineCard 
                    key={RestData?.info?.id} 
                    RestData={RestData}
                  ></DineCard>
                ))
            }

        </div>
    </div>
  )
}