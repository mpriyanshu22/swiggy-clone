import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

function ItemCard({ restvalue }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);
  const element = items.find((item) => item.id === restvalue.id);
  const count = element ? element.quantity : 0;

  const handleAddItems = () => dispatch(addItems(restvalue));
  const handleIncrementItems = () => dispatch(IncrementItems(restvalue));
  const handleDecrementItems = () => dispatch(DecrementItems(restvalue));

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
        {/* Left Section: Text */}
        <div className="sm:w-[70%] w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">{restvalue?.name}</h2>
          <p className="text-lg text-gray-700 mb-2">
            ₹{("defaultPrice" in restvalue ? restvalue?.defaultPrice : restvalue?.price) / 100}
          </p>
          {restvalue?.ratings?.aggregatedRating?.rating && (
            <div className="text-sm text-green-700 font-medium mb-1">
              ⭐ {restvalue?.ratings?.aggregatedRating?.rating} ({restvalue?.ratings?.aggregatedRating?.ratingCountV2})
            </div>
          )}
          <p className="text-sm text-gray-600 leading-relaxed">{restvalue?.description}</p>
        </div>

        {/* Right Section: Image + Button */}
        <div className="sm:w-[25%] w-full relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${restvalue?.imageId}`}
            alt={restvalue?.name}
            className="w-full h-36 object-cover rounded-xl border shadow-md"
          />

          {/* Add / Counter */}
          {count === 0 ? (
            <button
              className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] bg-white text-green-600 font-bold border border-green-600 rounded-full px-6 py-1 shadow hover:bg-green-50 transition text-base w-40"
              onClick={handleAddItems}
            >
              ADD
            </button>
          ) : (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] bg-white text-green-600 font-bold border border-green-600 rounded-full px-4 py-1 shadow flex items-center gap-4 text-base w-40 justify-around">
              <button className="text-xl" onClick={handleDecrementItems}>−</button>
              <span>{count}</span>
              <button className="text-xl" onClick={handleIncrementItems}>+</button>
            </div>
          )}
        </div>
      </div>

      <hr className="border-t border-gray-300 mb-8" />
    </>
  );
}

export default ItemCard;
