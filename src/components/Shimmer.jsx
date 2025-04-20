function Shimmer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[90%] mx-auto mt-20">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="h-72 w-72">
          <div className="w-70 h-45 rounded-xl bg-gray-400"></div>
          <div className="w-[95%] mx-auto mt-3">
            <div className="bg-gray-400 w-full h-6"></div>
            <div className="bg-gray-400 w-full h-6 mt-2"></div>
            <div className="bg-gray-400 w-full h-6 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
