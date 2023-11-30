import React from "react";
import EmailForm from "./EmailForm";

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

export default EmailInputSection;
