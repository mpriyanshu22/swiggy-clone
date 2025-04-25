import { useState } from "react";
import ItemCard from "./ItemCard";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function MenuCard({ menuItems, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  // Recursive case: if categories exist
  if ("categories" in menuItems) {
    return (
      <div className="w-full px-3 sm:px-0">
        <h3 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-gray-700">
          {menuItems?.title}
        </h3>
        <div className="space-y-6">
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected} />
          ))}
        </div>
      </div>
    );
  }

  const filteredItems = menuItems?.itemCards?.filter((food) => {
    if (foodSelected === "veg") return food?.card?.info?.isVeg === 1;
    if (foodSelected === "nonveg") return !food?.card?.info?.isVeg;
    return true;
  });

  if (!filteredItems || filteredItems.length === 0) return null;

  return (
    <div className="w-full px-3 sm:px-0">
      <div className="flex justify-between items-center py-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          {menuItems?.title}
        </h3>
        <button
          className="text-2xl text-gray-600 hover:bg-gray-200 rounded-full p-1 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse menu" : "Expand menu"}
        >
          {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-6">
          {filteredItems.map((items) => (
            <ItemCard key={items?.card?.info?.id} restvalue={items?.card?.info} />
          ))}
        </div>
      )}

      <div className="h-[2px] bg-orange-300 w-full my-4"></div>
    </div>
  );
}

export default MenuCard;
