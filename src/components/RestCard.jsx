import { Link } from "react-router-dom"
export default function RestCard({restInfo}){
  return (
    <Link to={"/city/bhopal/"+restInfo?.info?.id}>
    <div className="h-72 w-72 mt-0 transform transition duration-100 hover:scale-95">
<img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
<div className="w-[95%] mx-auto mt-3">
  <div className="h-10 flex items-center justify-center">
    <h3 className="font-bold text-lg truncate w-full px-2">{restInfo.info.name}</h3>
  </div>
  <div className="flex gap-2">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="green"
      className="w-6 h-6"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  <span className="text-lg">{restInfo?.info?.avgRating}</span>
  <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString} </span>
  </div>
  <div className="text-gray-600 text-lg truncate w-full px-2">{restInfo.info.cuisines+" "}</div>
  <div className="text-gray-600 text-lg truncate w-full px-2">{restInfo.info.locality}</div>
</div>
</div>
</Link>
  )
}