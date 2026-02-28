import { education } from "@/lib/constants";
import { Daniel } from "@/lib/constants";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-2" id="about-me-section" title="About me section, it contains some informations about Daniel Fortuné and a link to his CV that's more explicit about what's in it" >
      <h2 className="text-xl font-semibold tracking-tight" >About Me</h2>
      <div className="flex flex-col gap-3">
        <p className="text-sm tracking-tight">
          I&apos;m a frontend developer and a{" "}
          student at {education[0].institution} in Paris. I
          speak English and French fluently. I also do freelance work, so if you
          have a project in mind, <a href="https://cal.eu/danielfortune" className="hover:opacity-70 transition duration-300 underline customoutline" title="Book a meeting with Daniel">book a meeting</a> ! I&apos;m always open
          to new opportunities and collaborations.
        </p>
        <p className="text-sm tracking-tight">
          I&apos;m currently {Daniel.news.toLowerCase()} in the{" "}
          Greater Paris area region starting mid-April 2026 as a{" "}
          frontend or fullstack junior developer.
        </p>
        <a
          href="/assets/files/cv_daniel_fortune_bordeaux_A4.pdf"
          target="_blank"
          className="bg-resumepurple text-resumewhite dark:bg-resumewhite dark:text-resumepurple px-2 py-1 mt-2 hover:opacity-90 transition duration-300 w-fit rounded-md text-sm tracking-tight customoutline">
          You can take a look at my resume here.
        </a>
      </div>
    </div>
  );
}
