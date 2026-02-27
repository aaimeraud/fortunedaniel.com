import Image from "next/image";
import profilePicture from "@/public/assets/images/Portrait.jpg";
// import Navbar from "../../layout/Navbar";
import HeroCard from "./HeroCard";
import NewsBanner from "../../ui/NewsBanner";

import { education } from "@/lib/constants";
import { Daniel } from "@/lib/constants";
// import Footer from "../../layout/Footer";
import Projects from "./Projects";

export default function Hero() {
  return (
    <div className=" flex flex-col lg:grid-cols-2 gap-2 h-full w-full rounded-4xl lg:px-70 py-5 px-5 overflow-y-scroll justify-start items-start dark:bg-resumepurple dark:text-resumewhite bg-resumewhite text-resumepurple ">
      <HeroCard className="h-fit w-full  ">
        <div className="flex lg:flex-row flex-col gap-5 lg:py-5 lg:items-center">
          <Image
            src={profilePicture}
            width={80}
            height={80}
            alt="Portrait de Daniel Fortuné"
            className="rounded-full w-25 h-25 object-cover border-2 dark:border-resumewhite border-resumepurple "
            priority
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold ">Daniel F.</h1>
              <h5 className="text-sm font-light dark:text-inherit/40 text-inherit/70">
                {Daniel.profession}
              </h5>
              <p className="text-xs  dark:text-inherit/40 text-inherit/70">
                Bachelor {education[0].currentGrade} à{" "}
                <a
                  href="https://ecole-decode.fr"
                  className="hover:opacity-70 bg-resumepurple text-resumewhite dark:bg-resumewhite dark:text-resumepurple px-1 rounded-xs customoutline transition duration-300">
                  {education[0].institution}
                </a>
              </p>
            </div>
            <NewsBanner />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-sm">
            I&apos;m a frontend developer & student studying at{" "}
            <a
              href={education[0].link}
              className="hover:opacity-70 bg-resumepurple text-resumewhite dark:bg-resumewhite dark:text-resumepurple px-1 rounded-xs customoutline transition duration-300">
              {education[0].institution}
            </a> in Paris. I&apos;m interested in
          </p>
        </div>
        <Projects />
        {/* <Footer /> */}
      </HeroCard>

      {/* <HeroCard className="h-fit w-fit ">
        <p className="text-sm font-medium dark:text-inherit/40 text-inherit/70">
          {Daniel.description}
        </p>
      </HeroCard> */}
    </div>
  );
}
