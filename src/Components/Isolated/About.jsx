import React from "react";
import { Fade, Zoom } from "react-reveal";
import interior from "../../Assets/interior.png";

const About = () => {
  const data = [
    {
      _id: 1,
      title: "We are located in the city center",
      des: "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.",
      number: "01",
    },
    {
      _id: 2,
      title: "Fresh, organic ingredients",
      des: "Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi.",
      number: "02",
    },
    {
      _id: 3,
      title: "Own fast delivery",
      des: "Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit.",
      number: "03",
    },
  ];
  return (
    <div className="flex ml-20 pr-20 bg-[#F9FAFC] pb-20">
      <div className="relative">
        <Zoom>
          <img className="w-[500px]" src={interior} alt="" />
          <div className="p-5 bg-[#fff] inline-block absolute z-20 bottom-0 -right-7 shadow-lg">
            <div
              style={{ border: "2px dashed #F2F3F5" }}
              className="flex flex-col justify-center items-center p-5"
            >
              <h2
                className="text-6xl"
                style={{ fontFamily: "'Monoton', cursive" }}
              >
                17
              </h2>
              <p className="font-bold text-center">
                Years <br /> Experiense
              </p>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="p-10">
        <h2 className="font-bold text-4xl">
          We are doing more than <br /> you expect
        </h2>
        <div>
          {data.map((d) => (
            <Fade down>
              <div key={d._id} className="flex my-14">
                <div>
                  <h2
                    style={{ fontFamily: "'Monoton', cursive" }}
                    className="text-4xl mx-5 text-[#F5C334]"
                  >
                    {d.number}
                  </h2>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-4">{d.title}</h3>
                  <p className="text-[#6F6F87]">{d.des}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
