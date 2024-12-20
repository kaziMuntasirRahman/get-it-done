import { Switch } from "@headlessui/react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBell, FaLock, FaPalette, FaShieldAlt, FaUserCog } from "react-icons/fa";
import { Aside } from "../components/DashboardComponent";
import { AuthContext } from "../providers/AuthProvider";

const UserSettings = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Profile Settings • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">User Settings</h1>
            <p className="opacity-90">Customize your account preferences and application settings.</p>
          </div>
          <h1 className="dashboard-title flex items-center gap-3">
            <FaUserCog className="text-3xl text-violet-600" />
            Profile Settings
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Account Settings */}
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaLock className="text-violet-600" />
                Account Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-700">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <Switch
                    checked={notifications}
                    onChange={setNotifications}
                    className={`${notifications ? 'bg-violet-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                  >
                    <span className={`${notifications ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaBell className="text-violet-600" />
                Notification Preferences
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-700">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={notifications}
                    onChange={setNotifications}
                    className={`${notifications ? 'bg-violet-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                  >
                    <span className={`${notifications ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaShieldAlt className="text-violet-600" />
                Privacy Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-700">Public Profile</h3>
                    <p className="text-sm text-gray-500">Make profile visible to everyone</p>
                  </div>
                  <Switch
                    checked={publicProfile}
                    onChange={setPublicProfile}
                    className={`${publicProfile ? 'bg-violet-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                  >
                    <span className={`${publicProfile ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaPalette className="text-violet-600" />
                Appearance
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-700">Dark Mode</h3>
                    <p className="text-sm text-gray-500">Switch to dark theme</p>
                  </div>
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${darkMode ? 'bg-violet-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                  >
                    <span className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aside
        topHead="Settings Overview"
        topBody="Manage your account settings, privacy preferences, and customize your experience on GetItDone."
        bottomArray={[
          { title: "Account Type", value: "Premium" },
          { title: "Member Since", value: "2024" },
          { title: "Last Updated", value: "Today" },
          { title: "Status", value: "Active" }
        ]}
      />
    </div>
  );
};

export default UserSettings;