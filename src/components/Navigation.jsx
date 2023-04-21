import React, { useEffect, useRef } from "react";
import NaviLink from "./NaviLink";
import HeaderList from "./HeaderList";
import withNavigationObserver from "./hoc/NavigationObserver";

const NaviComponent = withNavigationObserver(HeaderList);

export default function Navigation({ className, ...props }) {
  const boxRef = useRef();

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

  return (
    <div
      className="fixed inset-x-0 top-0 transition-transform z-40"
      ref={boxRef}
    >
      <div {...props} className="container mx-auto flex justify-between my-10">
        <nav>
          <NaviComponent />
        </nav>
        <ul>
          <NaviLink
            link="https://drive.google.com/file/d/1ZnBlPC21KrjTqu6M9BM8BoIKP3JYQM5I/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </NaviLink>
        </ul>
      </div>
    </div>
  );
}
