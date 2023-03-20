import React from "react";

export default function Footer() {
  return (
    <div className="layout-box-shadow">
      <div className="my-5 text-center text-gray-500">
        <small>Yeah! I made my own website @{new Date().getFullYear()}</small>
      </div>
    </div>
  );
}
