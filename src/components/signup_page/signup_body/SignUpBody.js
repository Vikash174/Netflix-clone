import React from "react";
import SignUpBGImage from "./SignUpBGImage";
import EmailInputSection from "./EmailInputSection";
import NetflixFeatures from "../NetflixFeatures";
import FrequentlyAskedQuestion from "../frequently_asked_questions/FrequentlyAskedQuestion";
import EmailForm from "./EmailForm";

const SignUpBody = () => {
  return (
    <div>
      <SignUpBGImage />
      <EmailInputSection />
      <NetflixFeatures />
      <FrequentlyAskedQuestion />
      <EmailForm />
    </div>
  );
};

export default SignUpBody;
