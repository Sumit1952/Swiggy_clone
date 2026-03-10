import { Link, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

export const RestaurantMenu = () => {
  let { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://api.codetabs.com/v1/proxy?quest=";

        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

        const response = await fetch(
          proxyServer + encodeURIComponent(swiggyAPI),
        );

        const data = await response.json();

        const tempData =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const filterData =
          tempData?.filter((items) => "title" in items?.card?.card) || [];

        setRestData(filterData);
      } catch (err) {
        console.log(err);
      }
    }

    if (id) fetchData();
  }, [id]);

  console.log("RestData:", RestData);

  return (
    <div>
      <div className="w-[80%] mx-auto mt-20 mb-20" >
        <Link to ={`/city/delhi/${id}/search`} >
        <p className="w-full text-center py-4 rounded-4xl bg-gray-200">Search for Dishes</p>
        </Link>
      </div >
      <div className="w-[80%] mx-auto mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl text-center ${selected === "veg" ? "bg-green-600" : "bg-gray-300"}`} onClick={() => setSelected(selected === "veg" ? null : "veg")}> Veg </button>
        <button className={`text-2xl py-2 px-4  border rounded-2xl text-center ${selected === "nonveg" ? "bg-red-600" : "bg-gray-300"} `}onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}>Non Veg</button>
      </div>
      <div className="w-[80%] mx-auto">
        {RestData.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card} foodselected={selected}
          />
        ))}
      </div>
    </div>
  );
};
