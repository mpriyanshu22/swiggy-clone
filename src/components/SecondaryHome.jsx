import { Outlet } from "react-router-dom";
import RestHeader from "./RestHeader";

function SecondaryHome() {
  return (
    <>
      <RestHeader />
      <main className="px-4 sm:px-6 lg:px-10 py-4">
        <Outlet />
      </main>
    </>
  );
}

export default SecondaryHome;
