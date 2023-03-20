import React from "react";
import Header from "./Header";
import ProjectBox from "./ProjectBox";
import pyoneplay from "../assets/images/pyoneplay.png";
import athinchei from "../assets/images/athinchei.png";
import sms from "../assets/images/sms.png";

export default function ProjectList() {
  return (
    <div className="my-20" id="projects">
      <Header>Projects</Header>
      <div className="mt-10 flex flex-col gap-8">
        <ProjectBox title="Pyone Play" image={pyoneplay}>
          Pyone Play is Myanamar's 1st popular online TV video platform. People
          can watch Live local TV channel and replay tv on demand, anytime,
          anywhere. I worked on frontend development. Closely work with other
          backend developer and a team lead to deliver a quality product within
          tide timeline.
        </ProjectBox>
        <ProjectBox title="Athinchei" image={athinchei} position="left">
          Athinchei is a digital platform to sell & buy digital products. This
          project was developed by me and the team lead developer. I developed
          both frontend website and backend dashboard and API with the mentor of
          team leader.
        </ProjectBox>
        <ProjectBox title="SMS Service System" image={sms}>
          This system is to support sms service to business clients. I developed
          the whole backend system with the mentor of the team leader.
        </ProjectBox>
      </div>
    </div>
  );
}
