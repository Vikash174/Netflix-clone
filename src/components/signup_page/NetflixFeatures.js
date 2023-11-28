import React from "react";

const NetflixFeatures = () => {
  return (
    <div className="bg-black text-white">
      <EnjoyOnYourTv />
      <DownloadToWatchOffline />
      <WatchEveryWhere />
      <CreateProfileForKids />
    </div>
  );
};

const EnjoyOnYourTv = () => {
  return (
    <div className="flex flex-col items-center p-3 text-center border-b-[8px] border-gray-800 md:flex-row md:justify-evenly md:text-start">
      <div className="p-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          Enjoy on your TV
        </h2>

        <span className=" font-semibold md:text-xl">
          Watch on samrt TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
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

const DownloadToWatchOffline = () => {
  return (
    <div className="flex flex-col items-center p-3 text-center  border-b-[8px] border-gray-800 md:flex-row-reverse md:justify-evenly md:text-start">
      <div className="p-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          Download your shows to watch offline
        </h2>

        <span className=" font-semibold md:text-xl">
          Save your favorites easily and always have something to watch.
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
const WatchEveryWhere = () => {
  return (
    <div className="flex flex-col items-center p-3 text-center  border-b-[8px] border-gray-800 md:flex-row md:justify-evenly md:text-start">
      <div className="p-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          Watch everywhere
        </h2>

        <span className="font-semibold md:text-xl">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
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
const CreateProfileForKids = () => {
  return (
    <div className="flex flex-col items-center p-3 text-center  border-b-[8px] border-gray-800 md:flex-row-reverse md:justify-evenly md:text-start">
      <div className="pt-5 lg:w-[500px]">
        <h2 className="font-bold text-2xl  mt-10 md:text-4xl md:mt-0">
          Create profiles for kids
        </h2>

        <span className="font-semibold md:text-xl">
          Send children on adventures with their favourite characters in a space
          made just for them-free with your membership.
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
