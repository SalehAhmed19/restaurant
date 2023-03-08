import React from "react";
import { Fade } from "react-reveal";
import logo from "../../Assets/logo.svg";

const Footer = () => {
  return (
    <Fade up>
      <div className="p-10 flex items-center justify-between">
        <img src={logo} alt="" />
        <p>&copy; All Rights Reserved by Saleh Ahmed Mahin</p>
      </div>
    </Fade>
  );
};

export default Footer;
// bg-[#F7C531]
