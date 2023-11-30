import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export const Header = (props) => {
  const { isSignUp, isBrowse } = props;

  const navigate = useNavigate();

  const signInClickHandler = () => {
    navigate("/logIn");
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/logIn");
      })
      .catch((error) => {
        // An error happened.
      });
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
      {isSignUp && (
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
      )}
      {isBrowse && (
        <div className="text-white ">
          <button
            className="p-1 border border-white bg-black ml-20 sm:ml-[300px] md:ml-[399px] lg:ml-[400px] lg:text-xl lg:p-1 xl:ml-[680px] 2xl:ml-[1320px]"
            onClick={signOutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
