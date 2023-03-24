import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="container md:w-[80%] mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
