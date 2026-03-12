import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const SearchFood = () => {

  const { id } = useParams();

  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {

      try {

        const proxyServer = "https://api.codetabs.com/v1/proxy?quest=";

        const swiggyAPI =
          `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

        const response = await fetch(proxyServer + encodeURIComponent(swiggyAPI));
        const data = await response.json();

        const tempData =
          data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const filterData =
          tempData.filter((items) => "itemCards" in items?.card?.card);

        const items =
          filterData?.[0]?.card?.card?.itemCards?.map((i) => i?.card?.info) || [];

        setRestData(items);

      } catch (error) {
        console.log("API Error:", error);
      }

      setLoading(false);
    }

    fetchData();

  }, [id]);


  // Search Logic
  const searchItems = RestData.filter((item) =>
    item?.name?.toLowerCase().includes(food.toLowerCase())
  );


  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20">

      {/* Search Input */}
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        className="w-full pl-6 md:pl-10 py-3 md:py-4 text-lg md:text-xl bg-gray-200 rounded-2xl border outline-none"
        placeholder="Search food..."
      />

      {/* Loading */}
      {loading && (
        <p className="mt-6 text-center text-gray-500">
          Loading menu...
        </p>
      )}

      {/* Search Results */}
      <div className="mt-6 md:mt-10 space-y-4 md:space-y-5">

        {searchItems.map((item) => {

          const price =
            (item?.price || item?.defaultPrice || 0) / 100;

          return (

            <div
              key={item?.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-100 p-4 md:p-5 rounded-xl shadow gap-2"
            >

              <h2 className="text-base md:text-xl font-semibold">
                {item?.name}
              </h2>

              <p className="text-green-600 font-bold text-sm md:text-lg">
                ₹{price}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
};