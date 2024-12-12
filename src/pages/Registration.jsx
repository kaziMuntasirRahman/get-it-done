import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthFooterLinks, Divider, FooterText, GitHubLoginButton, GoogleLoginButton, InputBox, LeftLogo, RightSide, SubmitButton } from "./AuthPageComponent";


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault()
    console.log(name, email, password, photoURL);
  }
  return (
    <div className="p-10 flex items-start h-screen">
      <Helmet>
        <title>Sign Up • GetItDone</title>
      </Helmet>
      <LeftLogo />
      <form onSubmit={handleRegistration} className="w-[448px] mx-auto flex flex-col h-full">
        <h1 className="formTitle">
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
