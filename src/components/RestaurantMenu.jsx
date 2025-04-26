import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MenuCard from "./MenuCard";

function RestaurantMenu() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const proxy = "https://cors-anywhere-m1oe.onrender.com/";
        const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=${id}`;
        const response = await fetch(proxy + apiUrl, { signal: controller.signal });

        if (!response.ok) throw new Error(`Status: ${response.status}`);

        const data = await response.json();
        // console.log(data);
        
        const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards|| [];
        const filtered = tempdata.filter((info) => "title" in info?.card?.card);
        setRestData(filtered);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching restaurant menu:", err);
        }
      }
    }

    fetchData();
    return () => controller.abort();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          to={`/city/bhopal/${id}/search`}
          className="block w-full text-center py-4 bg-yellow-100 hover:bg-yellow-200 rounded-2xl text-xl sm:text-2xl font-semibold shadow-md transition"
        >
          Click To Search Food
        </Link>
      </div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mb-10">
        <button
          className={`px-6 py-2 rounded-xl border shadow-sm font-medium transition-all ${
            selected === "veg"
              ? "bg-green-600 text-white"
              : "bg-white hover:bg-green-100 text-green-700"
          }`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>

        <button
          className={`px-6 py-2 rounded-xl border shadow-sm font-medium transition-all ${
            selected === "nonveg"
              ? "bg-red-600 text-white"
              : "bg-white hover:bg-red-100 text-red-700"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Non-Veg
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
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
