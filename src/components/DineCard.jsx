function DineCard({RestData}){
  return (
    <div className="max-w-sm flex-none">
      <a target="_blank" href={RestData.cta.link}>
  <div className="relative">
    <img
      className="w-80 h-46 object-cover"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url}
      alt={RestData?.info?.name || "Restaurant"}
    />
    {/* Gradient Overlay */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-0"></div>
    {/* Text on top of the gradient */}
    <p className="absolute bottom-4 left-4 text-xl text-white z-10">
      {RestData?.info?.name}
    </p>
    <p className="absolute bottom-4 right-4 text-xl text-white z-10">
      {RestData?.info?.rating?.value}
    </p>
  </div>
  </a>
</div>

  )
}
export default DineCard;