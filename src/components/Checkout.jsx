import { useSelector } from "react-redux";

function Checkout() {
  const items = useSelector(state => state.cartslice.items);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + ((item.price ?? item.defaultPrice) * item.quantity),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Your Cart</h2>

        {items.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {items.map((item) => {
              const itemPrice = (item.price ?? item.defaultPrice) / 100;
              const itemTotal = itemPrice * item.quantity;

              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <div className="text-xl font-medium text-gray-800">{item.name}</div>
                    <div className="text-gray-500 text-sm">₹{itemPrice.toFixed(2)} x {item.quantity}</div>
                  </div>
                  <div className="text-lg font-semibold text-green-600">₹{itemTotal.toFixed(2)}</div>
                </div>
              );
            })}

            <div className="pt-6 border-t text-right text-xl text-gray-700 font-semibold">
              Total Items: <span className="text-green-600">{totalItems}</span>
            </div>

            <div className="text-right text-2xl text-green-700 font-bold mt-2">
              Total Amount: ₹{(totalPrice / 100).toFixed(2)}
            </div>

            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-3 rounded-xl shadow-md transition">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
