import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
function Restaurant() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
    const proxybar="https://cors-anywhere.herokuapp.com/";
    const swiggyApi ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true";
        
        const response = await fetch(proxybar+swiggyApi);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Await the JSON response
        console.log("API Response:", data); // Log full response

        // Safely extract data using optional chaining (?.)
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

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

  // console.log("Restaurant Data:", restData);
if(restData.length==0){
  return <Shimmer></Shimmer>
}
  return <>
  <div className="flex flex-wrap w-[90%] mx-auto mt-20 ml-50 gap-10">
      {
        restData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
      }
  </div>
  </>;
}

export default Restaurant;
