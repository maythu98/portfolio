import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProjectBox from "./ProjectBox";
import Skill from "./Skill";
import { db } from "../lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const getProjectData = async () => {
    const projects = await getDocs(
      query(collection(db, "projects"), orderBy("order"))
    );
    const newData = projects.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProjects(newData);
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div
      className="my-16 min-h-[95vh] text-[#0D0836]"
      id="projects-section"
      data-section
    >
      <Header>My Projects</Header>
      <div
        className="mt-5 flex flex-col space-y-20"
        // id="projects-section"
        // data-section
      >
        {projects.length > 0 &&
          projects.map((item) => (
            <ProjectBox
              title={item.title}
              image={item.image}
              // position={item.position}
              position="right"
              key={`${item.id}-${item.title}`}
            >
              <p className="project-desc text-desc leading-[150%]">
                {item.short_desc}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 items-center">
                {item.skills.map((skill) => (
                  <Skill key={`${skill}-${item.title}`}>{skill}</Skill>
                ))}
              </div>
            </ProjectBox>
          ))}
      </div>
    </div>
  );
}
