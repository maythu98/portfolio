import React from "react";
import Header from "./Header";
import ProjectBox from "./ProjectBox";

export default function ProjectList() {
  return (
    <div className="my-20" id="projects">
      <Header>Projects</Header>
      <div className="mt-10 flex flex-col gap-8">
        <ProjectBox />
        <ProjectBox position="left" />
      </div>
    </div>
  );
}
