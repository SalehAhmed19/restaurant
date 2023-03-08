import React from "react";
import { Fade, Zoom } from "react-reveal";
import team1 from "../../Assets/team-1.png";
import team2 from "../../Assets/team-2.png";
import team3 from "../../Assets/team-3.png";
import team4 from "../../Assets/team-4.png";
import teamBg from "../../Assets/team-bg.png";

const Teams = () => {
  const teams = [
    { _id: 1, name: "Paul Trueman", designation: "Chef", img: team1 },
    { _id: 2, name: "Emma Newman", designation: "Assistant chef", img: team2 },
    { _id: 3, name: "Oscar Oldman", designation: "Chef", img: team3 },
    { _id: 4, name: "Ed Freeman", designation: "Assistant chef", img: team4 },
  ];
  return (
    <div className="p-20">
      <Fade down>
        <h2 className="text-4xl font-bold ">They will cook for you</h2>
        <p className="text-[#6F6F87] mt-10 mb-14">
          Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci quo
          modi.
        </p>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {teams.map((team) => (
          <Zoom>
            <div>
              <div
                style={{
                  background: `url(${teamBg})`,
                  backgroundSize: "cover",
                }}
              >
                <img src={team.img} alt="" />
              </div>
              <div className="my-5">
                <Fade up>
                  <h4 className="text-center font-bold">{team.name}</h4>
                  <p className="text-center text-[#6F6F87]">
                    {team.designation}
                  </p>
                </Fade>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Teams;
