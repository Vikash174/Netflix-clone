import React, { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addUser } from "../../redux/slices/userSlice";
import ProgressSpinner from "../ProgressSpinner";
const LoginForm = () => {
  return (
    <div className="p-5 pb-36 border-b mt-10  border-gray-400 md:w-[650px] md:mt-20 lg:mt-40">
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const signInHandler = () => {
    setShowSpinner(true);

    //Validate the form data
    const msg = checkValidData(email.current.value, password.current.value);
    // console.log(msg);
    setErrorMsg(msg);
    if (errorMsg !== null) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("user signed in sucessfuly", user);
        dispatch(addUser({ uid: user.uid, email: user.email }));
        setShowSpinner(false);
        navigate("/browse");

        // ...
      })
      .catch((error) => {
        setShowSpinner(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " " + errorMessage);
      });
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

      {<ProgressSpinner showSpinner={showSpinner} />}
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
  const navigate = useNavigate();

  const SignUpNowClickHandler = () => {
    navigate("/");
  };
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
        <span
          className="text-white hover:cursor-pointer"
          onClick={SignUpNowClickHandler}
        >
          Sign up now
        </span>
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
