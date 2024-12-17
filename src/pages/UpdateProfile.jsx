import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { InputBox, SubmitButton } from "../components/AuthPageComponent";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  const [userName, setUserName] = useState(displayName)
  const [imgURL, setImgURL] = useState(photoURL)

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    console.log(userName, imgURL);
  }

  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Update Profile • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        Update Your Profile
      </h1>
      {/* this is form */}
      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-x-10">
        <InputBox label="User Name" type="text" autoFocus={true} setInputValue={setUserName} defaultValue={displayName} />
        <InputBox label="User Image URL" type="text" setInputValue={setImgURL} defaultValue={photoURL} />
        <div className="my-4 col-span-2">
          <SubmitButton text="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;