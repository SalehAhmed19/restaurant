import React from "react";
import { Fade } from "react-reveal";
import logo from "../../Assets/kayi.png";

const Footer = () => {
  return (
    <Fade up>
      <div className="p-10 flex flex-col lg:flex-row items-center justify-between mt-auto border-t">
        <img className="w-36" src={logo} alt="" />
        <div>
          <p>&copy; All Rights Reserved</p>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
// bg-[#F7C531]
