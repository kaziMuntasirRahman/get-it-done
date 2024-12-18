import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { InputBox, SubmitButton, TextArea } from "../components/AuthPageComponent";
import { Aside } from "../components/DashboardComponent";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div div className="dashboard-body">
      <Helmet>
        <title>Update Profile • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <h1 className="dashboard-title">
            Update Your Profile
          </h1>
          {/* this is form */}
          <form onSubmit={handleUpdateProfile} className="grid grid-cols-3 gap-x-6 gap-y-1">
            <InputBox label="Enter Your Name" type="text" autoFocus={true} setInputValue={setUpdatedName} defaultValue={userLoading ? "Update Name" : displayName} required />
            <InputBox label="Enter Your Job Title" type="text" setInputValue={setUpdatedTitle} defaultValue={userDataLoading ? "Update Image URL" : updatedTitle} required />
            <InputBox label="Enter Your Phone Number" type="text" setInputValue={setUpdatedPhoneNumber} defaultValue={userDataLoading ? "Update Image URL" : updatedPhoneNumber} />

            <TextArea label="Write Your Bio" setInputValue={setUpdatedBio} rows={4} defaultValue={userDataLoading ? "Update Image URL" : updatedBio} />
            <TextArea label="Enter Your Address" customClass="col-span-1" setInputValue={setUpdatedAddress} rows={4} defaultValue={userDataLoading ? "Update Image URL" : updatedAddress} />

            <InputBox label="Enter Facebook Account Link" type="text" setInputValue={setUpdatedFbAccount} defaultValue={userDataLoading ? "Update Image URL" : updatedFbAccount} />
            <InputBox label="Enter LinkedIn Account Link" type="text" setInputValue={setUpdatedLinkedInAddress} defaultValue={userDataLoading ? "Update Image URL" : updatedLinkedInAddress} />
            <InputBox label="Enter Twitter Account Link" type="text" setInputValue={setUpdatedTwitterAddress} defaultValue={userDataLoading ? "Update Image URL" : updatedTwitterAddress} />
            <InputBox label="Enter Your Profile Image URL" type="text" setInputValue={setUpdatedPhotoURL} defaultValue={userLoading ? "Update Image URL" : photoURL} required />
            <InputBox label="Enter Your Cover Photo URL" type="text" setInputValue={setUpdatedCoverPhotoURL} defaultValue={userDataLoading ? "Update Image URL" : updatedCoverPhotoURL} />
            <div className="my-4 col-span-2 xl:col-span-1 xl:col-start-2">
              <SubmitButton text="Update" />
            </div>
          </form>
        </div>
      </div>
      {/* <Aside
        topHead="Add section heading"
        topBody="Add section body"
      bottomArray={[{}, {}, {}, {}]}
      /> */}
    </div>
  );
};

export default UpdateProfile;