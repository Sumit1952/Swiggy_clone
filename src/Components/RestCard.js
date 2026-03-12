import React from "react";
import { Link } from "react-router";

export const RestCard = ({ restInfo }) => {
  return (
    <Link to={"/city/delhi/" + restInfo?.info?.id}>

      <div className="w-[260px] hover:scale-95 transition duration-200">

        {/* Image */}
        <div className="relative">
          <img
            className="w-[260px] h-[170px] object-cover rounded-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restInfo?.info?.cloudinaryImageId
            }
          />

          <div className="absolute bottom-0 left-0 right-0 h-14 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent"></div>

          <p className="absolute bottom-2 left-3 text-white font-bold text-sm">
            20% OFF UPTO ₹50
          </p>
        </div>

        {/* Details */}
        <div className="mt-2">

          <h2 className="font-bold text-lg">
            {restInfo?.info?.name}
          </h2>

          <div className="flex gap-2 text-sm font-semibold">
            <span>⭐ {restInfo?.info?.avgRating}</span>
            <span>{restInfo?.info?.sla?.slaString}</span>
          </div>

          <p className="text-gray-500 text-sm">
            {restInfo?.info?.cuisines?.join(", ")}
          </p>

          <p className="text-gray-500 text-sm">
            {restInfo?.info?.areaName}
          </p>

        </div>

      </div>

    </Link>
  );
};