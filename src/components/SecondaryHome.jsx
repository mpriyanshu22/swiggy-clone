
import { Outlet } from "react-router-dom";
import RestHeader from "./RestHeader";
function SecondaryHome(){

return (
 <>
 <RestHeader></RestHeader>
 <Outlet></Outlet>
 </>
)
}

export default SecondaryHome;