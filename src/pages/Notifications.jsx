import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBell, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import { Aside } from "../components/DashboardComponent";

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Service Completed",
      message: "Your house cleaning service has been completed successfully",
      time: "2 hours ago",
      icon: <FaCheckCircle className="text-green-500" />
    },
    {
      id: 2,
      type: "warning",
      title: "Payment Pending",
      message: "Payment for plumbing service is pending",
      time: "5 hours ago",
      icon: <FaExclamationCircle className="text-yellow-500" />
    },
    {
      id: 3,
      type: "info",
      title: "New Service Available",
      message: "Check out our new home renovation services",
      time: "1 day ago",
      icon: <FaInfoCircle className="text-blue-500" />
    }
  ]);

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Notifications • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Notifications</h1>
            <p className="opacity-90">Stay updated with important alerts and messages about your services.</p>
          </div>
          <h1 className="dashboard-title flex items-center gap-3">
            <FaBell className="text-3xl text-violet-600" />
            Notifications
          </h1>

          <div className="mt-8 space-y-4">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className="bg-white p-4 rounded-xl shadow-sm-teal hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="text-2xl mt-1">
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600">
                    {notification.message}
                  </p>
                  <span className="text-sm text-gray-400 mt-2 block">
                    {notification.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Aside
        topHead="Notification Settings"
        topBody="Manage your notification preferences and stay updated with your service activities."
        bottomArray={[
          { title: "Unread", value: "2" },
          { title: "Total", value: "15" },
          { title: "Filtered", value: "5" },
          { title: "Archived", value: "8" }
        ]}
      />
    </div>
  );
};

export default Notifications;