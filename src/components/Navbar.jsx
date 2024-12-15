import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { IoIosArrowDown } from 'react-icons/io';
import Swal from 'sweetalert2';

const navLinks = [
  { name: 'Home', link: '/', isPrivate: false },
  { name: 'Services', link: '/services', isPrivate: false },
  {
    name: 'Dashboard',
    link: '/dashboard',
    isPrivate: true,
    children: [
      { name: 'Add Service', link: '/add-service' },
      { name: 'Manage Service', link: '/manage-services' },
      { name: 'Booked Service', link: '/booked-services' },
      { name: 'Service To Do', link: '/services-to-do' }
    ]
  },
  { name: 'About', link: '/about', isPrivate: false },
  { name: 'Contact', link: '/contact', isPrivate: false },
];

const Navbar = () => {
  const { user, userLoading, logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    const res = await logOut();
    if (res.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You've successfully logged out of GetItDone!",
        text: "We hope to see you again soon.",
        showConfirmButton: false,
        timer: 2500
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: res.err.message,
        footer: '<a href="#">Need help logging out?</a>'
      });
    }
  }


  return (
    <div className='w-full bg-slate-200'>
      <nav className='max-w-[1200px] mx-auto h-24 px-8 flex justify-between items-center'>
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
              {
                navLinks.map((navLink, index) =>
                  <NavLink
                    key={index}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                    to={navLink.link}>{navLink.name}
                  </NavLink>)
              }
            </ul>
          </div>
        </div>
        <img src="/images/logo-removebg.png" className='size-14 mr-auto lg:mr-0' />
        <div className="navbar-center hidden lg:flex mx-auto drop-shadow-md">
          <ul className=" navlinks-center bg-slate-50 rounded-full border border-slate-300 font-semibold">
            {
              navLinks.map((navLink, index) =>
                <NavLink
                  key={index}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                  }
                  to={navLink.link}>{navLink.name}
                </NavLink>)
            }

          </ul>
        </div>
        <div className="navbar-end rounded-full bg-white 50 p-1 flex justify-between gap-1.5 max-w-[300px] w-fit ">
          {
            userLoading ?
              // if user is loading
              <>
                <button
                  className='btn btn-sm bg-[#fdf4f4] text-[#4c17a8] pr-2 pl-3 py-1 rounded-r-2xl rounded-l-full shadow-violet-700 border-none'>loading...</button>
                <button
                  className='btn btn-sm text-white bg-[#4c17a8] pr-3 pl-2 py-1 rounded-e-full shadow-slate-600 border-none'
                >loading...
                </button>
              </> :
              user ?
                // if user is present
                <>
                  <div className="avatar px-2 tooltip" data-tip={user.displayName}>
                    <div className="mask mask-squircle size-8">
                      <img
                        className='object-cover bg-violet-700'
                        src={user?.photoURL}
                        // src='images/person.jpg'
                        alt={user.displayName} />
                    </div>
                  </div>

                  <div className="dropdown dropdown-bottom dropdown-end text-base text-black pr-3 pl-2 !py-0 rounded-e-full shadow-slate-600 border-none">
                    <div className="m-1 inline-flex">{user.displayName}</div>
                    <IoIosArrowDown tabIndex={0} role="button" className='inline ml-1 text-black hover:translate-y-1 transition-all duration-200' />
                    <ul tabIndex={0} className="dropdown-content menu bg-slate-200 rounded-box z-[1] max-w-60 w-fit min-w-36 p-2 mt-2 shadow-xl border border-violet-300 text-black">
                      <li><a>Update Profile</a></li>
                      <li><a>View Profile</a></li>
                      <li><a className='font-bold'>{user?.email && user.email.length > 20 ? user.email.slice(0, 16) + "..." : user.email}</a></li>
                      <li><a onClick={handleLogOut} className='bg-red-700 text-white'>Logout</a></li>
                    </ul>
                  </div>
                </> :
                // if user is absent
                <>
                  <Link
                    to='/signin'
                    className='btn btn-sm bg-[#fdf4f4] text-[#4c17a8] pr-2 pl-3 py-1 rounded-r-2xl rounded-l-full shadow-violet-700 border-none'>Sign In</Link>
                  <Link
                    to='/signup'
                    className='btn btn-sm text-white bg-[#4c17a8] pr-3 pl-2 py-1 rounded-e-full shadow-slate-100 border-none'
                  >Get Started
                  </Link>
                </>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;