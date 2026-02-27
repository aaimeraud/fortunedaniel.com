import SectionWrapper from "./components/layout/SectionWrapper";
import HeroCard from "./components/home/heroSection/HeroCard";
import Link  from "next/link";

export default function NotFound() {
  return (
    <SectionWrapper >
      <div className="flex flex-col justify-center items-center text-center h-full dark:text-resumepurple dark:bg-resumewhite bg-resumepurple text-resumewhite rounded-xl gap-5">
        <h1 className="text-4xl font-bold text-inherit">
          Cette page est en construction ou n&apos;existe pas !
        </h1>
        <span>Revenez plus tard !</span>
        <Link href="/" className=" bg-resumewhite text-resumepurple dark:bg-resumepurple dark:text-resumewhite px-4 py-2 rounded-md hover:bg-resumepurple hover:text-resumewhite transition-colors duration-300">
          Retour à l&apos;accueil
        </Link>
      </div>
    </SectionWrapper>
  );
}
