import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import google from "../assets/images/google.png";
import Header from "./Header";

export default function Contact() {
  return (
    <div className="my-36" id="contact-section" data-section>
      <div className="text-center gap-5">
        <Header>Social & Contact Me</Header>
        <p className="font-light mt-3">
          Just contace me if you want to work with me!
        </p>
      </div>
      <div className="mt-10 flex space-x-10 justify-center">
        <ContactItem href="https://github.com/maythu98">
          <img src={github} alt="Github" />
        </ContactItem>
        <ContactItem href="https://www.linkedin.com/in/may-thu/">
          <img src={linkedin} alt="linkedin" />
        </ContactItem>
        <ContactItem href="mailto:maythuaung216@gmail.com">
          <img src={google} alt="Github" />
        </ContactItem>
      </div>
    </div>
  );
}

export function ContactItem({ href, children }) {
  return (
    <a
      href={href}
      className="p-5 md:p-7 bg-violet-100 text-white rounded w-[100px] hover:bg-violet-300 cursor-pointer"
    >
      {children}
    </a>
  );
}
