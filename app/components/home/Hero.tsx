import HeroCard from "../layout/HeroCard";

import Footer from "../layout/Footer";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Projects from "./Projects";

export default function Hero() {
  return (
    <div className=" flex flex-col lg:grid-cols-2 gap-2 h-full w-full rounded-4xl lg:px-70 py-5 px-5 overflow-y-scroll justify-start items-start dark:bg-resumepurple dark:text-resumewhite bg-resumewhite text-resumepurple customoutline">
      <HeroCard className="h-fit w-full">
        <Header />
        <AboutMe />
        <Projects />
      </HeroCard>

      <Footer />
    </div>
  );
}
