import React from "react";
import Header from "./Header";
import php from "../assets/images/php.png";
import laravel from "../assets/images/laravel.png";
import react from "../assets/images/react.png";
import next from "../assets/images/next.png";
import me from "../assets/images/sitting.png";

export default function AboutMe() {
  return (
    <div className="my-20 grid grid-cols-2" id="home">
      <div className="flex justify-center">
        <img src={me} alt="May Thu Aung" width={"60%"} />
      </div>
      <div>
        <Header>May Thu Aung</Header>
        <div className="mt-5">
          <div>
            <h1 className="text-xl font-light text-left leading-10 body-color">
              Full Stack Developer with 3+ years of experience in the web
              development field, delivered many software solutions which meet
              business requirements for various business domains. Implemented
              projects using PHP, Laravel, and JavaScript (React, Next.js) as
              well as SQL and RestAPI.
            </h1>

            <div className="my-5">
              <ul className="flex items-center space-x-8">
                <li>
                  <img src={php} alt="PHP" width={50} height={50} />
                </li>
                <li>
                  <img src={laravel} alt="Laravel" width={50} height={50} />
                </li>
                <li>
                  <img src={react} alt="React" width={50} height={50} />
                </li>
                <li>
                  <img src={next} alt="Next.js" width={50} height={50} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
