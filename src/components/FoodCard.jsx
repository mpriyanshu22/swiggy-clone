function FoodCard({ foodData }) {
  return (
    <div className="w-full max-w-xs sm:w-52">
      <a target="_blank" href={foodData.action.link} rel="noopener noreferrer">
        <img
          className="w-full h-40 sm:h-52 object-cover rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
          alt={foodData?.action?.text || "Food Item"}
        />
      </a>
    </div>
  );
}

export default FoodCard;
