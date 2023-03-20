import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="container w-[60%] mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
