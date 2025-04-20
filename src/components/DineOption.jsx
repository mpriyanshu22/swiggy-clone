import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";

function DineOption() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mt-16 mb-20">
      <p className="text-2xl sm:text-3xl font-bold text-gray-800">
        Discover Best Restaurants on Dineout
      </p>

      <div className="flex flex-nowrap overflow-x-auto gap-4 mt-6 pb-2 scroll-smooth">
        {dineoutRestaurants.map((RestData, index) => (
          <DineCard key={index} RestData={RestData} />
        ))}
      </div>
    </div>
  );
}

export default DineOption;
