import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import lang from "../../utils/languageConstant";
const GPTSearch = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const developerJobStatus = useSelector(
    (state) => state.config.developerJobStatus
  );

  useEffect(() => {
    if (user === null) {
      navigate("/logIn");
    }
  }, [navigate, user]);

  return (
    <div className="flex flex-col items-center bg-black h-[100vh] text-white">
      {" "}
      <Header />
      <SearchBar />
      {developerJobStatus && <JobStatusComponent />}
      {/* <GPTMoviesContainer /> */}
    </div>
  );
};

const JobStatusComponent = () => {
  const langKey = useSelector((state) => state.config.language);
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Job Status</h1>
      <p className="text-gray-700">{lang[langKey].developerJobStatusP1}</p>
      <img
        className="mt-6 w-full h-48 object-cover object-center"
        src="https://beapythondev.files.wordpress.com/2020/01/canva-man-working-with-computer-on-the-beach.-freelancer-working.jpg?w=800"
        alt="Unemployed Developer"
      />
      <p className="mt-4 text-gray-700">{lang[langKey].developerJobStatusP2}</p>
      <div className="flex justify-end mt-4">
        <a
          href="https://www.linkedin.com/in/vikash-rai-b1a2111a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {lang[langKey].connectOnLinkedIn}
        </a>
      </div>
    </div>
  );
};

export default GPTSearch;
