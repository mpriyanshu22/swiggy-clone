import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#ff5200] font-serif">
      {/* Top Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4 py-6 space-y-4 md:space-y-0">
        <img
          className="w-36 h-10"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="Swiggy"
        />
        <div className="text-white text-sm md:text-base font-bold flex flex-wrap md:flex-nowrap gap-4 md:gap-6 items-center justify-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/" className="hover:underline">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy" className="hover:underline">
            Partner with Us
          </a>
          <a
            className="border border-white py-2 px-4 rounded-xl hover:bg-white hover:text-[#ff5200] transition"
            target="_blank"
            href=""
          >
            Get The App
          </a>
          <a
            className="border bg-black py-2 px-4 rounded-xl hover:bg-white hover:text-black transition"
            target="_blank"
            href=""
          >
            Sign in
          </a>
        </div>
      </div>

      {/* Banner Section */}
      <div className="pt-10 pb-8 relative overflow-hidden">
        {/* Background Images */}
        <img
          className="hidden sm:block h-72 w-40 absolute top-0 left-0 object-cover"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
        <img
          className="hidden sm:block h-72 w-40 absolute top-0 right-0 object-cover"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        {/* Main Heading */}
        <div className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-4xl mx-auto text-center font-bold px-4">
          Order Food & Groceries. Discover the Best Restaurants. Swiggy it!
        </div>

        {/* Search Inputs */}
        <div className="mt-10 flex flex-col lg:flex-row gap-4 max-w-5xl mx-auto px-4 justify-center">
          <input
            className="bg-white w-full lg:w-1/3 border rounded-xl text-center py-3 px-4"
            placeholder="Enter your delivery location"
          />
          <input
            className="bg-white w-full lg:w-2/3 border rounded-xl px-4 py-3"
            placeholder="Search for restaurant, item and more"
          />
        </div>

        {/* Navigation Icons */}
        <div className="mt-10 px-4 flex justify-center">
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="w-80 h-75">
              <Link to="/restaurant">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                  alt="Restaurants"
                />
              </Link>
            </div>
            <div className="w-80 h-75">
              <a href="https://www.swiggy.com/dineout" target="_blank">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                  alt="Dineout"
                />
              </a>
            </div>
            <div className="w-80 h-75">
              <a href="https://www.swiggy.com/genie" target="_blank">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/30/1ba3942e-67ff-4100-8f2e-7bcd92a0cc94_Genie3BU.png"
                  alt="Genie"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
