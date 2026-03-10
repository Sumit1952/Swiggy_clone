import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const SearchFood = () => {

 const { id } = useParams();

 const [food, setFood] = useState("");
 const [RestData, setRestData] = useState([]);

 useEffect(() => {

    async function fetchData() {

       const proxyServer = "https://api.codetabs.com/v1/proxy?quest=";
       const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

       const response = await fetch(proxyServer + swiggyAPI);
       const data = await response.json();

       const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

       const filterData = tempData?.filter(
         (items) => "itemCards" in items?.card?.card
       ) || [];

       const items =
         filterData[0]?.card?.card?.itemCards?.map((i) => i.card.info) || [];

       setRestData(items);
    }

    fetchData();

 }, [id]);



 const searchItems = RestData.filter((item) =>
    item.name.toLowerCase().includes(food.toLowerCase())
 );



 return (
    <div className="w-[80%] mx-auto mt-20">

       <input
         className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
         placeholder="Search food..."
         onChange={(e) => setFood(e.target.value)}
       />

       <div className="mt-10 space-y-5">

         {searchItems.map((item) => (

           <div
             key={item.id}
             className="flex justify-between bg-gray-100 p-5 rounded-xl shadow"
           >
             <h2 className="text-xl font-semibold">{item.name}</h2>

             <p className="text-green-600 font-bold">
               ₹{item.price / 100 || item.defaultPrice / 100}
             </p>

           </div>

         ))}

       </div>

    </div>
 );
};