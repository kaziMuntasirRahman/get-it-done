import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthFooterLinks, Divider, FooterText, GitHubLoginButton, GoogleLoginButton, InputBox, LeftLogo, RightSide, SubmitButton } from '../components/AuthPageComponent';
import { AuthContext } from "../providers/AuthProvider";


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault()
    // console.log(name, email, password, photoURL);
    const response = await createUser(name, email, password, photoURL);
    if (response.email) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You're successfully signed in to GetItDone!",
        text: "Start browsing or offering services now.",
        showConfirmButton: false,
        timer: 2500
      });
      setTimeout(() => navigate('/'), 1500)
      const { phoneNumber, metadata } = response;
      const modifiedUser = {
        displayName: name,
        email,
        photoURL,
        phoneNumber,
        createdAt: metadata.createdAt,
        lastLoginAt: metadata.lastLoginAt,
        password
      };
      const result = await axios.post('https://get-it-done-server.vercel.app/user', modifiedUser);
      console.log(result.data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "We couldn't sign you in. Please try again.",
        footer: response.message
      });
    }
  }
  return (
    <div className="p-10 flex items-start h-screen gap-5">
      <Helmet>
        <title>Sign Up • GetItDone</title>
      </Helmet>
      <LeftLogo />
      <form onSubmit={handleRegistration} className="w-[448px] mx-auto flex flex-col h-full">
        <h1 className="section-title">
          Sign up for an Account</h1>
        {/* auth sign in  */}
        <section className="w-full flex gap-2">
          <GitHubLoginButton />
          <GoogleLoginButton />
        </section>
        <Divider />
        <InputBox label="Name" type="text" autoFocus={true} setInputValue={setName} />
        <InputBox label="Email" type="email" setInputValue={setEmail} />
        <InputBox label="Password" type="password" setInputValue={setPassword} />
        <InputBox label="PhotoURL" type="text" setInputValue={setPhotoURL} />
        <div className="flex justify-between mb-6">
          <AuthFooterLinks text="Forget Your Password?" />
          <AuthFooterLinks text="Have an Account?" address="/signin" />
        </div>
        <SubmitButton text="Create My Account" />
        <FooterText />
      </form>
      <RightSide />
    </div>
  );
};

export default Registration;
