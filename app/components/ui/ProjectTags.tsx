import { projects } from "@/lib/constants";

export default function ProjectTag({ index }: { index: number }) {
  return (
    <div className="text-xs dark:bg-resumepurple w-fit dark:text-resumewhite px-2 py-0.5 rounded border dark:border-resumewhite/50 bg-resumewhite text-resumepurple border-resumepurple/50">
      <span className=" ">
        {projects[index].tags?.[0]}
      </span>
      <span> && </span>
      <span className=" ">
        {projects[index].tags?.[1]}
      </span>
      <span> && </span>
      <span className=" ">
        {projects[index].tags?.[2]}
      </span>
    </div>
  );
}
