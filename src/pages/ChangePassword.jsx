// React and hooks imports
import { useContext, useState } from "react";

// Third-party package imports
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

// Local component imports
import { InputBox, SubmitButton } from "../components/AuthPageComponent";
import { Aside } from "../components/DashboardComponent";

// Context imports
import { AuthContext } from "../providers/AuthProvider";

const ChangePassword = () => {
  const { user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case 'current':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirm':
        setShowConfirmPassword(!showConfirmPassword);
        break;
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Password validation
    if (newPassword.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Password Too Short',
        text: 'New password must be at least 8 characters long'
      });
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords Don\'t Match',
        text: 'New password and confirm password must match'
      });
      setLoading(false);
      return;
    }

    try {
      // Reauthenticate user
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, newPassword);

      // Success message
      Swal.fire({
        icon: 'success',
        title: 'Password Updated!',
        text: 'Your password has been changed successfully',
        showConfirmButton: false,
        timer: 2000
      });

      // Clear form
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {
      // Handle specific errors
      if (error.code === 'auth/wrong-password') {
        Swal.fire({
          icon: 'error',
          title: 'Incorrect Password',
          text: 'The current password you entered is incorrect'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again later.'
        });
      }
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Change Password • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Change Password</h1>
            <p className="opacity-90">Secure your account by updating your password regularly.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm-teal max-w-xl mx-auto p-8 relative">
            <form onSubmit={handleChangePassword} className="space-y-6">
              <div className="relative">
                <InputBox
                  label="Current Password"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter your current password"
                  setInputValue={setCurrentPassword}
                  value={currentPassword}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-3 top-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative">
                <InputBox
                  label="New Password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  setInputValue={setNewPassword}
                  value={newPassword}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative">
                <InputBox
                  label="Confirm New Password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  setInputValue={setConfirmPassword}
                  value={confirmPassword}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <SubmitButton text={loading ? "Updating..." : "Change Password"} disabled={loading} />
            </form>
          </div>

        </div>
      </div>
      <Aside
        topHead="Password Security Tips"
        topBody="Use a strong password that includes uppercase and lowercase letters, numbers, and special characters. Never share your password with anyone."
        bottomArray={[
          { title: "Min Length", value: "8 characters" },
          { title: "Uppercase", value: "Required" },
          { title: "Numbers", value: "Required" },
          { title: "Special Chars", value: "Recommended" }
        ]}
      />
    </div>
  );
};

export default ChangePassword;