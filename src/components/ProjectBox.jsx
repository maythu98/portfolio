import React from "react";
import pyoneplay from "../assets/images/pyoneplay.png";

export default function ProjectBox({ position = "right" }) {
  return (
    <div className="flex mt-5">
      {position === "right" && (
        <div className="project-box flex-auto w-[60%]">
          <img src={pyoneplay} alt="Pyone Play" />
        </div>
      )}

      <div className="p-10 flex-auto w-[40%]">
        <ProjectTitle>Pyone Play</ProjectTitle>
        <p className="project-desc text-desc">
          UX research, design, and prototyping for the offline experience,
          customer app, and backend system.
        </p>
      </div>
      {position === "left" && (
        <div className="project-box flex-auto w-[60%]">
          <img src={pyoneplay} alt="Pyone Play" />
        </div>
      )}
    </div>
  );
}

export function ProjectTitle({ children }) {
  return <h2 className="font-bold text-4xl">{children}</h2>;
}
