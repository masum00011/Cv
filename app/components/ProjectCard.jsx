import React from "react";
import Image from "next/image";
import jsimg from "../assets/images/jsimg.png";
export default function ProjectCard() {
  return (
    <div className="main--card w-[200px] h-[300px]">
      <div className="header-section flex justify-center">
        <Image src={jsimg} width={50} alt="Picture of the author" />
      </div>
      <div className="details---card">
        <p>
          ES6, also known as ECMAScript 2015, is a significant update to
          'import' and 'export' statements for module management, and the
          spread/rest operator for flexible data manipulation. Understanding ES6
        </p>
      </div>
      <div className="parsenn-skill--card flex justify-between">
        <p>80%</p>
        <p>View more</p>
      </div>
    </div>
  );
}
