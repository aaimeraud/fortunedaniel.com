import SectionWrapper from "./components/layout/SectionWrapper";
import HeroCard from "./components/layout/HeroCard";
import Link from "next/link";

export default function NotFound() {
  return (
    <SectionWrapper>
      <div className="flex flex-col justify-center items-center text-center h-full dark:text-resumewhite dark:bg-resumepurple bg-resumewhite text-resumepurple rounded-xl gap-5">
        <h1 className="text-4xl font-bold text-inherit">
          This page doesn&apos;t exist
        </h1>
        <span>
          This is what &quot;Error 404&quot; means if you didn&apos;t know !
        </span>
        <Link
          href="/"
          className=" bg-resumepurple text-resumewhite dark:bg-resumewhite dark:text-resumepurple px-4 py-2 rounded-md hover:opacity-90 transition duration-300">
          Return to homepage
        </Link>
      </div>
    </SectionWrapper>
  );
}
