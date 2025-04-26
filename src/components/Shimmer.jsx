function Shimmer() {
  return (
    <div className="flex justify-center flex-row flex-wrap items-center gap-10 w-[100%] mx-auto mt-20 mx-auto">
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
