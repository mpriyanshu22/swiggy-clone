import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RestHeader() {
  const counter = useSelector(state => state.cartslice.count);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 tracking-wide">Swiggy</p>
        </div>

        {/* Cart Link */}
        <div>
          <Link
            to="/Checkout"
            className="text-lg sm:text-xl font-semibold text-gray-700 hover:text-green-600 transition"
          >
            🛒 Cart <span className="ml-1 text-green-700">({counter})</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default RestHeader;
