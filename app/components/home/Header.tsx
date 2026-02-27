import Image from "next/image";
import profilePicture from "@/public/assets/images/danielfortune_portrait.webp";
import { education } from "@/lib/constants";
import { Daniel } from "@/lib/constants";
import NewsBanner from "../ui/NewsBanner";

export default function Header() {
  return (
    <div className="flex lg:flex-row flex-col gap-5 lg:py-5 lg:items-center">
      <Image
        src={profilePicture}
        width={1000}
        height={1000}
        alt="Portrait de Daniel Fortuné"
        className="rounded-full w-25 h-25 object-cover border-2 dark:border-resumewhite border-resumepurple select-none no-selector"
        
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
  );
}
