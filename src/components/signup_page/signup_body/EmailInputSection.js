import React from "react";
import EmailForm from "./EmailForm";
import SIGN_UP_LANGUAGE from "../../../utils/languages/SignUP/SignUpLangConstant";
import { useSelector } from "react-redux";

const EmailInputSection = () => {
  const langKey = useSelector((state) => state.config?.language);

  return (
    <div className="absolute top-28 left-4 text-white sm:top-48 md:top-56 md:left-24 lg:left-20 flex flex-col items-center xl:left-[200px] 2xl:left-[500px]">
      <div className="flex flex-col text-center ">
        <span className="font-bold text-3xl lg:text-4xl">
          {SIGN_UP_LANGUAGE[langKey].EmailInputSectionSpan1}
        </span>
        <span className="p-2 text-lg font-[400px] lg:text-2xl">
          {SIGN_UP_LANGUAGE[langKey].EmailInputSectionSpan2}
        </span>
      </div>

      <EmailForm />
    </div>
  );
};

export default EmailInputSection;
