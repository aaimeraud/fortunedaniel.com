import { education } from "@/lib/constants";
import { Daniel } from "@/lib/constants";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold ">About Me</h2>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          I&apos;m a <strong>frontend developer</strong> && a{" "}
          <strong>student</strong> at {education[0].institution} in Paris. I
          speak English and French fluently. I also do freelance work, so if you
          have a project in mind, <a href="https://cal.eu/danielfortune" className="hover:opacity-70 transition duration-300 underline">book a meeting</a> ! I&apos;m always open
          to new opportunities and collaborations.
        </p>
        <p className="text-sm">
          i&apos;m currently <strong>{Daniel.news.toLowerCase()}</strong> in the{" "}
          Parisian region <strong>starting mid-April 2026</strong> as a{" "}
          <strong>frontend or fullstack</strong> junior developer.
        </p>
        <a
          href="/assets/files/cv_daniel_fortune_bordeaux_A4.pdf"
          target="_blank"
          className="bg-resumepurple text-resumewhite dark:bg-resumewhite dark:text-resumepurple px-2 py-1 hover:opacity-90 transition duration-300 w-fit rounded-md text-sm">
          You can take a look at my resume here.
        </a>
      </div>
    </div>
  );
}
