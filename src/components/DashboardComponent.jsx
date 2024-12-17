import { useContext } from "react";
import { BsFillCalendarCheckFill, BsInfo } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GrResources } from "react-icons/gr";
import { MdAccountCircle, MdEdit, MdLogout, MdManageAccounts, MdNotifications, MdOutlineHandyman, MdSettings } from "react-icons/md";
import { RiAccountCircleFill, RiDashboardLine, RiFunctionAddFill, RiLockPasswordFill } from "react-icons/ri";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import '../styles/dashboard.css';


export const TopBar = () => {
  return (
    <div>
      <div className="h-[64px]  w-full flex justify-between items-center px-[232px] bg-violet-950 fixed top-0 z-20" >
        <Link to="/">
          <img src="/images/logo.png" className="rounded-full size-12" />
        </Link>
        <div className="flex gap-3 lg:pr-10">
          <Link
            className="dash-inactive"
            to='/'>
            <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/25 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10">
              <GoHomeFill />
            </div>
            <p className="text-white">Home</p>
          </Link>
          <Link
            className="dash-inactive"
            to='/dashboard'>
            <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/25 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10">
              <FaLeaf />
            </div>
            <p className="text-white">What's New</p>
          </Link>
          <Link
            className="dash-inactive"
            to='/dashboard'>
            <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/25 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10">
              <GrResources />
            </div>
            <p className="text-white">Resources</p>
          </Link>
          <Link
            className="dash-inactive"
            to='/dashboard'>
            <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/25 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10">
              <RiAccountCircleFill />
            </div>
            <p className="text-white">Dashboard</p>
          </Link>
        </div>

      </div>
      <div className="w-full py-3 drop-shadow-sm text-white text-center font-medium bg-emerald-500 sticky mt-[64px] z-10">
        <div>
          <div className="text-base font-semibold">
            Add a service to connect with others on our platform.
          </div>
          <div>
            To start offering your services, you'll need to add at least one service to your profile.
          </div>
        </div>

      </div>
    </div>
  )
}
export const Navbar = () => {
  const navLinks = [
    {
      name: 'Add Service',
      address: 'add-service',
      description: 'Post a new service to the platform',
      icon: <RiFunctionAddFill />
    },
    {
      name: 'Manage Service',
      address: 'manage-services',
      description: 'Update or delete your posted services',
      icon: <MdManageAccounts />
    },
    {
      name: 'Booked Service',
      address: 'booked-services',
      description: 'View the services you have booked',
      icon: <BsFillCalendarCheckFill />
    },
    {
      name: 'Service To Do',
      address: 'services-to-do',
      description: 'Track the services you are assigned to complete',
      icon: <MdOutlineHandyman />
    }
  ];
  const userNavLinks = [
    {
      name: 'View Profile',
      address: 'view-profile',
      description: 'View your personal information and details',
      icon: <MdAccountCircle /> // Example icon for viewing user info
    },
    {
      name: 'Update Profile',
      address: 'update-profile',
      description: 'Edit your profile information and settings',
      icon: <MdEdit /> // Example icon for updating profile
    },
    {
      name: 'Change Password',
      address: 'change-password',
      description: 'Update your account password for security',
      icon: <RiLockPasswordFill /> // Example icon for changing password
    },
    {
      name: 'User Settings',
      address: 'user-settings',
      description: 'Manage your account preferences and settings',
      icon: <MdSettings /> // Example icon for settings
    },
    {
      name: 'Notifications',
      address: 'notifications',
      description: 'View and manage your notifications',
      icon: <MdNotifications /> // Example icon for notifications
    }
  ];

  const { user, userLoading, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const location = useLocation();
  // console.log(location);

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
      navigate('/')
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
    <nav className="flex flex-col space-y-4 lg:w-72 sticky top-20">
      <button className="btn btn-sm bg-[#7C3AED] text-white w-full !h-[38px]">Launch an App</button>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? location.pathname === "/dashboard" ? "dash-active" : "dash-inactive"
            : isPending
              ? "dash-pending"
              : "dash-inactive"
        }
        to='/dashboard'>
        <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/75 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10"><RiDashboardLine /></div>
        <p>Dashboard</p>
      </NavLink>

      <hr className="my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5" />

      {
        navLinks.map((navLink, index) =>
          <NavLink
            key={index}
            className={({ isActive, isPending }) =>
              isActive
                ? "dash-active"
                : isPending
                  ? "dash-pending"
                  : "dash-inactive"
            }
            to={navLink.address}>
            <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/75 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10">{navLink.icon}</div>
            <p>{navLink.name}</p>
          </NavLink>
        )}
      <hr className="my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5" />
      {
        userNavLinks.map((navLink, index) =>
          <NavLink
            key={index}
            className={({ isActive, isPending }) =>
              isActive
                ? "dash-active"
                : isPending
                  ? "dash-pending"
                  : "dash-inactive"
            }
            to={navLink.address}>
            <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/75 to-violet-100/75 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10">{navLink.icon}</div>
            <p>{navLink.name}</p>
          </NavLink>
        )}
      <hr className="my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5" />
      <button
        onClick={handleLogOut}
        className="flex gap-1.5 lg:gap-2.5 font-bold items-center justify-items-center lg:justify-items-start px-2.5 py-2 rounded-lg transition-colors bg-red-600 text-white">
        <div className="flex items-center justify-center size-6 lg:bg-gradient-to-b from-white/10 to-violet-100/15 lg:rounded-md lg:shadow-sm shadow-violet-800/10 lg:ring-1 ring-violet-800/10"><MdLogout /></div>
        <p>LogOut</p>
      </button>

    </nav >
  )
}

const defaultArray = [
  { title: "Credentials", value: 0, },
  { title: "Last month earned so far", value: 0 },
  { title: "Last month spent so far", value: 0 },
  { title: "Last invoice", value: 0 }]
export const Aside = ({ topHead = "Default Header", topBody = "Default body content", bottomArray = defaultArray }) => {

  return (
    <aside className="space-y-6 w-96 sticky top-20">
      <div className="w-full p-5 bg-white rounded-xl shadow-xl border border-violet-700/20 pb-4 flex flex-col gap-3 font-light">
        <header className="max-w-fit flex items-center gap-2 text-black/80">
          <h3 className="font-medium">{topHead}</h3>
          <div className="bg-slate-400 rounded-full cursor-pointer tooltip tooltip-top" data-tip={topHead}>
            <BsInfo className="text-base" />
          </div>
        </header>
        <p className="text-black/50 text-[14.5px]">
          {topBody}
        </p>
      </div>
      {/* ------------------------------------------------------- */}
      <div className="w-full p-5 bg-white rounded-xl shadow-xl border border-violet-700/20 pb-4 flex flex-col gap-3">
        <dl className="card p-0 divide-gray-200 divide-y">

          {
            bottomArray.map((item, index) =>
              <div key={index} className="p-5">
                <dt className="text-[0.9375rem] font-medium text-[#1E3A8A]">{item.title}</dt>
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div className="flex items-baseline">
                    {
                      typeof (item.value) === 'number'
                        ?
                        <span className="text-2xl font-semibold">
                          {item.value === 0 ? "-" : `${item.value}`}
                        </span>
                        :
                        <span className="text-lg font-light mt-1">{item.value}</span>
                    }
                  </div>
                </dd>
              </div>
            )}

        </dl>
      </div>
    </aside>
  )
}