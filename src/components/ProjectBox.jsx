import React from "react";

export default function ProjectBox({ title, image, position = "right" }) {
  return (
    <div className="flex mt-5">
      {position === "right" && (
        <div className="project-box flex-auto w-[60%]">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="p-10 flex-auto w-[40%]">
        <ProjectTitle>{title}</ProjectTitle>
        <p className="project-desc text-desc">
          UX research, design, and prototyping for the offline experience,
          customer app, and backend system.
        </p>
      </div>
      {position === "left" && (
        <div className="project-box flex-auto w-[60%]">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
}

export function ProjectTitle({ children }) {
  return <h2 className="font-bold text-4xl">{children}</h2>;
}
