import { imageGridCards } from "../Utils/foodData";
import FoodCard from "./FoodCard";

function FoodOption() {
  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-gray-800">
        Your Favorite Dine
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 max-w-7xl mx-auto">
        {imageGridCards.map((foodData, index) => (
          <FoodCard key={index} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}

export default FoodOption;
