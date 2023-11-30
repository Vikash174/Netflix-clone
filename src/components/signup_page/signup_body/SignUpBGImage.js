import React from "react";
import { BG_IMAGE_URL } from "../../../utils/constant";

const SignUpBGImage = () => {
  return (
    <div className="bg-gradient-to-b from-black ">
      <img
        className="scale-x-150 h-[90vh] shadow-inner  shadow-black opacity-50 w-[80%]"
        src={BG_IMAGE_URL}
        alt="background_image"
      />
    </div>
  );
};

export default SignUpBGImage;
