import { projects } from "@/lib/constants";

export default function ProjectTag({ index }: { index: number }) {
  return (
    <div
      className="text-xs dark:bg-resumepurple w-fit dark:text-resumewhite px-2 py-0.5 rounded border dark:border-resumewhite/50 bg-resumewhite text-resumepurple border-resumepurple/50"
      title={`The tags of the project named "${projects[index].title}" it contains the technologies used in the project`}>
      <span
        className=" "
        title={`The first technology used in the project "${projects[index].title}"`}>
        {projects[index].tags?.[0]}
      </span>
      <span title="two & meaning 'and', it's a coding reference"> && </span>
      <span
        className=" "
        title={`The second technology used in the project "${projects[index].title}"`}>
        {projects[index].tags?.[1]}
      </span>
      <span title="two & meaning 'and', it's a coding reference"> && </span>
      <span
        className=" "
        title={`The third technology used in the project "${projects[index].title}"`}>
        {projects[index].tags?.[2]}
      </span>
    </div>
  );
}
