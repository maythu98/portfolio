import React from "react";

export default function Navigation({ className, ...props }) {
  return (
    <div className="layout-box-shadow">
      <div {...props} className="container mx-auto flex justify-between my-5">
        <h1 className="font-bold text-xl uppercase">May</h1>
        <div>
          <nav className="text-sm leading-6 font-medium">
            <ul className="list-none flex space-x-8">
              <li className="nav-list--item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-list--item">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav-list--item">
                <a href="#contact">Contact</a>
              </li>
              <li className="nav-list--item">
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
