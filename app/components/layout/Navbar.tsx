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
    <div className="flex w-full justify-end">
      <div
        className=" p-7 md:p-10 fixed w-fit z-10 flex items-center justify-end  customoutline-buttons"
        title="This is the navbar, it contains a button to open the social links drawer">
        <Drawer direction="bottom">
          <DrawerTrigger
            className="customoutline-buttons"
            type="button"
            title="Social links button"
            name="Social links button">
            <div className=" p-1   border border-resumewhite/15 dark:border-resumepurple/15 bg-resumepurple dark:bg-resumewhite text-resumewhite dark:text-resumepurple/80 rounded-full customoutline cursor-pointer">
              <Plus className="customoutline-buttons" />
            </div>
          </DrawerTrigger>
          <DrawerContent
            className="dark:bg-resumepurple dark:text-resumewhite text-resumepurple bg-resumewhite w-full"
            accessKey="tab">
            <DrawerHeader>
              <DrawerTitle
                className="text-2xl dark:text-resumewhite text-resumepurple w-full text-center"
                title="Drawer's Title">
                <span>Reach me</span>
              </DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-2 p-5 w-full text-center justify-between items-center customoutline">
              {socialLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  title={`Link to ${link.platform}`}
                  className="p-2 dark:hover:bg-resumewhite dark:hover:text-resumepurple w-full font-medium transition duration-200 customoutline-buttons">
                  {link.platform}
                </Link>
              ))}
            </nav>
            <DrawerFooter>
              <DrawerClose asChild className="customoutline">
                <Button
                  variant="ghost"
                  className="hover:text-resumewhite hover:bg-resumepurple cursor-pointer customoutline"
                  title="Close button">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
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
