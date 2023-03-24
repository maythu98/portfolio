import React from "react";
import profile1 from "../assets/images/profile.png";
import Skill from "./Skill";
import SubHeader from "./SubHeader";

export default function AboutMe() {
  const skills = [
    { name: "PHP" },
    { name: "Laravel" },
    { name: "MySQL" },
    { name: "HTML/CSS" },
    { name: "Javascript" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Typescript" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
  ];

  return (
    <div className="min-h-[80vh] grid md:grid-cols-2" id="home">
      <div className="hidden md:flex md:justify-center">
        <div className="flex justify-center items-center">
          <div>
            <img
              src={profile1}
              alt="May Thu Aung"
              width={"100%"}
              className="w-[100%] bg-[#D0C9FE] rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <SubHeader>May Thu Aung</SubHeader>
        <div className="mt-5">
          <h1 className="text-5xl font-bold text-left leading-relaxed font-[#0D0836]">
            A full stack developer with 3+ years of experience
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
