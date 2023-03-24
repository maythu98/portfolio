import React from "react";

export default function ProjectBox({
  title,
  image,
  children,
  position = "right",
}) {
  return (
    <div className="flex flex-col md:flex-row mt-6">
      {position === "right" && (
        <div className="project-box flex-auto flex items-center justify-center w-full md:w-[50%]">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="px-0 md:px-10 py-2 flex-auto flex flex-col justify-center md:w-[50%]">
        <div className="flex justify-between">
          <ProjectTitle>{title}</ProjectTitle>
          <div className=""></div>
        </div>
        <div>{children}</div>
      </div>
      {position === "left" && (
        <div className="project-box flex-auto flex items-center justify-center md:w-[50%]">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
}

export function ProjectTitle({ children }) {
  return <h2 className="font-bold text-2xl md:text-4xl">{children}</h2>;
}
