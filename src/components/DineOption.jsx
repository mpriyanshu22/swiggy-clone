import {dineoutRestaurants} from "../Utils/DineData"
import DineCard from "./DineCard";
function DineOption(){

  return <div className="w-[80%] mx-auto mt-20 mb-20">
    <p className="text-3xl font-bold">Discover best resturents on Dineout</p>
    <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">{
      dineoutRestaurants.map((RestData,index)=><DineCard key={index} RestData={RestData}></DineCard>)
      }
    </div>
  </div>
}
export default DineOption;