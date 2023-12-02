import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faBrain } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
  const { isSignUp, isBrowse } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const aiBtnClickHandler = () => {
    navigate("/gpt-search");
  };

  const signInClickHandler = () => {
    navigate("/logIn");
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/logIn");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex items-center justify-between absolute p-1 z-50  w-screen">
      <div className="">
        <img
          className="w-28 p-1 sm:w-36 md:w-40 lg:w-72"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      {isSignUp && (
        <div className="flex items-center mr-10">
          <div className="text-black">
            {
              <FontAwesomeIcon
                icon={faLanguage}
                size="xl"
                style={{ color: "#f2f2f2" }}
              />
            }{" "}
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <button
            className="text-white p-1 m-1 font-semibold bg-red-600 rounded-[5px] lg:text-xl lg:p-2 lg:m-4 lg:w-[100px]"
            onClick={signInClickHandler}
          >
            Sign In
          </button>
        </div>
      )}
      {isBrowse && (
        <div className="text-white flex bg-black p-1 mr-5 items-center">
          <div className="border border-white p-2 m-2 rounded-lg">
            <FontAwesomeIcon icon={faBrain} />
            <button className="ml-2" onClick={aiBtnClickHandler}>
              AI Recommendation
            </button>
          </div>
          <button
            className="border border-white p-2 m-2 rounded-lg"
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
