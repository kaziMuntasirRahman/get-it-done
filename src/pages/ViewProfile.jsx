import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import { Aside } from "../components/DashboardComponent";

const ViewProfile = () => {
  const { user, userLoading, userData, userDataLoading } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Profile • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          {/* <h1 className="dashboard-title">Your Profile</h1> */}
          <div className="bg-violet-50/0 min-h-[500px] rounded-box overflow-hidden relative">
            {userDataLoading ?
              <div className="h-60 w-full skeleton" />
              :
              <img src={userData?.coverPhotoURL} className="h-60 w-full object-cover object-center" />
            }

            <div className="absolute left-1/2 -translate-x-1/2 border-4 border-violet-600 bg-violet-800 rounded-full size-60 -translate-y-1/2 max-w-[250px]">
              {userDataLoading ?
                <div className="size-full rounded-full border-4 border-white z-20 absolute" />
                :
                <img
                  src={photoURL}
                  className="size-full rounded-full border-4 border-white object-cover z-20 absolute"
                />
              }
              <div
                className={`size-10 rounded-full absolute bottom-0 right-5 z-30 cursor-pointer border-2 border-white ${userData?.isAvailable ? 'bg-[#44b700]' : 'bg-[#cccccc]'} tooltip`} data-tip={userData?.isAvailable ? "Ready to Get Hired" : "Currently Not Available"}
              />
              <span></span>
              <div
                className="size-full rounded-full absolute bottom-0 left-0 top-0 cursor-pointer flex  items-center z-0"
              >
                <span className="text-white text-[200px] w-full text-center mb-6 z-0">
                  {displayName.slice(0, 1)}
                </span>
              </div>
            </div>

            <div className="mt-36 mb-2 flex justify-center items-center gap-2">
              <h1 className="text-4xl font-bold">{displayName}</h1>
              {
                userData?.isVerified &&
                <div className="text-violet-800 tooltip" data-tip="Verified GetItDone User">
                  <MdVerifiedUser className="text-2xl cursor-pointer" />
                </div>
              }
            </div>
            <h1 className="text-center text-lg font-normal">{userData?.title}</h1>
            <div className=" flex items-center justify-center gap-5 mt-6">
              <a href={userData?.fbAddress}><FaFacebook className="size-10 text-[#1877F2]" /></a>
              <a href={userData?.linkedInAddress}><FaLinkedin className="size-10 text-[#1DA1F2]" /></a>
              <a href={userData?.twitterAddress}><FaTwitter className="size-10 text-[#0A66C2]" /></a>
            </div>
            <div className="px-16 py-10 text-center text-base-400">
              {userData?.bio}
            </div>
          </div>
        </div>
      </div>
      <Aside
        topHead={`About ${displayName}`}
        topBody={userData?.bio}
        bottomArray={[
          { title: "Id", value: userDataLoading ? "##" : userData?.id },
          { title: "Income", value: 1416 },
          { title: "Email", value: email },
          { title: "Phone no", value: userData?.phoneNumber },
        ]}
      />
    </div>
  );
};

export default ViewProfile;