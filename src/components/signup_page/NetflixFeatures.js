import React from "react";
import { useSelector } from "react-redux";
import SIGN_UP_LANGUAGE from "../../utils/languages/SignUP/SignUpLangConstant";
import {
  CREATE_PROFILE_KID_IMG_URL,
  DOWNLOAD_OFFLINE_IMG_URL,
  ENJOY_YOUR_TV_IMG_URL,
  WATCH_EVERYWHERE_IMG_URL,
} from "../../utils/constant";

const NetflixFeatures = () => {
  const langKey = useSelector((state) => state.config.language);
  return (
    <div className="bg-black text-white">
      <EnjoyOnYourTv langKey={langKey} />
      <DownloadToWatchOffline langKey={langKey} />
      <WatchEveryWhere langKey={langKey} />
      <CreateProfileForKids langKey={langKey} />
    </div>
  );
};

const EnjoyOnYourTv = ({ langKey }) => {
  return (
    <div className="flex flex-col items-center p-3 text-center border-b-[8px] border-gray-800 md:flex-row md:justify-evenly md:text-start">
      <div className="p-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureEnjoyOnYourTvHeadingText}
        </h2>

        <span className=" font-semibold md:text-xl">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureEnjoyOnYourTvSpanText}
        </span>
      </div>
      <div>
        <img src={ENJOY_YOUR_TV_IMG_URL} alt="IV and Remote" />
      </div>
    </div>
  );
};

const DownloadToWatchOffline = ({ langKey }) => {
  return (
    <div className="flex flex-col items-center p-3 text-center  border-b-[8px] border-gray-800 md:flex-row-reverse md:justify-evenly md:text-start">
      <div className="p-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureDownloadOfflineHeadingText}
        </h2>

        <span className=" font-semibold md:text-xl">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureDownloadOfflineTvSpanText}
        </span>
      </div>
      <div>
        <img
          src={DOWNLOAD_OFFLINE_IMG_URL}
          alt={`girl wallpaper on mobile screen`}
        />
      </div>
    </div>
  );
};
const WatchEveryWhere = ({ langKey }) => {
  return (
    <div className="flex flex-col items-center p-3 text-center  border-b-[8px] border-gray-800 md:flex-row md:justify-evenly md:text-start">
      <div className="p-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureWatchEveryWhereHeadingText}
        </h2>

        <span className="font-semibold md:text-xl">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureWatchEveryWhereSpanText}
        </span>
      </div>
      <div>
        <img
          src={WATCH_EVERYWHERE_IMG_URL}
          alt="mobile, tablet and apple monitor"
        />
      </div>
    </div>
  );
};
const CreateProfileForKids = ({ langKey }) => {
  return (
    <div className="flex flex-col items-center p-3 text-center  border-b-[8px] border-gray-800 md:flex-row-reverse md:justify-evenly md:text-start">
      <div className="pt-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          {
            SIGN_UP_LANGUAGE[langKey]
              .NetflixFeatureCreateProfileForKidsHeadingText
          }
        </h2>

        <span className="font-semibold md:text-xl">
          {SIGN_UP_LANGUAGE[langKey].NetflixFeatureCreateProfileForKidsSpanText}
        </span>
      </div>
      <div>
        <img src={CREATE_PROFILE_KID_IMG_URL} alt="boy and girl with dog" />
      </div>
    </div>
  );
};

export default NetflixFeatures;
