import React from "react";

export default function SubHeader({ children }) {
  return (
    <div className="text-center md:text-left text-2xl text-main font-semibold">
      {children}
    </div>
  );
}
