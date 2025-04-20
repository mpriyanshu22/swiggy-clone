import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RestHeader() {
  const counter = useSelector(state => state.cartslice.count);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
          <p className="text-2xl sm:text-3xl font-extrabold text-orange-500 tracking-wide">
            Swiggy
          </p>
        </div>

        {/* Cart Link */}
        <div className="w-full sm:w-auto text-center sm:text-right">
          <Link
            to="/Checkout"
            className="inline-block text-base sm:text-lg font-semibold text-gray-700 hover:text-green-600 transition"
          >
            🛒 Cart <span className="ml-1 text-green-700">({counter})</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default RestHeader;
