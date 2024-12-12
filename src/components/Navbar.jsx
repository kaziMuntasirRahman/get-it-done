import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='w-full bg-slate-200'>
      <nav className='max-w-[1200px] h-24 mx-auto px-8 flex justify-between items-center'>
        <div className="navbar-start lg:hidden max-w-fit">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink>Home</NavLink>
              <NavLink>Services</NavLink>
              <NavLink>Dashboard</NavLink>
              <NavLink>Logout</NavLink>
              <NavLink>user image</NavLink>
              <NavLink>user name</NavLink>
            </ul>
          </div>
        </div>
        <img src="images/logo-removebg-preview (1).png" className='size-14 mr-auto lg:mr-0' />
        <div className="navbar-center hidden lg:flex mx-auto drop-shadow-md">
          <ul className="navlinks-center bg-slate-50 rounded-full border border-slate-300 font-semibold">
            <NavLink>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink>Dashboard</NavLink>
            <NavLink>Logout</NavLink>
            <NavLink>user image</NavLink>
            <NavLink>user name</NavLink>
          </ul>
        </div>
        <div className="navbar-end rounded-full bg-white 50 p-1 flex justify-between max-w-[180px]">
          <Link
            to='/signin'
            className='btn btn-sm bg-[#fdf4f4] text-[#4c17a8] pr-2 pl-3 py-1 rounded-r-2xl rounded-l-full shadow-2xl border'>Sign In</Link>
          <Link
            to='/signup'
            className='btn btn-sm text-white bg-[#4c17a8] pr-3 pl-2 py-1  rounded-e-full rounded-s-lg drop-shadow-2xl'
          >Get Started
          </Link>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;