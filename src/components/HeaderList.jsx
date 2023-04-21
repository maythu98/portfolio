import React from "react";
import NaviLink from "./NaviLink";

const listData = [
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

export default function HeaderList({ activeSection, handleClick }) {
  return (
    <ul className="list-none flex space-x-8">
      {listData.map(({ name, link }) => (
        <NaviLink
          link={`#${link}`}
          key={link}
          className={activeSection === link ? "active" : ""}
          onClick={() => handleClick(link)}
        >
          {name}
        </NaviLink>
      ))}
    </ul>
  );
}
