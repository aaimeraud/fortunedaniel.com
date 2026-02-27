import { Daniel } from "@/lib/constants";
import Link from "next/link";

export default function NewsBanner() {
  return (
    <div>
      <Link
        href="https://www.linkedin.com/in/danielfortun%C3%A9/overlay/1771927738212/single-media-viewer/?profileId=ACoAAEaMUvkBJjd1kriDp-EC6rlOJ6WVZDvMmYU"
        target="_parent"
        className="dark:bg-resumewhite dark:text-resumepurple hover:opacity-85 border border-resumepurple/15  dark:border-resumewhite/15 bg-resumepurple transition text-resumewhite px-2 py-1 inline-flex justify-between items-center gap-2 rounded-sm customoutline duration-300">
        <div className=" rounded-full dark:bg-resumepurple bg-resumewhite w-2 h-2">
          <div className=" rounded-full dark:bg-resumepurple bg-resumewhite animate-ping w-2 h-2"></div>
        </div>
        <span className="text-xs">{Daniel.news}</span>
      </Link>
    </div>
  );
}


