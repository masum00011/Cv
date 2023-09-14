import React from "react";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
export default function Skill() {
  return (
    <div className="">
      <div className="skill---header flex justify-between p-[5%]">
        <Link href="/">
          <span>&#10094;</span>
        </Link>
        <p className="text-white">Back to Home</p>
      </div>
      <p className="text-center p-8 text-white">My Project</p>
      <div className="parent--card flex flex-wrap justify-center gap-[2rem]">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </div>
    </div>
  );
}
