import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import bgcover from './assets/images/cover.jpg';

export default function Home() {
  return (
    <main className="p-2 px-8 h-screen">
      <section className="Navbar flex justify-between px-24 py-4 items-center">
        <h1 className="text-[1.5rem] text-[blue]">Portfolio.</h1>
        <div className="text flex gap-4">
          <p>Home</p>
          <p>About</p>
          <p>Skill</p>
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
      <section className="flex justify-evenly flex-wrap-reverse  my-28">
        <section className="text block self-center">
          <div>
            <b className="">Hello, </b>
          </div>
          <div>
            <b className="text-[4rem]">I'm Masum Reza</b>
          </div>
          <div>
            <b className="text-[3rem] text-[blue]">ReactJS/NextJS Developer</b>
          </div>
          <div>
            <p>From Gurgaon</p>
          </div>
          <a href="./assets/images/ReactJS_Developer.pdf" download>
          <button className="bg-[blue] text-white py-2 px-4 my-4">Hire Me</button>
          </a>
        </section>
        <section className="bg-img">
          <Image height={500} width={500} src={bgcover} alt="cover" style={{mixBlendMode:'multiply'}} />
        </section>
      </section>
    </main>
  );
}