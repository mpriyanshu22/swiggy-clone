import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

function Restaurant() {
  const [restData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const proxyUrl = "https://cors-anywhere-m1oe.onrender.com/";
        const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true";
        
        const response = await fetch(proxyUrl + swiggyApi);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        const restaurants = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        if (restaurants.length === 0) {
          console.warn("No restaurants found - check API structure");
          setError("No restaurants available at this time");
        }

        setRestData(restaurants);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load restaurants. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-lg text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {restData.map((restInfo) => (
          <RestCard key={restInfo.info.id} restInfo={restInfo} />
        ))}
      </div>
    </div>
  );
}

export default Restaurant;