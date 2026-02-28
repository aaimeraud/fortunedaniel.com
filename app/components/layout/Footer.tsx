import { Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className=" h-16 flex items-center w-full text-sm py-5 "
      title="This is the footer, it contains a message to prompt users to open the social links drawer">
      <div
        className="flex w-full items-center dark:text-resumewhite
text-resumepurple gap-5 justify-center text-center"
        title="This is the footer's content, it contains a message to prompt users to open the social links drawer">
        <span
          className="flex gap-1 items-center text-center animate-pulse"
          title="This is the message to prompt users to open the social links drawer">
          Press
          <Plus
            className="w-5  h-5 p-1 dark:bg-resumewhite bg-resumepurple dark:
dark:text-resumepurple text-resumewhite rounded-full "
          />
          to see the links
        </span>
      </div>
    </footer>
  );
}
