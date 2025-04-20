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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 pb-6">
        {/* Left Section: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 line-clamp-2">
            {restvalue?.name}
          </h2>
          
          <p className="text-base sm:text-lg text-gray-700 mb-2">
            ₹{("defaultPrice" in restvalue ? restvalue?.defaultPrice : restvalue?.price) / 100}
          </p>
          
          {restvalue?.ratings?.aggregatedRating?.rating && (
            <div className="flex items-center gap-1 text-sm text-green-700 font-medium mb-2">
              <span>⭐ {restvalue?.ratings?.aggregatedRating?.rating}</span>
              <span className="text-gray-500 text-xs">
                ({restvalue?.ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </div>
          )}
          
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
            {restvalue?.description}
          </p>
        </div>

        {/* Right Section: Image + Action Buttons */}
        <div className="relative w-full sm:w-32 md:w-40 aspect-square">
          <div className="h-full w-full">
            {restvalue?.imageId ? (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${restvalue?.imageId}`}
                alt={restvalue?.name}
                className="w-full h-full object-cover rounded-lg border shadow-sm"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">No image</span>
              </div>
            )}

            {/* Add/Quantity Controls */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5">
              {count === 0 ? (
                <button
                  className="w-full bg-white text-green-600 font-medium border border-green-600 rounded-full px-4 py-1.5 shadow-md hover:bg-green-50 active:scale-95 transition-all text-sm sm:text-base"
                  onClick={handleAddItems}
                >
                  ADD
                </button>
              ) : (
                <div className="flex items-center justify-between bg-white text-green-600 font-medium border border-green-600 rounded-full px-3 py-1 shadow-md">
                  <button 
                    className="w-6 h-6 flex items-center justify-center text-lg active:bg-green-100 rounded-full"
                    onClick={handleDecrementItems}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-sm sm:text-base">{count}</span>
                  <button 
                    className="w-6 h-6 flex items-center justify-center text-lg active:bg-green-100 rounded-full"
                    onClick={handleIncrementItems}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <hr className="border-t border-gray-200 my-2 sm:my-4" />
    </div>
  );
}

export default ItemCard;