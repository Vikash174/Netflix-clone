import React from "react";
const LogInFooter = () => {
  return (
    <div className="p-4 text-gray-400 bg-black w-screen flex flex-col items-center">
      <h4 className="p-2">Questions? Call 00-0000-000-000</h4>
      <div className="p-2 grid grid-cols-2 text-[0.8rem] ">
        <span>FAQ</span>
        <span>Terms of Use</span>
        <span>Cookie Preferences</span>
        <span>Help Centre</span>
        <span>Privacy</span>
        <span>Corporate Information</span>
      </div>
    </div>
  );
};

export default LogInFooter;
