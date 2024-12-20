import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegCalendarCheck, FaRegClock, FaRegStar, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [userStats, setUserStats] = useState({
    pendingServices: 0,
    completedServices: 0,
    totalEarnings: 0,
    avgRating: 0
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user-stats/${user?.email}`);
        setUserStats(response.data);
      } catch (err) {
        console.error("Failed to fetch user stats:", err);
      }
    };
    if (user?.email) {
      fetchUserStats();
    }
  }, [user]);

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-full overflow-x-hidden">
      <Helmet>
        <title>Dashboard • GetItDone</title>
      </Helmet>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome back, {user?.displayName || 'User'}!
        </h1>
        <p className="opacity-90">Here's what's happening with your services today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-lg">
              <FaRegCalendarCheck className="text-teal-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Services</p>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.pendingServices}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaRegClock className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed Services</p>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.completedServices}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <FaTools className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Earnings</p>
              <h3 className="text-2xl font-bold text-gray-900">${userStats.totalEarnings}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <FaRegStar className="text-yellow-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.avgRating.toFixed(1)}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/dashboard/add-service"
            className="btn btn-primary w-full"
          >
            Add New Service
          </Link>
          <Link
            to="/dashboard/manage-services"
            className="btn btn-outline btn-primary w-full"
          >
            Manage Services
          </Link>
          <Link
            to="/dashboard/my-schedule"
            className="btn btn-outline btn-primary w-full"
          >
            View Schedule
          </Link>
          <Link
            to="/dashboard/profile"
            className="btn btn-outline btn-primary w-full"
          >
            Update Profile
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, index) => (
                <tr key={index}>
                  <td>Home Cleaning</td>
                  <td>John Doe</td>
                  <td>{new Date().toLocaleDateString()}</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>$120</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;