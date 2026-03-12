import { useState } from "react";
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({ restData }) {

  const dispatch = useDispatch();

  const items = useSelector(state=> state.cartslice.items)

  const element = items.find(item=>item.id===restData.id)
  const count = element ? element.quantity : 0;

  function handleAdditems(){
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){
      dispatch(IncrementItems(restData))
  }

  function handleDecrementitems(){
    dispatch(DecrementItems(restData))
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row w-full justify-between mb-2 pb-2 gap-4">

        <div className="w-full sm:w-[70%]">
          <p className="text-lg md:text-2xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>

          <p className="text-base md:text-xl">
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>

          <span className="text-green-700 text-sm md:text-base">
            {restData?.ratings?.aggregatedRating?.rating}
          </span>

          <span className="text-sm md:text-base">
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>

          <p className="text-sm md:text-base">
            {restData?.description}
          </p>
        </div>


        <div className="w-full sm:w-[20%] relative h-36 sm:h-42 flex justify-center">

          <img
            className="w-40 sm:w-52 md:w-60 h-28 sm:h-32 md:h-36 object-cover rounded-3xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData.imageId
            }
          ></img>

          {count === 0 ? (
            <button
            className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-xl text-lg md:text-2xl text-green-600 px-4 md:px-6 py-1 md:py-2 shadow-md border border-white bg-white"
            onClick={()=>handleAdditems()}
            >
              ADD
            </button>
          ) : (
            <div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-3 text-xl md:text-4xl text-green-600 px-4 md:px-6 py-1 md:py-2 shadow-md border border-white bg-white rounded-2xl"
            >
              <button onClick={() => handleDecrementitems()}>-</button>
              <span>{count}</span>
              <button onClick={() => handleIncrementItems()}>+</button>
            </div>
          )}

        </div>

      </div>

      <hr className="mb-6 mt-2"></hr>
    </>
  );
}