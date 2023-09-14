import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <div>
      <div className="about---header flex justify-between p-[5%]">
        <Link href="/">
          <span>&#10094;</span>
        </Link>
        <p className="text-white">Back to Home</p>
      </div>
      <div className="about--me px-[5%]">
        <p className="text-center text-[1.5rem] py-8">About Me</p>
        <p>
          I am a passionate and experienced ReactJS developer with a strong
          commitment to creating interactive and user-friendly web applications.
          With several years of hands-on experience in front-end development, I
          have honed my skills in building robust, efficient, and responsive
          user interfaces using React and related technologies.<br /> My journey as a
          developer has equipped me with a deep understanding of the React
          ecosystem, including state management with Redux or context API,
          
          routing with React Router, and integrating third-party libraries and
          APIs. I am proficient in using modern JavaScript (ES6+), HTML5, and
          CSS3 to craft seamless and visually appealing web experiences.<br /> One of
          my strengths is my ability to translate design concepts into
          functional and pixel-perfect UI components. I am also well-versed in
          optimizing web applications for performance and accessibility to
          ensure a smooth and inclusive user experience.<br /> In addition to
          technical skills, I am a strong advocate for clean code, code
          maintainability, and collaborative development practices. I thrive in
          a team-oriented environment, where I can contribute my expertise and
          learn from others.<br /> My passion for learning and staying updated with
          the ever-evolving web development landscape drives me to continuously
          improve my skills and stay at the forefront of ReactJS development. I
          am excited about the endless possibilities of web development and the
          opportunity to create impactful solutions that resonate with users.
        </p>
      </div>
    </div>
  );
}
