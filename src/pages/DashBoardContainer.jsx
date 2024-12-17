import { Outlet } from "react-router-dom";
import { Navbar, TopBar } from "../components/DashboardComponent";

const DashBoardContainer = () => {
  return (
    <div className="bg-[#F1ECFE] w-full min-h-screen ">
      <TopBar />
      <div className="h-full md:px-[40px] lg:px-[80px] xl:px-[200px] px-5 py-6 flex items-start gap-6">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardContainer;
