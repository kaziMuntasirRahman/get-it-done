console.log("%c\n     _-.:.-_\n  .'-/_:-:_\\-'.\n /_'/__ |__'._'\\\n'__(___.)___ )_ '\n(__(___ )___ )__)\n.__(___.(__  )_ .\n \\__\\__ )__ /__/\n  -__\\ _(_ )__-\n   \\ _\\_)./_ /\n     \\_.|_./\n      |_|_|\n        |\n       [_]\n\n    Let's Fly", "font-family:monospace")
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;