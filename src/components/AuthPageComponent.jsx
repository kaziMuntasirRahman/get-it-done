// --------------------- auth page left side -------------------
import { Link, useNavigate } from "react-router-dom";
export const LeftLogo = () => {
  return (
    <Link to="/" className="flex items-center flex-col xl:flex-row gap-3">
      <img src="/images/logo.png" className="rounded-full size-12" alt="GetItDone Logo" />
      <h1 className="text-xl md:text-2xl font-bold text-purple-900">
        GetItDone
      </h1>
    </Link>
  )
}

// --------------------- GitHub login button -------------------
import { FaGithub } from "react-icons/fa";
export const GitHubLoginButton = () => {
  const { gitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGitHubSignIn = async () => {
    const response = await gitHubSignIn();
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
        ;
      const { displayName, email, photoURL, phoneNumber, metadata } = response;
      const modifiedUser = {
        displayName,
        email,
        photoURL,
        phoneNumber,
        createdAt: metadata.createdAt,
        lastLoginAt: metadata.lastLoginAt
      };
      const result = await axios.post('http://localhost:5000/user', modifiedUser);
      console.log(result.data);
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
    <div
      onClick={handleGitHubSignIn}
      className="btn w-1/2 flex items-center justify-center py-3.5 px-4 rounded-xl shadow-sm text-sm  font-medium whitespace-nowrap bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 border border-[#D7DFE9] focus:border-gray-300 ring-gray-200 focus:ring-gray-200 focus:ring-[3px] focus:outline-none gap-2 cursor-pointer">
      <FaGithub className="text-xl" />
      <p>Continue with GitHub</p>
    </div>
  );
};

// --------------------- Google login button -------------------
import axios from "axios";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

export const GoogleLoginButton = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const response = await googleSignIn();
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
        ;
      const { displayName, email, photoURL, phoneNumber, metadata } = response;
      const modifiedUser = {
        displayName,
        email,
        photoURL,
        phoneNumber,
        createdAt: metadata.createdAt,
        lastLoginAt: metadata.lastLoginAt
      };
      const result = await axios.post('http://localhost:5000/user', modifiedUser);
      console.log(result.data);
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
    <div
      onClick={handleGoogleSignIn}
      className="btn w-1/2 flex items-center justify-center py-3.5 px-4 rounded-xl shadow-sm text-sm  font-medium whitespace-nowrap bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 border border-[#D7DFE9] focus:border-gray-300 ring-gray-200 focus:ring-gray-200 focus:ring-[3px] focus:outline-none gap-2 cursor-pointer">
      <FcGoogle className="text-xl" />
      <p>Continue with Google</p>
    </div>
  );
};

// ----------------------------------------
export const Divider = () => {
  return (
    <section className="flex items-center gap-3 my-6">
      <div className="h-0 w-1/2 border-t" />
      <p>or</p>
      <div className="h-0 w-1/2 border-t" />
    </section>
  );
};

// ----------------------------------------
export const InputBox = ({ label, type, autoFocus = false, setInputValue, min, max, placeholder, defaultValue, required = false, value, disabled = false }) => {
  return (
    <label className="block text-sm font-medium mb-6">
      {label}
      <input
        type={type}
        autoFocus={autoFocus}
        min={min}
        max={max}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        // min={new Date().toISOString().split("T")[0]} // restrict to today's date and future dates
        className="mt-1.5 transition appearance-none block w-full p-3 rounded-xl shadow-sm border border-[#D7DFE9] hover:border-violet-200 focus:border-violet-300 bg-violet-50 bg-opacity-0 hover:bg-opacity-50 focus:bg-opacity-50 ring-violet-200 focus:ring-violet-200 focus:ring-[3px] focus:outline-none"
        required={required}
        onChange={e => setInputValue(e.target.value)}
      />
    </label>
  )
}

// large text submit box-------------------------
export const TextArea = ({ label, rows, setInputValue, defaultValue, required }) => {
  return (
    <div className="form-control col-span-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="mt-1.5 transition appearance-none block w-full p-3 rounded-xl shadow-sm border border-[#D7DFE9] hover:border-violet-200 focus:border-violet-300 bg-violet-50 bg-opacity-0 hover:bg-opacity-50 focus:bg-opacity-50 ring-violet-200 focus:ring-violet-200 focus:ring-[3px] focus:outline-none"
        placeholder={`Enter ${label}`}
        rows={rows}
        onChange={(e) => setInputValue(e.target.value)}
        defaultValue={defaultValue || ''}
        required={required}
      />
    </div>
  )
}

// -------------------------------------------
export const AuthFooterLinks = ({ text, address }) => {
  return (
    <Link to={address} className="text-violet-500 hover:text-violet-700 transition-colors text-left font-semibold cursor-pointer">
      {text}
    </Link>
  )
}
//-----------------------------------------
export const SubmitButton = ({ text = "Submit" }) => {
  return (
    <button className="btn btn-xl bg-violet-700 text-white w-full" type="submit">{text}</button>
  )
}
//-----------------------------------------
export const FooterText = () => {
  const linkStyle = ' underline underline-offset-2 decoration-1 decoration-navy-300 hover:text-violet-600 transition-all'
  return (
    <footer className="mx-auto mt-auto w-full max-w-md text-xs pt-6">
      <p className="text-center">
        By signing up you agree to our&nbsp;
        <a
          className={` ${linkStyle} `}
          href="/legal/terms-of-service/"
          target="_blank">
          terms of service
        </a>
        <span>&nbsp;and&nbsp;</span>
        <a
          className={` ${linkStyle} `}
          href="/legal/privacy-policy/"
          target="_blank">
          privacy policy
        </a>.
      </p>
    </footer>
  )
}
//---------------------------------------
export const RightSide = () => {
  return (
    <aside className="relative hidden lg:block lg:w-[28rem] xl:w-[32rem] h-screen p-16 -mt-10 -mr-10">
      <img src="/images/open-door-sidebar.jpg" className="absolute inset-0 max-w-none w-full h-full object-cover" />
      <blockquote className="relative z-20 text-2xl font-heading text-purple-900">
        <p className="leading-tight">Connect the world</p>
        <p className="leading-tight">Share your skills and services</p>
        <p className="leading-tight">Get things done right</p>
        <cite className="block not-italic text-xl mt-6">
          <span className="opacity-40">—</span>Inspired by&nbsp;
          <Link to='/' className="underline underline-offset-2 decoration-1 transition-colors decoration-purple-900/40 hover:text-purple-700 hover:decoration-purple-700">
            GetItDone
          </Link>
        </cite>
      </blockquote>
    </aside>
  );
};