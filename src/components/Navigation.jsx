import React from "react";

export default function Navigation({ className, ...props }) {
  return (
    // layout-box-shadow
    <div className="">
      <div
        {...props}
        className="container mx-auto flex justify-between my-10 md:my-16"
      >
        {/* <h1 className="font-bold text-xl uppercase">May</h1> */}
        <nav>
          <ul className="list-none flex space-x-8">
            <li className="nav-list--item active">
              <a href="#home">Home</a>
            </li>
            <li className="nav-list--item">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-list--item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li className="nav-list--item">
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
