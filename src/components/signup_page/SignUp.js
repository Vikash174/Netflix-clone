import React from "react";
import Header from "../Header";
import SignUpBody from "./signup_body/SignUpBody";

const SignUp = () => {
  return (
    <div className="bg-black">
      <Header isSignUp={true} isBrowse={false} />
      <SignUpBody />
    </div>
  );
};

export default SignUp;
