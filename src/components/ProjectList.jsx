import React from "react";
import Header from "./Header";
import ProjectBox from "./ProjectBox";
import pyoneplay from "../assets/images/pyoneplay.png";
import athinchei from "../assets/images/athinchei.png";
import sms from "../assets/images/sms.png";
import Skill from "./Skill";

export default function ProjectList() {
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
    <div className="my-20" id="projects">
      <Header>Projects</Header>
      <div className="mt-10 flex flex-col gap-8">
        <ProjectBox title="Pyone Play" image={pyoneplay}>
          <p className="project-desc text-desc">
            Pyone Play is Myanamar's 1st popular online TV video platform.
            People can watch Live local TV channel and replay tv on demand,
            anytime, anywhere. I worked on frontend development. Closely work
            with other backend developer and a team lead to deliver a quality
            product within tide timeline.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            {skills.map((skill) => (
              <Skill>{skill.name}</Skill>
            ))}
          </div>
        </ProjectBox>
        <ProjectBox title="Athinchei" image={athinchei} position="left">
          <p className="project-desc text-desc">
            Athinchei is a digital platform to sell & buy digital products. This
            project was developed by me and the team lead developer. I developed
            both frontend website and backend dashboard and API with the mentor
            of team leader.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {skills.map((skill) => (
              <Skill>{skill.name}</Skill>
            ))}
          </div>
        </ProjectBox>
        <ProjectBox title="SMS Service System" image={sms}>
          <p className="project-desc text-desc">
            This system is to support sms service to business clients. I
            developed the whole backend system with the mentor of the team
            leader.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {skills.map((skill) => (
              <Skill>{skill.name}</Skill>
            ))}
          </div>
        </ProjectBox>
      </div>
    </div>
  );
}
