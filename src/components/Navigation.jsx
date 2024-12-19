import React, { useEffect, useRef, useState } from "react";

const headerList = [
  {
    name: "Home",
    link: "home-section",
  },
  {
    name: "Projects",
    link: "projects-section",
  },
  {
    name: "Contact Me",
    link: "contact-section",
  },
];

export default function Navigation({ className, ...props }) {
  const boxRef = useRef();
  const observer = useRef();
  const [activeSection, setActiveSection] = useState("home-section");

  const handleClick = (anchor) => {
    const element = document.getElementById(anchor);
    setActiveSection(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        boxRef.current.style.backgroundColor = "#f3f4fd";
      } else {
        boxRef.current.style.backgroundColor = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      console.log("Enteries...", entries);
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    // layout-box-shadow
    <div
      className="fixed inset-x-0 top-0 transition-transform z-40"
      ref={boxRef}
    >
      <div {...props} className="container mx-auto flex justify-between my-10">
        {/* <h1 className="font-bold text-xl uppercase">May</h1> */}
        <nav>
          <ul className="list-none flex space-x-8">
            {headerList.map(({ name, link }) => (
              <li
                className={`nav-list--item ${
                  activeSection === link ? "active" : ""
                }`}
                key={link}
              >
                <a href={`#${link}`} onClick={() => handleClick(link)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ul>
            <li className="nav-list--item">
              <a
                href="https://drive.google.com/file/d/1MevUuGxa5p7JkRXV_IF5aKwQsFHVskqd/view"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
