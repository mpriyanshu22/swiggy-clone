import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

function Restaurant() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxybar = "https://cors-anywhere-m1oe.onrender.com/";
        const swiggyApi =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true";

        const response = await fetch(proxybar + swiggyApi);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        if (restaurants.length === 0) {
          console.warn("No restaurants found in API response.");
        }

        setRestData(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (restData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 mt-20 ">
      {restData.map((restInfo) => (
        <RestCard key={restInfo.info.id} restInfo={restInfo} />
      ))}
    </div>
  );
}

export default Restaurant;
