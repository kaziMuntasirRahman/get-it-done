import { Outlet } from "react-router-dom";
import { Navbar, TopBar } from "../components/DashboardComponent";

const DashBoardContainer = () => {
  return (
    <div className="bg-[#F1ECFE] w-full min-h-screen ">
      <TopBar />
      <div className="max-w-[90em] h-full flex items-start mx-auto gap-6 py-5 px-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardContainer;
