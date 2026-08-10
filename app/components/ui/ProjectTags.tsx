import { Fragment } from "react";

import { projects } from "@/lib/constants";

export default function ProjectTag({ index }: { index: number }) {
  const project = projects[index];
  const tags = project.tags ?? [];

  return (
    <div
      className="text-xs dark:bg-resumepurple w-fit dark:text-resumewhite px-2 py-0.5 rounded border dark:border-resumewhite/50 bg-resumewhite text-resumepurple border-resumepurple/50"
      title={`The tags of the project named "${project.title}" it contains the technologies used in the project`}>
      {tags.map((tag, tagIndex) => (
        <Fragment key={`${tag}-${tagIndex}`}>
          {tagIndex > 0 && <span className="mx-1">&&</span>}
          <span
            title={`The ${tagIndex === 0 ? "first" : tagIndex === 1 ? "second" : "third"} technology used in the project "${project.title}"`}>
            {tag}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
