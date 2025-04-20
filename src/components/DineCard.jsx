function DineCard({ RestData }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex-none">
      <a target="_blank" href={RestData.cta.link} rel="noopener noreferrer">
        <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.info?.mediaFiles[0]?.url}`}
            alt={RestData?.info?.name || "Restaurant"}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-0" />
          
          {/* Text on top of the gradient */}
          <p className="absolute bottom-4 left-4 text-base sm:text-lg text-white z-10 font-semibold">
            {RestData?.info?.name}
          </p>
          <p className="absolute bottom-4 right-4 text-base sm:text-lg text-white z-10 font-semibold">
            ⭐ {RestData?.info?.rating?.value}
          </p>
        </div>
      </a>
    </div>
  );
}

export default DineCard;
