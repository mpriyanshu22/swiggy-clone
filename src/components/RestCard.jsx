import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  return (
    <Link 
      to={"/city/bhopal/" + restInfo?.info?.id}
      className="block w-full h-full"
      aria-label={`View ${restInfo?.info?.name} restaurant details`}
    >
      <div className="h-full w-full transform transition duration-200 hover:scale-[0.98] active:scale-95">
        {/* Restaurant Image */}
        <div className="relative pb-[60%] rounded-xl overflow-hidden shadow-sm bg-gray-100">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo.info.cloudinaryImageId}
            alt={restInfo.info.name}
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x400?text=Restaurant+Image';
            }}
          />
        </div>

        {/* Restaurant Details */}
        <div className="mt-3 px-1">
          <h3 className="font-bold text-base sm:text-lg truncate">
            {restInfo.info.name}
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01z" />
            </svg>
            <span className="text-sm sm:text-base">{restInfo?.info?.avgRating}</span>
            <span className="text-sm sm:text-base">•</span>
            <span className="text-sm sm:text-base">{restInfo?.info?.sla?.slaString}</span>
          </div>

          <p className="text-gray-600 text-sm sm:text-base truncate mt-1">
            {restInfo.info.cuisines?.join(", ")}
          </p>

          <p className="text-gray-500 text-xs sm:text-sm truncate mt-1">
            {restInfo.info.locality}
          </p>
        </div>
      </div>
    </Link>
  );
}