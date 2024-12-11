import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <HelmetProvider>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Root;