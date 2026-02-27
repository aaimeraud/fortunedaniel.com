import { Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" h-16 flex items-center w-full text-sm py-5 ">
      <div
        className="flex w-full items-center dark:text-resumewhite
text-resumepurple gap-5 justify-center text-center">
        <span className="flex gap-1 items-center text-center animate-pulse">
          Press
          <Plus className="w-4  h-4 bg-resumewhite text-resumepurple rounded-full " />
          to see the links
        </span>
      </div>
    </footer>
  );
}
