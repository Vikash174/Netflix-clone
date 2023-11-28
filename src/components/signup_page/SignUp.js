import React from "react";
import NetflixFeatures from "./NetflixFeatures";
import FrequentlyAskedQuestion from "./frequently_asked_questions/FrequentlyAskedQuestion";
import { BG_IMAGE_URL, LOGO_URL } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-black">
      <SignUpHeader />
      <SignUpBody />
    </div>
  );
};

const SignUpHeader = () => {
  const navigate = useNavigate();

  const signInClickHandler = () => {
    navigate("/logIn");
  };

  return (
    <div className="flex items-center justify-between absolute p-2 z-50 md:p-7">
      <div className="">
        <img
          className="w-28 p-1 sm:w-36 md:w-40 lg:w-72"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="text-white ">
        <button className="p-1 border border-white bg-black ml-20 sm:ml-[300px] md:ml-[399px] lg:ml-[400px] lg:text-xl lg:p-1 xl:ml-[680px] 2xl:ml-[1320px]">
          * English ^
        </button>
        <button
          className="p-1 m-1 font-semibold bg-red-600 rounded-[5px] lg:text-xl lg:p-2 lg:m-4 lg:w-[100px]"
          onClick={signInClickHandler}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

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

const SignUpBGImage = () => {
  return (
    <div className="bg-gradient-to-b from-black ">
      <img
        className="scale-x-150 h-[70vh] shadow-inner  shadow-black opacity-50 w-[80%]"
        src={BG_IMAGE_URL}
        alt="background_image"
      />
    </div>
  );
};

const EmailInputSection = () => {
  return (
    <div className="absolute top-28 left-4 text-white sm:top-48 md:top-56 md:left-24 lg:left-0 flex flex-col items-center xl:left-[200px] 2xl:left-[500px]">
      <div className="flex flex-col text-center ">
        <span className="font-bold text-3xl lg:text-4xl">
          Unlimited movies, TV shows and more
        </span>
        <span className="p-2 text-lg font-[400px] lg:text-2xl">
          Watch anywhere. Cancel anytime
        </span>
      </div>
      <EmailForm />
    </div>
  );
};

export const EmailForm = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-4 sm:mt-10 md:mt-5 md:p-5 lg:p-10 text-center text-white">
      <div>
        <span className="p-2 md:p-5 text-lg font-[300px] lg:text-2xl ">
          Ready to watch? Enter your email to create or restart your membership.
        </span>
      </div>
      <div>
        <div>
          <input
            className="p-3 bg-black w-80 md:w-96 lg:p-5 lg:w-[700px] border border-white"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div>
          <button className=" m-5 p-2 bg-red-600 font-semibold md:text-lg lg:text-2xl lg:p-4">{`Get Started >`}</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
