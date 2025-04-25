import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
import R from '../assets/R.jpg'

function SearchFood() {
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
        const foodCards = tempdata?.filter(info => info?.card?.card?.itemCards);
        const items = foodCards?.flatMap(card =>
          card.card.card.itemCards.map(item => item.card.info)
        );
        setFoodItems(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  const filteredItems = foodItems?.filter(item =>
    item.name.toLowerCase().includes(food.toLowerCase())
  );

  return (
    <div className="w-[90%] max-w-4xl mx-auto mt-20 px-2 sm:px-4">
      <input
        type="text"
        placeholder="Search for food..."
        className="w-full px-6 py-4 bg-gray-100 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        onChange={(e) => setFood(e.target.value)}
        value={food}
      />

      <div className="mt-10 space-y-6">
        {filteredItems?.length > 0 ? (
          filteredItems.map((item, index) => {
            const cartItem = cartItems.find(ci => ci.id === item.id);
            const price = (item.price ?? item.defaultPrice) / 100;

            return (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:h-50 w-full"
              >
                {/* Left content */}
                <div className="flex-4 text-center sm:text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600 text-lg mt-1">₹{price}</p>
                </div>

                {/* Right - Image with overlay cart controls */}
                <div className="relative flex-1 w-full sm:w-auto">
                  {item.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}` || `${R}`}
                      alt={item?.name}
                      className="w-full max-w-[160px] h-36 object-cover rounded-xl shadow-md mx-auto sm:mx-0"
                    />
                  )}

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    {cartItem ? (
                      <div className="flex items-center bg-white border border-green-500 text-green-600 font-medium px-4 py-1 rounded-full shadow-sm h-10 w-36 justify-around">
                        <button
                          onClick={() => dispatch(DecrementItems(item))}
                          className="text-xl px-2 hover:text-red-500"
                        >
                          −
                        </button>
                        <span className="px-2">{cartItem.quantity}</span>
                        <button
                          onClick={() => dispatch(IncrementItems(item))}
                          className="text-xl px-2 hover:text-green-700"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => dispatch(addItems(item))}
                        className="bg-white border border-green-500 text-green-600 font-medium px-5 py-1 rounded-full shadow hover:bg-green-50 transition-all h-10 w-36"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No matching items found.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchFood;
