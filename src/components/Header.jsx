import React from "react";

export default function Header({ className, children }) {
  return (
    <h1 className={`${className} text-5xl md:text-6xl font-bold`}>
      {children}
    </h1>
  );
}
