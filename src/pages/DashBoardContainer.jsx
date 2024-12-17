import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import '../styles/dashboard.css'
import { RiAccountCircleFill, RiDashboardLine, RiFunctionAddFill, RiLockPasswordFill } from "react-icons/ri";
import { MdAccountCircle, MdEdit, MdLogout, MdManageAccounts, MdNotifications, MdOutlineHandyman, MdSettings } from "react-icons/md";
import { BsFillCalendarCheckFill, BsInfo } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaLeaf } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";

const DashBoardContainer = () => {

  return (
    <div className="bg-[#F1ECFE] w-full min-h-screen ">
      <TopBar />
      <div className="h-full md:px-[40px] lg:px-[80px] xl:px-[200px] px-5 py-8 flex items-start gap-6">
        <Navbar />
        <div className="w-[720px] bg-white rounded-xl shadow-xl border border-violet-700/20 pb-12 xl:px-16 lg:px-8 px-4">
          <Outlet />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default DashBoardContainer;


const TopBar = () => {
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
const Navbar = () => {
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
const Aside = () => {
  return (
    <aside className="space-y-6 w-96 sticky top-20">
      <div className="w-full p-5 bg-white rounded-xl shadow-xl border border-violet-700/20 pb-4 flex flex-col gap-3 font-light">
        <header className="max-w-fit flex items-center gap-2 text-black/80 tooltip tooltip-top" data-tip="Pay As You Go">
          <h3 className="font-medium">Pay As You Go</h3>
          <BsInfo className="text-base bg-slate-400 rounded-full" />
        </header>
        <p className="text-black/50 text-[14.5px]">
          Plans get complicated, so we just charge based on usage. Pick and choose which pieces you need for your application; that's all you'll see on your invoice.
        </p>
      </div>

      <div className="w-full p-5 bg-white rounded-xl shadow-xl border border-violet-700/20 pb-4 flex flex-col gap-3">
        <dl className="card p-0 divide-gray-200 divide-y">
          <div className="p-5">
            <dt className="text-[0.9375rem] font-medium text-navy-900">Credits</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold">
                <span>$0.00</span>
              </div>
            </dd>
          </div>
          <div className="p-5">
            <dt className="text-[0.9375rem] font-medium text-navy-900">Current month earned so far</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-violet-600">
                -
              </div>
            </dd>
          </div>
          <div className="p-5">
            <dt className="text-[0.9375rem] font-medium text-navy-900">Current month debited so far</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-violet-600">
                -
              </div>
            </dd>
          </div>
          <div className="p-5">
            <dt className="text-[0.9375rem] font-medium text-navy-900">
              Last invoice
            </dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-violet-600">
                -
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </aside>
  )
}