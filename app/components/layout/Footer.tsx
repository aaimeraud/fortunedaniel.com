import { socialLinks } from "@/lib/constants";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" h-16 flex items-center w-full text-sm ">
      <div
        className="flex w-full items-center dark:text-resumewhite
text-resumepurple gap-5 justify-between">
        <Link
          key={socialLinks[0].url}
          href={socialLinks[0].url}
          className=" transition items-center text-center customoutline duration-300 rounded px-4 py-2 dark:hover:bg-resumewhite dark:hover:text-resumepurple hover:bg-resumepurple hover:text-resumewhite">
          {socialLinks[0].platform}
        </Link>
        <span>|</span>
        <Link
          key={socialLinks[1].url}
          href={socialLinks[1].url}
          className=" transition items-center text-center customoutline duration-300 rounded px-4 py-2 dark:hover:bg-resumewhite dark:hover:text-resumepurple hover:bg-resumepurple hover:text-resumewhite">
          {socialLinks[1].platform}
        </Link>
        <span>|</span>

        <Link
          key={socialLinks[2].url}
          href={socialLinks[2].url}
          className=" transition items-center text-center customoutline duration-300 rounded px-4 py-2 dark:hover:bg-resumewhite dark:hover:text-resumepurple hover:bg-resumepurple hover:text-resumewhite">
          {socialLinks[2].platform}
        </Link>
        <span>|</span>

        <Link
          key={socialLinks[3].url}
          href={socialLinks[3].url}
          className=" transition items-center text-center customoutline duration-300 rounded px-4 py-2 dark:hover:bg-resumewhite dark:hover:text-resumepurple hover:bg-resumepurple hover:text-resumewhite">
          <p>Wanna schedule a meeting?</p>
        </Link>
      </div>
    </footer>
  );
}
