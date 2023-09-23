import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import bgcover from "./assets/images/cover.jpg";
import Link from "next/link";
// import ReactJS_Developer from "./assets/images/ReactJS_Developer.pdf";
// import cv from '../public/'
export default function Home() {
  // export default function Home() <Link href="/about">About Us</Link>{
    // <Link href="/skill">Skill</Link>

  return (
    <main className="container m-auto h-screen">
      <section className="Navbar flex justify-between  py-4 items-center">
        <h1 className="text-[1.5rem] text-[blue]">Portfolio.</h1>
        <div className="text-header flex gap-4">
          <div className="header-main">
          <p className="header">Home</p>
          </div>
          <div className="header-main">
          <p className="header"><Link href="/about">About</Link></p>
          </div>
          <div className="header-main">
          <p className="header"> <Link href="/skill">Skills</Link></p>
          </div>
        </div>
        <div className="social-icon flex gap-4 text-[blue]">
          <a href="https://www.linkedin.com/in/masum-reza-148397199/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ryanr01">
            <GitHubIcon />
          </a>
        </div>
      </section>
      <section className="flex justify-between flex-wrap-reverse my-[10%]">
        <section className="text block self-center">
          <div>
            <b>Hello,</b>
          </div>
          <div>
            <b className="text-[4rem]">I'm Masum Reza</b>
          </div>
          <div>
            <b className="text-[3rem] text-[blue] break-all">ReactJS/NextJS Developer</b>
          </div>
          <div>
            <p>From Gurgaon</p>
          </div>
          <Link href="/resume.pdf" download>
            <button className="bg-[blue] text-white py-2 px-4 my-4">
              Hire Me
            </button>
          </Link>
        </section>
        <section className="bg-img">
          {bgcover ? <Image
            height={500}
            width={500}
            src={bgcover}
            alt="cover"
            style={{ mixBlendMode: "multiply" }}
          />  : 'loading...'}
         
        </section>
      </section>
    </main>
  );
}
