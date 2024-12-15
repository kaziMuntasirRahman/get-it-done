console.log("%c\n     _-.:.-_\n  .'-/_:-:_\\-'.\n /_'/__ |__'._'\\\n'__(___.)___ )_ '\n(__(___ )___ )__)\n.__(___.(__  )_ .\n \\__\\__ )__ /__/\n  -__\\ _(_ )__-\n   \\ _\\_)./_ /\n     \\_.|_./\n      |_|_|\n        |\n       [_]\n\n    Let's Fly", "font-family:monospace")
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;