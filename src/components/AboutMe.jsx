import React from "react";
import Header from "./Header";
import php from "../assets/images/php.png";
import laravel from "../assets/images/laravel-.png";
import react from "../assets/images/react-js.png";
import next from "../assets/images/next.png";
import me from "../assets/images/sitting.png";
import profile1 from "../assets/images/profile1.png";

import Skill from "./Skill";
import SubHeader from "./SubHeader";

export default function AboutMe() {
  const skills = [
    { name: "PHP" },
    { name: "Laravel" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "HTML/CSS" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
  ];
  return (
    <div className="md:my-36 grid md:grid-cols-2" id="home">
      <div className="hidden md:block">
        <div className="flex justify-center items-center">
          <div className="">
            <img
              src={profile1}
              alt="May Thu Aung"
              width={"100%"}
              className="w-[100%] bg-[#D0C9FE] flex justify-center items-center rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <SubHeader>May Thu Aung</SubHeader>
        <div className="mt-5">
          <h1 className="text-5xl font-bold text-left leading-10 font-[#0D0836]">
            Full Stack Developer with 3+ yoe
          </h1>

          <div className="my-10">
            <div className="flex flex-wrap gap-4 mt-3 items-center">
              {skills.map((skill) => (
                <Skill key={skill.name}>{skill.name}</Skill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
