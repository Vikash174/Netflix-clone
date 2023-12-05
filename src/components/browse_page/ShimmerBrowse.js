import React from "react";

const ShimmerBrowse = () => {
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center gap-10 ">
      <div className="bg-gray-600 w-[90%] h-[50vh] mt-32 flex flex-col gap-5 justify-end ">
        <div className="flex justify-between items-center">
          <div className="ml-10">
            <div className="bg-slate-500 h-[150px] w-[250px] m-2"></div>
            <div className="bg-slate-500 h-[50px] w-[100px] m-2"></div>
            <div className=" h-[50px] w-[100px] m-2"></div>
          </div>

          <div className="bg-slate-500 w-44 h-6"></div>
        </div>
      </div>

      <div className="bg-gray-600 w-[90%] h-10 mt-6"></div>
      <div className="bg-gray-600 w-[90%] h-10 mt-6"></div>
      <div className="bg-gray-600 w-[90%] h-5 mt-6"></div>
      {/*<div className="bg-gray-600 w-[90%] h-5 mt-6"></div>
      <div className="bg-gray-600 w-[90%] h-5 mt-6"></div>
      <div className="bg-gray-600 w-[90%] h-5 mt-6"></div> */}
    </div>
  );
};

export default ShimmerBrowse;
