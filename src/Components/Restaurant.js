import React, { useEffect, useState } from 'react'
import { RestCard } from './RestCard';
import Shimmer from './Shimmer';

export const Restaurant = () => {

  const [RestData, setRestData] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {
        const proxyServer = "https://api.codetabs.com/v1/proxy?quest=";
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"

        const response = await fetch(proxyServer + encodeURIComponent(swiggyAPI));
        const data = await response.json();

        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestData(restaurants);

      } catch (err) {
        console.log(err);
      }
    }

    fetchData();

  }, []);

  if (RestData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='flex flex-wrap w-[80%] mx-auto mt-20 gap-5'>
      {RestData.map((restInfo) => (
        <RestCard
          key={restInfo?.info?.id}
          restInfo={restInfo}
        />
      ))}
    </div>
  );
};