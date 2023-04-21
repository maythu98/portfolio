import React from "react";

export default function Header({ className, children }) {
  return (
    <h1 className={`${className} text-3xl md:text-4xl font-bold`}>
      {children}
    </h1>
  );
}
