import React from "react";
import Header from "./Header";
import ProjectBox from "./ProjectBox";
import pyoneplay from "../assets/images/pyoneplay.png";
import athinchei from "../assets/images/athinchei.png";

export default function ProjectList() {
  return (
    <div className="my-20" id="projects">
      <Header>Projects</Header>
      <div className="mt-10 flex flex-col gap-8">
        <ProjectBox title="Pyone Play" image={pyoneplay} />
        <ProjectBox title="Athinchei" image={athinchei} position="left" />
        <ProjectBox title="SMS Service System" image={pyoneplay} />
      </div>
    </div>
  );
}
