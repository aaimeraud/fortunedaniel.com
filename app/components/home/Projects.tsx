import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import ProjectLink from "../ui/ProjectLink";

export default function Projects() {
  return (
    <section className="flex flex-col gap-4 w-full" id="projects-section" title="This is the projects section. it contains links to Daniel's most recent projects">
      <div>
        <h3 className="text-xl font-semibold  tracking-tight">Projects</h3>
        <p className="text-sm dark:text-resumewhite/80 text-resumepurple/80 tracking-tight" title="A short description of the projects section, it contains a link to Daniel's social media where he posts about his projects">
          Here are some of the projects I&apos;ve worked on recently. Check my{" "}
          <Link
            href={socialLinks[0].url}
            className="hover:opacity-70 transition bg-resumepurple/80 text-resumewhite dark:bg-resumewhite/80 dark:text-resumepurple px-1 rounded-xs customoutline  duration-300"
            title="A link to Daniel's Github where the repositories about his projects are hosted">
            {socialLinks[0].platform}
          </Link>{" "}
          for more details.
        </p>
      </div>
      <div className="flex flex-col gap-2" title="A container for the project links, it contains links to Daniel's most recent projects">
        <ProjectLink index={0} />
        <ProjectLink index={1} />
        <ProjectLink index={2} />
      </div>
    </section>
  );
}
