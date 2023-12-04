import React, { useRef, useState } from "react";
import { checkValidData } from "../../../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addUser } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import ProgressSpinner from "../../ProgressSpinner";
import SIGN_UP_LANGUAGE from "../../../utils/languages/SignUP/SignUpLangConstant";

export const EmailForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpFormValidationErrorMsg, setSignUpFormValidationErrorMsg] =
    useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const langKey = useSelector((state) => state.config.language);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        dispatch(
          // dispatching the action to update the redux store
          addUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
          })
        );
        setShowSpinner(false);
        navigate("/browse");
      })
      .catch((error) => {
        setShowSpinner(false);
        const errorMessage = error.message;
        setSignUpFormValidationErrorMsg(errorMessage);
      });
  };

  const signUpClickHandler = () => {
    setShowSpinner(true);
    // validate the data
    const msg = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setSignUpFormValidationErrorMsg(msg);
    if (signUpFormValidationErrorMsg !== null) return;

    // Create a new user with email & password
    createUser(email.current.value, password.current.value);
  };

  return (
    <div className="flex flex-col items-center gap-5 p-2 sm:mt-10 md:mt-5 md:p-5 lg:p-10 text-center text-white">
      <div>
        <span className="p-1 md:p-5 text-lg font-[300px] lg:text-2xl ">
          {SIGN_UP_LANGUAGE[langKey].EmailFormSpan1};
        </span>
      </div>
      <div>
        <form
          className="flex flex-col gap-5 border border-white p-2 bg-black "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={name}
            className="p-3 bg-black w-80 md:w-96 lg:p-5 lg:w-[700px] border border-white"
            type="text"
            placeholder={SIGN_UP_LANGUAGE[langKey].EmailFormNamePlaceHolder}
          />
          <input
            ref={email}
            className="p-3 bg-black w-80 md:w-96 lg:p-5 lg:w-[700px] border border-white"
            type="email"
            placeholder={SIGN_UP_LANGUAGE[langKey].EmailFormEmailPlaceHolder}
          />
          <input
            ref={password}
            className="p-3 bg-black w-80 md:w-96 lg:p-5 lg:w-[700px] border border-white"
            type="password"
            placeholder={SIGN_UP_LANGUAGE[langKey].EmailFormPasswordPlaceHolder}
          />
          {signUpFormValidationErrorMsg && (
            <p className="text-red-500 font-bold text-[0.7rem]">
              !{signUpFormValidationErrorMsg}
            </p>
          )}
          {<ProgressSpinner showSpinner={showSpinner} />}
          <button
            className=" m-5 p-2 bg-red-600 font-semibold md:text-lg lg:text-2xl lg:p-4"
            onClick={signUpClickHandler}
          >
            {SIGN_UP_LANGUAGE[langKey].EmailFormSubmitBtnPlaceHolder}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
