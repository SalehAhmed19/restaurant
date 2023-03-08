import React from "react";
import { CiBurger, CiPizza } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";
import { Fade, Zoom } from "react-reveal";
import phones from "../../Assets/phones.png";
import gplay from "../../Assets/googlePlay.svg";
import appstore from "../../Assets/appStore.svg";

const DownloadApp = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-5 lg:p-20 bg-[#F9FAFC]">
      <Fade left>
        <div>
          <h2 className="text-6xl font-bold">
            Download our <br /> mobile app.
          </h2>
          <p className="my-10 text-[#6F6F87]">
            Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
            quo modi.
          </p>
          <button>
            <img src={gplay} alt="" />
          </button>
          <button className="mx-5">
            <img src={appstore} alt="" />
          </button>
        </div>
      </Fade>
      <div className="relative">
        <Zoom forever={true}>
          <div className="flex justify-between absolute">
            <CiPizza className="text-6xl text-[#F2F3F5]" />
          </div>
        </Zoom>
        <Zoom forever={true}>
          <div className="flex justify-between absolute right-0 bottom-1/2">
            <CiBurger className="text-6xl text-[#F2F3F5]" />
          </div>
        </Zoom>
        <Zoom forever={true}>
          <div className="flex justify-between absolute left-0 bottom-0">
            <GiCakeSlice className="text-6xl text-[#F2F3F5]" />
          </div>
        </Zoom>
        <Zoom right>
          <img className="w-[700px] my-5" src={phones} alt="" />
        </Zoom>
      </div>
    </div>
  );
};

export default DownloadApp;
