import React from "react";
import { LOGO_URL } from "../../utils/utils";
import LoginForm from "./LoginForm";
import LogInFooter from "./LogInFooter";

const Login = () => {
  return (
    <div className="bg-black flex flex-col h-[100vh] justify-between ">
      <LoginHeaer />
      <LoginBody />
      <LogInFooter />
    </div>
  );
};

const LoginHeaer = () => {
  return (
    <div>
      <img className="w-28" src={LOGO_URL} alt="logo" />
    </div>
  );
};

const LoginBody = () => {
  return <LoginForm />;
};
export default Login;
