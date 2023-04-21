import React from "react";

export default function NaviLink({ link, className, children, ...otherProps }) {
  return (
    <li className={`nav-list--item ${className}`}>
      <a href={link} {...otherProps}>
        {children}
      </a>
    </li>
  );
}
