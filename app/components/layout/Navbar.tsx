"use client";
import { navbarLinks } from "@/lib/constants";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/use-media-query";
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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <div className=" py-5 px-5 fixed w-full z-0 flex items-center justify-end">

      {/* <Link
        href="/"
        className="font-bold border border-resumewhite/15 dark:border-resumepurple/15 text-resumewhite bg-resumepurple dark:text-resumepurple nav-item rounded-lg dark:bg-resumewhite rounded-nav">
        aaimeraud
      </Link> */}
      <Drawer direction="right">
        <DrawerTrigger>
          <div className="px-4 py-1.5  border border-resumewhite/15 dark:border-resumepurple/15 bg-resumepurple dark:bg-resumewhite dark:text-resumepurple text-resumewhite rounded-lg">
            <Plus className="" />
          </div>
        </DrawerTrigger>
        <DrawerContent className="dark:bg-resumepurple dark:text-resumewhite">
          <DrawerHeader>
            <DrawerTitle className="text-2xl dark:text-resumewhite w-full text-center">
              <Link href="/">Menu</Link>
            </DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col gap-5 p-5 text-center justify-center h-full items-center">
            {navbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" font-light hover:opacity-70 transition duration-200">
                {link.label}
              </Link>
            ))}
          </nav>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                className="hover:text-resumewhite hover:bg-resumepurple cursor-pointer">
                Fermer
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ) : (
    <div className=" py-5 px-5 fixed w-full z-0 flex items-center justify-between">
      <Link
        href="/"
        className="font-bold  border border-resumewhite/15 dark:border-resumepurple/15 text-resumewhite bg-resumepurple dark:text-resumepurple  nav-item rounded-lg dark:bg-resumewhite rounded-nav">
        Daniel F.
      </Link>
      <Drawer direction="bottom">
        <DrawerTrigger>
          <div className="px-4 py-1.5   border border-resumewhite/15 dark:border-resumepurple/15 bg-resumepurple dark:bg-resumewhite text-resumewhite dark:text-resumepurple/80 rounded-lg">
            <Plus />
          </div>
        </DrawerTrigger>
        <DrawerContent className="dark:bg-resumepurple dark:text-resumewhite">
          <DrawerHeader>
            <DrawerTitle className="text-2xl dark:text-resumewhite w-full text-center">
              <Link href="/">Menu</Link>
            </DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col gap-5 p-5 text-center justify-between items-center">
            {navbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" font-light hover:opacity-70 transition duration-200">
                {link.label}
              </Link>
            ))}
          </nav>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                className="hover:text-resumewhite hover:bg-resumepurple cursor-pointer">
                Fermer
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
