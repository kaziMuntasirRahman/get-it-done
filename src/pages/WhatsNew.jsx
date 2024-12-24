import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBug, FaCalendar, FaCode, FaRocket } from "react-icons/fa";
import Swal from "sweetalert2";
import { TopBar } from "../components/DashboardComponent";
import { AuthContext } from "../providers/AuthProvider";

const WhatsNew = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(user?.email);
  }, [user]);

  const handleAddSubscriber = async () => {
    try {
      const response = await axios.post("https://get-it-done-server.vercel.app/subscribers", { email });
      if (response.data.insertedId) {
        console.log("Subscriber added successfully:", response.data);
        Swal.fire({
          title: "Success",
          text: "You are now subscribed to our newsletter",
          icon: "success",
          confirmButtonText: "OK"
        });
        setEmail("");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Swal.fire({
          title: "Already Subscribed",
          text: "You are already subscribed to our newsletter",
          icon: "warning",
          confirmButtonText: "OK"
        });
      } else if (error.response.status === 500) {
        Swal.fire({
          title: "Error",
          text: "An error occurred while adding your email. Please try again.",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    }
  };

  const updates = [
    {
      id: 1,
      date: "March 15, 2024",
      type: "New Feature",
      title: "Enhanced Service Search",
      description: "Improved search functionality with filters and sorting options",
      icon: <FaRocket className="text-violet-600" />
    },
    {
      id: 2,
      type: "Improvement",
      date: "March 10, 2024",
      title: "UI/UX Updates",
      description: "Refreshed dashboard interface with better accessibility",
      icon: <FaCode className="text-blue-600" />
    },
    {
      id: 3,
      type: "Bug Fix",
      date: "March 5, 2024",
      title: "Service Booking Issues",
      description: "Fixed scheduling conflicts and booking confirmation delays",
      icon: <FaBug className="text-red-600" />
    },
    {
      id: 4,
      type: "New Feature",
      date: "March 1, 2024",
      title: "Service Provider Analytics",
      description: "New analytics dashboard for service providers",
      icon: <FaRocket className="text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>What's New • GetItDone</title>
      </Helmet>

      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What's New at GetItDone
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with our latest features, improvements, and bug fixes. We're constantly working to make GetItDone better for you.
          </p>
        </div>

        {/* Updates Timeline */}
        <div className="space-y-8">
          {updates.map(update => (
            <div
              key={update.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl p-3 bg-gray-50 rounded-lg">
                  {update.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-sm font-medium bg-violet-100 text-violet-800 rounded-full">
                      {update.type}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <FaCalendar className="mr-2" />
                      {update.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-600">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center bg-violet-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter to get notified about new updates.</p>
          <div className="max-w-md mx-auto flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              defaultValue={email}
              className="transition appearance-none w-full p-3 rounded-xl shadow-sm border border-[#D7DFE9] hover:border-violet-200 focus:border-violet-300 focus:bg-white bg-opacity-0 hover:bg-opacity-50 focus:bg-opacity-50 ring-violet-200 focus:ring-violet-200 focus:ring-[3px] focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
              onClick={handleAddSubscriber}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
