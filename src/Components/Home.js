import React from 'react'
import Header from './Header'
import FoodOption from './FoodOption'
import GroceryOption from './GroceryOption'
import { DineOption } from './DineOption'
export const Home = () => {
  return (
    <>
          <Header></Header>
          <FoodOption></FoodOption>
          <GroceryOption></GroceryOption>
          <DineOption></DineOption>
    </>
  )
}
