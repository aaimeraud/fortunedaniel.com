import { Daniel } from "@/lib/constants";


export default function NewsBanner() {
  return (
    <div title="A container that looks like a button it contains a link to Daniel's CV, it's meant to be a news banner to show Daniel's current situation and the button functionnality isn't explicitly said.">
      <a
        href="/assets/files/cv_daniel_fortune_bordeaux_A4.pdf"
        target="_blank"
        className="dark:bg-resumewhite dark:text-resumepurple hover:opacity-85 border border-resumepurple/15  dark:border-resumewhite/15 bg-resumepurple transition text-resumewhite px-2 py-1 inline-flex justify-between items-center gap-2 rounded-sm customoutline duration-300">
        <div className=" rounded-full dark:bg-resumepurple bg-resumewhite w-2 h-2">
          <div className=" rounded-full dark:bg-resumepurple bg-resumewhite animate-ping w-2 h-2"></div>
        </div>
        <span className="text-xs tracking-tight" title="Daniel's current position">{Daniel.news}</span>
      </a>
    </div>
  );
}
