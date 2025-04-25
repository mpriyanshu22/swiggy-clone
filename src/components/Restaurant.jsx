import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const proxy = "https://cors-anywhere-m1oe.onrender.com/";
        const swiggyApi =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true";

        const response = await fetch(proxy + swiggyApi, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`Status: ${response.status}`);

        const data = await response.json();
        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestData(restaurants);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      }
    }

    fetchData();
    return () => controller.abort();
  }, []);

  if (restData.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap justify-center gap-6 px-2 sm:px-4 mt-10 md:mt-20">
      {restData.map((restInfo) => (
        <RestCard key={restInfo.info.id} restInfo={restInfo} />
      ))}
    </div>
  );
};

export default Restaurant;
