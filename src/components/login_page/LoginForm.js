import React, { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";

const LoginForm = () => {
  return (
    <div className="p-5 pb-36 border-b border-gray-400 md:w-[650px]">
      <FormTitle />
      <FormBody />
      <FormFooter />
    </div>
  );
};

const FormTitle = () => {
  return (
    <div>
      <h2 className="m-2 text-2xl font-semibold text-white">Sign In</h2>
    </div>
  );
};

const FormBody = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const signInHandler = () => {
    //Validate the form data
    const msg = checkValidData(email.current.value, password.current.value);
    // console.log(msg);
    setErrorMsg(msg);
  };

  return (
    <form className="flex flex-col " onSubmit={(e) => e.preventDefault()}>
      <input
        id="email-input-box"
        ref={email}
        className="p-3 m-2 bg-gray-700 rounded-md text-white"
        type="email"
        placeholder="Email or phone number"
      />
      <input
        id="password-input-box"
        ref={password}
        className="p-3 m-2 bg-gray-700 rounded-md text-white"
        type="password"
        placeholder="Password"
      />
      {errorMsg && (
        <p className="text-red-600 ml-3 font-bold text-sm">!{errorMsg}</p>
      )}
      <button
        className="p-3 bg-red-600 m-2 mt-4 font-semibold text-white rounded-md"
        onClick={signInHandler}
      >
        Sign In
      </button>
    </form>
  );
};

const FormFooter = () => {
  return (
    <div className="text-gray-400 p-1 m-2">
      <div className="flex justify-between">
        <form>
          <label id="remember-me" className="ml-1">
            <input id="rem" type="checkbox" />
            Remember me
          </label>
        </form>
        <span>Need help?</span>
      </div>
      <div className="mt-3">
        <span>New To Netflix? </span>
        <span className="text-white">Sign up now</span>
      </div>
      <div className="mt-4">
        <span className="text-sm ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
        <span className="text-blue-700">Learn more.</span>
      </div>
    </div>
  );
};

export default LoginForm;
