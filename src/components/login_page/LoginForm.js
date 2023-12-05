import React, { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addUser } from "../../redux/slices/userSlice";
import ProgressSpinner from "../ProgressSpinner";
import { useSelector } from "react-redux";
import SIGN_IN_LANG from "../../utils/languages/LogIn/LoginLangConstant";
const LoginForm = () => {
  const langKey = useSelector((state) => state.config.language);
  return (
    <div className="p-5 pb-36 border-b mt-10  border-gray-400 md:w-[650px] md:mt-20 lg:mt-40">
      <FormTitle langKey={langKey} />
      <FormBody langKey={langKey} />
      <FormFooter langKey={langKey} />
    </div>
  );
};

const FormTitle = ({ langKey }) => {
  return (
    <div>
      <h2 className="m-2 text-2xl font-semibold text-white">
        {SIGN_IN_LANG[langKey].signInText}
      </h2>
    </div>
  );
};

const FormBody = ({ langKey }) => {
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
        placeholder={SIGN_IN_LANG[langKey].emailPlaceHolder}
      />
      <input
        id="password-input-box"
        ref={password}
        className="p-3 m-2 bg-gray-700 rounded-md text-white"
        type="password"
        placeholder={SIGN_IN_LANG[langKey].passwordPlaceHolder}
      />
      {errorMsg && (
        <p className="text-red-600 ml-3 font-bold text-sm">!{errorMsg}</p>
      )}

      {<ProgressSpinner showSpinner={showSpinner} />}
      <button
        className="p-3 bg-red-600 m-2 mt-4 font-semibold text-white rounded-md"
        onClick={signInHandler}
      >
        {SIGN_IN_LANG[langKey].signInText}
      </button>
    </form>
  );
};

const FormFooter = ({ langKey }) => {
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
            {SIGN_IN_LANG[langKey].rememberMe}
          </label>
        </form>
        <span>{SIGN_IN_LANG[langKey].needHelp}</span>
      </div>
      <div className="mt-3">
        <span>{SIGN_IN_LANG[langKey].newToNetflix} </span>
        <span
          className="text-white hover:cursor-pointer"
          onClick={SignUpNowClickHandler}
        >
          {SIGN_IN_LANG[langKey].signUpNow}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-sm ">{SIGN_IN_LANG[langKey].securityMsg}</span>
        <span className="text-blue-700">{SIGN_IN_LANG[langKey].learnMore}</span>
      </div>
    </div>
  );
};

export default LoginForm;
