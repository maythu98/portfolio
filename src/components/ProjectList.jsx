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
    <div className="my-20" id="projects">
      <Header>Projects</Header>
      <div className="mt-10 flex flex-col gap-8">
        {projects.length > 0 &&
          projects.map((item) => (
            <ProjectBox
              title={item.title}
              image={item.image}
              position={item.position}
              key={`${item.id}-${item.title}`}
            >
              <p className="project-desc text-desc">{item.short_desc}</p>

              <div className="flex flex-wrap gap-4 items-center">
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
