import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Button = ({ text, address }) => {
  return (
    <Link
      to={address}
      className="btn w-fit bg-purple-700 text-white hover:bg-purple-700 px-8 hover:px-14 mt-12 group/btn rounded-full flex items-center gap-1 hover:gap-1.5 mx-auto my-8 border-purple-400 transition-all duration-300 font-bold ease-in-out">
      <p>{text}</p>
      <FaArrowRight />
    </Link>
  );
};

export default Button;