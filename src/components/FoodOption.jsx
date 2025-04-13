import { imageGridCards } from "../Utils/foodData";
import FoodCard from "./FoodCard";
function FoodOption(){
  return <>
<div className="mt-20">
<h1 className="font-bold text-center text-4xl">Your Favorite Dine</h1>
  <div className="w-[80%] container mx-auto flex flex-wrap mt-20">
          {
            imageGridCards.map((foodData,index)=><FoodCard key={index} foodData={foodData}></FoodCard>)
          }
  </div>
</div>
  </>
}
export default FoodOption;