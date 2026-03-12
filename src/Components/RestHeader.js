import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

export const RestHeader = () => {

 const counter = useSelector(state=> state.cartslice.count)

  return (
    <div className='container w-[95%] sm:w-[90%] md:w-[80%] mx-auto py-3 md:py-4 px-4 md:px-8 bg-gray-200 text-xl sm:text-3xl md:text-5xl flex justify-between items-center'>
        <div>
            <p className='text-orange-600 font-bold'>Swiggy</p>
        </div>

        <div>
          <Link to="/Checkout">
            <p>Cart {`(${counter})`}</p>
          </Link>
        </div>

    </div>
  )
}