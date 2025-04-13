import { useState } from "react";
import ItemCard from "./ItemCard"; 

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
function MenuCard({menuItems,foodSelected}){
const [isopen,setisopen]=useState(true);

  if("categories" in menuItems){
    return (
      <div className="w-full">
       <p className="text-2xl font-bold mt-2 mb-6 text-gray-400">
    {menuItems?.title}
      </p>
   <div>
    {menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>)}
   </div>
      </div>
    )
  }

if(!isopen){
return(
  <div className="w-full">
  <div className="flex justify-between w-full">
<p className="text-2xl font-bold mb-4">
  {menuItems?.title}
</p>
<button className="text-3xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?<IoIosArrowDropup />:<IoIosArrowDropdown />}</button>
</div>
<div className="h-2 bg-orange-300 mt-3 mb-3"></div>
</div>
)
}

if(foodSelected=='veg'){

return (
  <div className="w-full ">
<div className="flex justify-between w-full">
<p className="text-2xl font-bold mb-4">
  {menuItems?.title}
</p>
<button className="text-3xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?<IoIosArrowDropup />:<IoIosArrowDropdown />}</button>
</div>
  <div>
    {menuItems?.itemCards?.filter((food)=>'isVeg' in food?.card?.info).map((items)=><ItemCard key={items?.card?.info?.id} restvalue={items?.card?.info}></ItemCard>)}
  </div>
</div>
)

}

if(foodSelected==='nonveg'){

return (
  <div className="w-full ">
<div className="flex justify-between w-full">
<p className="text-2xl font-bold mb-4">
  {menuItems?.title}
</p>
<button className="text-3xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?<IoIosArrowDropup />:<IoIosArrowDropdown />}</button>
</div>
  <div>
    {menuItems?.itemCards?.filter((food)=>!('isVeg' in food?.card?.info)).map((items)=><ItemCard key={items?.card?.info?.id} restvalue={items?.card?.info}></ItemCard>)}
  </div>
</div>

)
}

  return (
    

<div className="w-full ">
<div className="flex justify-between w-full">
<p className="text-2xl font-bold mb-4">
  {menuItems?.title}
</p>
<button className="text-3xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?<IoIosArrowDropup />:<IoIosArrowDropdown />}</button>
</div>
  <div>
    {menuItems?.itemCards?.map((items)=><ItemCard key={items?.card?.info?.id} restvalue={items?.card?.info}></ItemCard>)}
  </div>
</div>

  )
}

export default MenuCard;