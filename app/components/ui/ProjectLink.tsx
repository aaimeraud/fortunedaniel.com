import Link from "next/link";
import { projects } from "@/lib/constants";
import ProjectTag from "./ProjectTags";

export default function ProjectLink({ index }: { index: number }) {
  return (
    <Link
      href={projects[index].link}
      className="hover:dark:bg-resumewhite hover:bg-resumepurple transition  w-full dark:bg-resumewhite/60 dark:text-resumepurple bg-resumepurple/60  text-resumewhite p-3 gap-3 rounded-md flex flex-col customoutline duration-300 tracking-tight" title={`A link to the project named "${projects[index].title}" it contains a short description of the project and its current status`}>
      <div className="flex flex-col" title={`A container for the project named "${projects[index].title}" it contains a short description of the project`}>
        <span className="font-medium" title={`The title of the project "${projects[index].title}"`}>
          {projects[index].id}. {projects[index].title} ⤴
        </span>
        <p className="text-xs dark:text-inherit/60 text-inherit/60" title={`A short description of the project "${projects[index].title}"`}>
          {projects[index].description}
        </p>
      </div>
      <ProjectTag index={index} />
      <span className="text-xs  opacity-65 " title={`The current status of the project "${projects[index].title}"`}>
        Status : <strong title={`The project "${projects[index].title}" is "${projects[index].status}" `}>{projects[index].status}</strong>
      </span>
    </Link>
  );
}
