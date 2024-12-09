import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      this is root components
      <Outlet />
    </div>
  );
};

export default Root;