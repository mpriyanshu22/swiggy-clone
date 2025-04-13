
function FoodCard({foodData}){
  return <>
  <a target="_blank" href={foodData.action.link}>
  <img className="w-52 h-65 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +foodData?.imageId}></img>
  </a>
  </>
}
export default FoodCard;