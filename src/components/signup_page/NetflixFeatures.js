import React from "react";
import { useSelector } from "react-redux";
import SIGN_UP_LANGUAGE from "../../utils/languages/SignUP/SignUpLangConstant";

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
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
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
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
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
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt=""
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
        <img
          src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          alt=""
        />
      </div>
    </div>
  );
};

export default NetflixFeatures;
