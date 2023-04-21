import React, { useEffect, useRef, useState } from "react";

export default function withNavigationObserver(NaviComponent) {
  function NewComponent(props) {
    const observer = useRef(null);
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
      observer.current = new IntersectionObserver((entries) => {
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
      <NaviComponent
        {...props}
        activeSection={activeSection}
        handleClick={handleClick}
      />
    );

    // return React.Children.map(<NaviComponent/>, (child) => {
    //   console.log("Children....", child);
    //   return React.cloneElement(child, {
    //     ...props,
    //     className: activeSection === child.props.link ? "active" : "",
    //     onClick: () => handleClick(child.props.link),
    //   });
    // });
  }

  return NewComponent;
}
