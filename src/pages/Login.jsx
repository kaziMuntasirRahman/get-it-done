import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthFooterLinks, Divider, GitHubLoginButton, GoogleLoginButton, InputBox, LeftLogo, RightSide, SubmitButton } from '../components/AuthPageComponent';
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const response = await logIn(email, password)
    if (response.email) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You're successfully signed in to GetItDone!",
        text: "Start browsing or offering services now.",
        showConfirmButton: false,
        timer: 2500
      });
      navigate('/');
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "We couldn't sign you in. Please try again.",
        footer: '<a href="#">Need help signing in?</a>'
      });
    }
  }

  return (
    <div className="p-10 flex items-start h-screen">
      <Helmet>
        <title>Sign In • GetItDone</title>
      </Helmet>
      <LeftLogo />
      <form onSubmit={handleLogin} className="w-[448px] mx-auto flex flex-col mt-24">
        <h1 className="section-title">
          Sign In your Account</h1>
        {/* auth sign in  */}
        <section className="w-full flex gap-2">
          <GitHubLoginButton />
          <GoogleLoginButton />
        </section>
        <Divider />
        <InputBox label="Email" type="email" autoFocus={true} setInputValue={setEmail} />
        <InputBox label="Password" type="password" setInputValue={setPassword} />
        <div className="flex justify-end mb-6">
          <AuthFooterLinks text="Need an Account?" address="/signup" />
        </div>
        <SubmitButton text="Sign In" />
      </form>
      <RightSide />
    </div>);
};

export default Login;