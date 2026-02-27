import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import ProjectLink from "../ui/ProjectLink";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div>
        <h2 className="text-xl font-semibold  tracking-tight">Projects</h2>
        <p className="text-sm dark:text-resumewhite/80 text-resumepurple/80 tracking-tight">
          Here are some of the projects I&apos;ve worked on recently. Check my{" "}
          <Link
            href={socialLinks[0].url}
            className="hover:opacity-70 transition bg-resumepurple/80 text-resumewhite dark:bg-resumewhite/80 dark:text-resumepurple px-1 rounded-xs customoutline  duration-300">
            {socialLinks[0].platform}
          </Link>{" "}
          for more details.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <ProjectLink index={0} />
        <ProjectLink index={1} />
        <ProjectLink index={2} />


      </div>
    </div>
  );
}
