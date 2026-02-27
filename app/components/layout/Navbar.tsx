"use client";
import { socialLinks } from "@/lib/constants";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" p-5 md:p-10 fixed w-full z-0 flex items-center justify-end  customoutline">
      <Drawer direction="bottom">
        <DrawerTrigger className="customoutline">
          <div className=" p-1   border border-resumewhite/15 dark:border-resumepurple/15 bg-resumepurple dark:bg-resumewhite text-resumewhite dark:text-resumepurple/80 rounded-full customoutline cursor-pointer">
            <Plus className="customoutline" />
          </div>
        </DrawerTrigger>
        <DrawerContent className="dark:bg-resumepurple dark:text-resumewhite text-resumepurple bg-resumewhite w-full">
          <DrawerHeader>
            <DrawerTitle className="text-2xl dark:text-resumewhite text-resumepurple w-full text-center">
              <span>Reach me</span>
            </DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col gap-2 p-5 w-full text-center justify-between items-center customoutline">
            {socialLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="p-2 dark:hover:bg-resumewhite dark:hover:text-resumepurple w-full font-medium transition duration-200 customoutline">
                {link.platform}
              </Link>
            ))}
          </nav>
          <DrawerFooter>
            <DrawerClose asChild className="customoutline">
              <Button
                variant="ghost"
                className="hover:text-resumewhite hover:bg-resumepurple cursor-pointer customoutline">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

//  const isDesktop = useMediaQuery("(min-width: 768px)");

// return isDesktop ? (
//   <div className="py-5 px-5 fixed w-fit z-0 ">
//     <div className="bg-resumewhite py-2 px-4 text-primary flex items-center justify-center gap-10 w-full  rounded-lg">
//       <span className="font-garamond font-bold text-2xl hover:opacity-80 transition duration-200">
//         <Link href="/">Sillon</Link>
//       </span>
//       <nav className="flex gap-10 ">
//         {NAV_LINKS.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className="font-dmsans font-light hover:opacity-80 transition duration-200">
//             {link.label}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   </div>
// ) : (
