import { useState } from "react";
import ItemCard from "./ItemCard";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function MenuCard({ menuItems, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  // Handle categories recursively
  if ("categories" in menuItems) {
    return (
      <div className="w-full px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-4 text-gray-600">
          {menuItems?.title}
        </h3>
        <div className="space-y-6">
          {menuItems?.categories?.map((items) => (
            <MenuCard 
              key={items?.title} 
              menuItems={items} 
              foodSelected={foodSelected} 
            />
          ))}
        </div>
      </div>
    );
  }

  // Collapsed state
  if (!isOpen) {
    return (
      <div className="w-full px-2 sm:px-0">
        <div className="flex justify-between items-center w-full py-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            {menuItems?.title}
          </h3>
          <button 
            className="p-1 text-2xl text-gray-600 hover:bg-gray-100 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Collapse menu" : "Expand menu"}
          >
            {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </button>
        </div>
        <div className="h-[2px] bg-orange-300 w-full"></div>
      </div>
    );
  }

  // Filter items based on food selection
  const filteredItems = menuItems?.itemCards?.filter((food) => {
    if (foodSelected === 'veg') return 'isVeg' in food?.card?.info;
    if (foodSelected === 'nonveg') return !('isVeg' in food?.card?.info);
    return true;
  });

  // Don't render if no items match the filter
  if (filteredItems?.length === 0) return null;

  return (
    <div className="w-full px-2 sm:px-0">
      <div className="flex justify-between items-center w-full py-3">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {menuItems?.title}
        </h3>
        <button 
          className="p-1 text-2xl text-gray-600 hover:bg-gray-100 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse menu" : "Expand menu"}
        >
          {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </button>
      </div>

      <div className="space-y-6">
        {filteredItems?.map((items) => (
          <ItemCard 
            key={items?.card?.info?.id} 
            restvalue={items?.card?.info} 
          />
        ))}
      </div>
      
      <div className="h-[2px] bg-orange-300 w-full my-4"></div>
    </div>
  );
}

export default MenuCard;