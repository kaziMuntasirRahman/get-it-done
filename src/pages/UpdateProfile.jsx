import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { InputBox, SubmitButton, TextArea } from "../components/AuthPageComponent";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user, userLoading, userData, userDataLoading, updateUser } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  const navigate = useNavigate();

  const [updatedName, setUpdatedName] = useState()
  const [updatedPhotoURL, setUpdatedPhotoURL] = useState()
  const [updatedTitle, setUpdatedTitle] = useState()
  const [updatedBio, setUpdatedBio] = useState()
  const [updatedCoverPhotoURL, setUpdatedCoverPhotoURL] = useState()
  const [updatedAddress, setUpdatedAddress] = useState()
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState()
  const [updatedFbAccount, setUpdatedFbAccount] = useState()
  const [updatedLinkedInAddress, setUpdatedLinkedInAddress] = useState()
  const [updatedTwitterAddress, setUpdatedTwitterAddress] = useState()

  useEffect(() => {
    setUpdatedName(user?.displayName)
    setUpdatedPhotoURL(user?.photoURL)
    setUpdatedTitle(userData?.title)
    setUpdatedBio(userData?.bio)
    setUpdatedCoverPhotoURL(userData?.coverPhotoURL)
    setUpdatedAddress(userData?.address)
    setUpdatedPhoneNumber(userData?.phoneNumber)
    setUpdatedFbAccount(userData?.fbAddress)
    setUpdatedLinkedInAddress(userData?.linkedInAddress)
    setUpdatedTwitterAddress(userData?.twitterAddress)
  }, [user, userData])

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    console.log(updatedName, updatedPhotoURL, updatedTitle, updatedBio, updatedCoverPhotoURL, updatedAddress, updatedPhoneNumber, updatedFbAccount, updatedLinkedInAddress, updatedTwitterAddress);

    const response = await updateUser(updatedName, updatedPhotoURL);

    if (response) {
      const updatedUser = {
        email: user.email,
        displayName: updatedName,
        photoURL: updatedPhotoURL,
        title: updatedTitle,
        bio: updatedBio,
        coverPhotoURL: updatedCoverPhotoURL,
        address: updatedAddress,
        phoneNumber: updatedPhoneNumber,
        fbAddress: updatedFbAccount,
        linkedInAddress: updatedLinkedInAddress,
        twitterAddress: updatedTwitterAddress
      };

      const result = await axios.patch('http://localhost:5000/users', updatedUser);
      console.log(result.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile updated successfully!",
        text: "Your profile has been updated. Redirecting to your profile page.",
        showConfirmButton: false,
        timer: 2500
      });

      setTimeout(() => navigate('/dashboard/view-profile'), 1500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Profile update failed!",
        text: "We couldn't update your profile. Please try again later.",
        footer: response.message || "Something went wrong. Contact support if the issue persists."
      });
    }
  };

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Update Profile • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Update Profile</h1>
            <p className="opacity-90">Keep your profile information up to date and accurate.</p>
          </div>

          <div className="p-4 md:p-8">
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              {/* Basic Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Basic Information</h3>
                  <div className="space-y-4">
                    <InputBox
                      label="Full Name"
                      type="text"
                      autoFocus={true}
                      setInputValue={setUpdatedName}
                      defaultValue={userLoading ? "Update Name" : displayName}
                      required
                    />
                    <InputBox
                      label="Job Title"
                      type="text"
                      setInputValue={setUpdatedTitle}
                      defaultValue={userDataLoading ? "Update Title" : updatedTitle}
                      required
                    />
                    <InputBox
                      label="Phone Number"
                      type="tel"
                      setInputValue={setUpdatedPhoneNumber}
                      defaultValue={userDataLoading ? "Update Phone" : updatedPhoneNumber}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Profile Images</h3>
                  <div className="space-y-4">
                    <InputBox
                      label="Profile Image URL"
                      type="url"
                      setInputValue={setUpdatedPhotoURL}
                      defaultValue={userLoading ? "" : photoURL}
                      required
                    />
                    <InputBox
                      label="Cover Photo URL"
                      type="url"
                      setInputValue={setUpdatedCoverPhotoURL}
                      defaultValue={userDataLoading ? "" : updatedCoverPhotoURL}
                    />
                  </div>
                </div>
              </div>

              {/* Bio & Social Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">About You</h3>
                  <div className="space-y-4">
                    <TextArea
                      label="Bio"
                      setInputValue={setUpdatedBio}
                      rows={4}
                      defaultValue={userDataLoading ? "Update Bio" : updatedBio}
                    />
                    <TextArea
                      label="Address"
                      setInputValue={setUpdatedAddress}
                      rows={4}
                      defaultValue={userDataLoading ? "Update Address" : updatedAddress}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Social Links</h3>
                  <div className="space-y-4">
                    <InputBox
                      label="Facebook Profile"
                      type="url"
                      setInputValue={setUpdatedFbAccount}
                      defaultValue={userDataLoading ? "" : updatedFbAccount}
                      placeholder="https://facebook.com/username"
                    />
                    <InputBox
                      label="LinkedIn Profile"
                      type="url"
                      setInputValue={setUpdatedLinkedInAddress}
                      defaultValue={userDataLoading ? "" : updatedLinkedInAddress}
                      placeholder="https://linkedin.com/in/username"
                    />
                    <InputBox
                      label="Twitter Profile"
                      type="url"
                      setInputValue={setUpdatedTwitterAddress}
                      defaultValue={userDataLoading ? "" : updatedTwitterAddress}
                      placeholder="https://twitter.com/username"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <SubmitButton
                  text="Update Profile"
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;