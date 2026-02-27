import Link from "next/link";
import { projects } from "@/lib/constants";
import ProjectTag from "./ProjectTags";

export default function ProjectLink({ index }: { index: number }) {
  return (
    <Link
      href={projects[index].link}
      className="hover:dark:bg-resumewhite hover:bg-resumepurple transition  w-full dark:bg-resumewhite/60 dark:text-resumepurple bg-resumepurple/60  text-resumewhite p-3 gap-3 rounded-md flex flex-col customoutline duration-300 ">
      <div className="flex flex-col">
        <span className="font-medium">
          {projects[index].id}. {projects[index].title} ⤴
        </span>
        <p className="text-xs dark:text-inherit/60 text-inherit/60">
          {projects[index].description}
        </p>
      </div>
      <ProjectTag index={index} />
      <span className="text-xs  opacity-65 ">
        Status : <strong>{projects[index].status}</strong>
      </span>
    </Link>
  );
}
