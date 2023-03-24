import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className="mx-10 md:mx-0">
        <Navigation />
        <div className="container w-[100%] xl:w-[70%] mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
