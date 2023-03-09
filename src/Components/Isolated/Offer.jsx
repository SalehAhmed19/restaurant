import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import burger from "../../Assets/burger.png";
import drink from "../../Assets/drink.png";

const Offer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mx-20 my-20">
      <Zoom>
        <div className="flex justify-between bg-[#F9FAFC]">
          <div className="p-5">
            <h2 className="font-bold text-6xl">- 50 %</h2>
            <h4 className="font-bold tex-2xl my-2">
              Discount for all* burgers!
            </h4>
            <p className="text-[#6F6F87] my-2">*Et modi itaque praesentium.</p>
            <Link to="/our-menu">
              <button className="flex items-center lg:px-6 px-3 bg-[#F5C332] lg:py-2">
                Get it now
              </button>
            </Link>
          </div>
          <div>
            <img className="w-80" src={burger} alt="" />
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="flex justify-between bg-[#F9FAFC]">
          <div className="p-5">
            <h2 className="font-bold text-6xl">- 50 %</h2>
            <h4 className="font-bold tex-2xl my-2">
              Discount for all* burgers!
            </h4>
            <p className="text-[#6F6F87] my-2">*Et modi itaque praesentium.</p>
            <Link to="/our-menu">
              <button className="flex items-center lg:px-6 px-3 bg-[#F5C332] lg:py-2">
                Get it now
              </button>
            </Link>
          </div>
          <div>
            <img className="w-36 mr-10" src={drink} alt="" />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Offer;
