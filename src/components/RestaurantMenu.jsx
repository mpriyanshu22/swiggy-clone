import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MenuCard from "./MenuCard";

function RestaurantMenu() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [restData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const proxyUrl = "https://cors-anywhere-m1oe.onrender.com/";
        const swiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=${id}`;

        const response = await fetch(proxyUrl + swiggyApi);
        if (!response.ok) {
          throw new Error(`Failed to load menu (Status: ${response.status})`);
        }

        const data = await response.json();
        const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        
        const filterdata = tempdata.filter(
          (info) => "title" in info?.card?.card
        );

        if (filterdata.length === 0) {
          setError("No menu items available");
        }

        setRestData(filterdata);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load menu. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-200 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 px-4 flex flex-col items-center justify-center">
        <div className="max-w-md text-center p-6 bg-white rounded-xl shadow-md">
          <p className="text-lg text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-medium transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6">
      {/* Search Link Box - Mobile First */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <Link
          to={`/city/bhopal/${id}/search`}
          className="block w-full text-center py-3 sm:py-4 bg-yellow-100 hover:bg-yellow-200 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-semibold shadow-sm sm:shadow-md transition active:scale-95"
        >
          🔍 Search Food Items
        </Link>
      </div>

      {/* Veg/Non-Veg Filter - Responsive Buttons */}
      <div className="max-w-4xl mx-auto flex justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
        <button
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border shadow-xs sm:shadow-sm font-medium text-sm sm:text-base transition-all ${
            selected === "veg"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white hover:bg-green-50 text-green-700 border-green-300"
          }`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          🥦 Veg Only
        </button>
        <button
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border shadow-xs sm:shadow-sm font-medium text-sm sm:text-base transition-all ${
            selected === "nonveg"
              ? "bg-red-600 text-white border-red-600"
              : "bg-white hover:bg-red-50 text-red-700 border-red-300"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          🍗 Non-Veg Only
        </button>
      </div>

      {/* Menu Items with Responsive Spacing */}
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {restData.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodSelected={selected}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;