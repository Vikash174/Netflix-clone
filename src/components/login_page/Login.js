import React from "react";
import LoginForm from "./LoginForm";
import LogInFooter from "./LogInFooter";
import Header from "../Header";
import GuestLogin from "./GuestLogin";

const Login = () => {
  return (
    <div className="bg-black flex flex-col h-[100vh] justify-between items-center">
      <Header isSignUp={false} isBrowse={false} />
      <LoginBody />
      <GuestLogin />
      <LogInFooter />
    </div>
  );
};
const LoginBody = () => {
  return <LoginForm />;
};
export default Login;
