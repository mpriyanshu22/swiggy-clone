import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

function Search2() {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartslice.items);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxybar = "https://cors-anywhere-m1oe.onrender.com/";
        const swiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=${id}`;
        const response = await fetch(proxybar + swiggyApi);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const foodCards = tempdata?.filter((info) => info?.card?.card?.itemCards);
        const items = foodCards?.flatMap((card) =>
          card.card.card.itemCards.map((item) => item.card.info)
        );
        setFoodItems(items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  const filteredItems = foodItems.filter((item) =>
    item?.name?.toLowerCase().includes(food.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4 sm:px-6">
      <input
        type="text"
        placeholder="Search for food"
        className="w-full pl-10 py-3 sm:py-4 bg-gray-200 rounded-2xl text-base sm:text-xl"
        onChange={(e) => setFood(e.target.value)}
        value={food}
      />

      <div className="mt-10 space-y-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const cartItem = cartItems.find((cart) => cart.id === item.id);
            const count = cartItem ? cartItem.quantity : 0;

            return (
              <div
                key={item.id}
                className="p-4 bg-white shadow-md rounded-xl flex flex-col sm:flex-row justify-between items-center sm:items-start"
              >
                {/* Left: Info */}
                <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0 sm:pr-6">
                  <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">
                    ₹{(item.price ?? item.defaultPrice) / 100}
                  </p>
                </div>

                {/* Right: Image & Controls */}
                <div className="flex flex-col items-center gap-2 w-20 sm:w-24">
                  {item.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                    />
                  )}

                  {count === 0 ? (
                    <button
                      className="text-sm font-bold text-white px-2 py-1 bg-green-600 rounded-lg shadow w-full"
                      onClick={() => dispatch(addItems(item))}
                    >
                      ADD
                    </button>
                  ) : (
                    <div className="bg-green-100 text-green-900 font-semibold text-sm rounded-lg flex justify-around items-center w-full py-1">
                      <button onClick={() => dispatch(DecrementItems(item))}>-</button>
                      <span>{count}</span>
                      <button onClick={() => dispatch(IncrementItems(item))}>+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600 text-xl mt-4">
            No matching items found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search2;
