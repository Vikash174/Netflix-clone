import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { changeLanguage } from "../redux/slices/configSlice";
import HEADER_LANG from "../utils/languages/header/HeaderLangConstants";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const langKey = useSelector((state) => state.config.language);

  const aiBtnClickHandler = () => {
    location.pathname === "/gpt-search"
      ? navigate("/browse")
      : navigate("/gpt-search");
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

  const LanguageChangeHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex items-center justify-between absolute p-1 z-50  w-screen">
      <div className="flex items-center">
        <img
          className="w-28 p-1 sm:w-36 md:w-40 lg:w-72"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      {
        <div className="flex items-center">
          {(location.pathname === "/logIn" || location.pathname === "/") && (
            <div className="text-black">
              {
                <FontAwesomeIcon
                  icon={faLanguage}
                  size="sm"
                  style={{ color: "#f2f2f2" }}
                />
              }
              <select className="text-sm" onChange={LanguageChangeHandler}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    className="text-sm"
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {location.pathname === "/" && (
            <>
              <button
                className="text-white p-1 m-1 font-semibold bg-red-600 rounded-[5px] lg:text-xl lg:p-2 lg:m-4 lg:w-[100px]"
                onClick={signInClickHandler}
              >
                {HEADER_LANG[langKey].signIn}
              </button>
            </>
          )}
        </div>
      }
      {(location.pathname === "/gpt-search" ||
        location.pathname === "/browse") && (
        <div className="text-white flex bg-black p-1 items-center sm:mr-2 lg:mr-4">
          <div className="text-black">
            {
              <FontAwesomeIcon
                icon={faLanguage}
                size="xl"
                style={{ color: "#f2f2f2" }}
              />
            }{" "}
            <select onChange={LanguageChangeHandler}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="border border-white p-1 m-1 rounded-lg text-[0.5rem] bg-red-600 sm:text-[0.7rem] lg:text-lg">
            <button className="ml-2" onClick={aiBtnClickHandler}>
              {location.pathname === "/browse"
                ? HEADER_LANG[langKey].aiRecommendation
                : HEADER_LANG[langKey].homePage}
            </button>
          </div>
          <button
            className="border border-white p-1 rounded-lg text-[0.5rem] bg-red-600 sm:text-[0.7rem] lg:text-lg"
            onClick={signOutHandler}
          >
            {HEADER_LANG[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
