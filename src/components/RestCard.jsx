import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/bhopal/" + restInfo?.info?.id}>
      <div className="w-72 h-[320px] bg-white rounded-xl shadow-md overflow-hidden transform transition duration-100 hover:scale-95 flex flex-col">
        {/* Image */}
        <img
          className="w-full h-40 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
          alt={restInfo.info.name}
        />

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-3">
          {/* Restaurant Name */}
          <h3 className="font-bold text-lg truncate">
            {restInfo.info.name}
          </h3>

          {/* Rating & Time */}
          <div className="flex gap-2 items-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="w-4 h-4"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01z" />
            </svg>
            <span className="text-sm">{restInfo?.info?.avgRating}</span>
            <span className="text-sm font-semibold">
              {restInfo?.info?.sla?.slaString}
            </span>
          </div>

          {/* Cuisines */}
          <p className="text-gray-600 text-sm truncate mt-1">
            {restInfo.info.cuisines?.join(", ")}
          </p>

          {/* Locality */}
          <p className="text-gray-600 text-sm truncate">
            {restInfo.info.locality}
          </p>
        </div>
      </div>
    </Link>
  );
}
