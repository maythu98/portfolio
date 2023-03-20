import React from "react";

export default function ProjectBox({
  title,
  image,
  children,
  position = "right",
}) {
  return (
    <div className="flex flex-col md:flex-row mt-5">
      {position === "right" && (
        <div className="project-box flex-auto w-full md:w-[60%]">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="p-10 flex-auto md:w-[40%]">
        <ProjectTitle>{title}</ProjectTitle>
        <p className="project-desc text-desc">{children}</p>
      </div>
      {position === "left" && (
        <div className="project-box flex-auto md:w-[60%]">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
}

export function ProjectTitle({ children }) {
  return <h2 className="font-bold text-4xl">{children}</h2>;
}
