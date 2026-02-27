import { NavbarLink } from "@/types";
import { Project } from "@/types";
// import { Experience } from "@/types";
import { Education } from "@/types";
import { SocialLink } from "@/types";
import { ContactInfo } from "@/types";

// import { Metadata } from "@/types";

export const education: Education[] = [
  {
    institution: ".decode",
    degree: "Bachelor Concepteur Développeur d’Applications Web",
    startDate: "2025",
    currentGrade: "(2nd year)",
    endDate: "2027",
    description:
      "Formation axée sur le développement web, incluant HTML, CSS, JavaScript, PHP et gestion de bases de données. Les étudiants acquièrent également des compétences en versioning, en gestion de projet agile, et en soft skills essentiels pour le travail en équipe.",
    link: "https://ecole-decode.fr",
  },
];

function calculateAge(birthdate: string): number {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
export const Daniel = {
  name: "Daniel",
  surname: "Fortuné",
  age: calculateAge("2004-7-12"),
  profession: "Freelance Frontend Developer",
  professionUpper: "FREELANCE FRONTEND DEVELOPER",
  linkedInBio: "I help SMEs and freelancers develop their online activities.",

  news: "Looking for an internship",
};

export const navbarLinks: NavbarLink[] = [
  { label: "Home", href: "/" },
  // { label: "Coming Soon...", href: "/projects" },
  // { label: "Coming Soon...", href: "/about" },
  // { label: "Coming Soon...", href: "/contact" },
];

export const contactInfo: ContactInfo = {
  email: "danielfortune.pro@gmail.com",
  phone: "+33 7 82 91 02 43",
  address: "Paris, France",
};
export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/aaimeraud" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/danielfortuné/" },
  { platform: "Email", url: `mailto:${contactInfo.email}` },
  { platform: "Schedule a meeting", url: "https://cal.eu/danielfortune" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Termibrary",
    description: "A command line Letterboxd-Like app for books",
    tags: ["Javascript", "Bun", "SQLite"],
    link: "https://www.github.com/aaimeraud/termibrary",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Sillon",
    description:
      "A brand website for an architects firm, showcasing their projects and expertise.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://sillon-website.vercel.app/",
    status: "In Progress",
  },
  {
    id: 3,
    title: "My portfolio website",
    description:
      "My personal website, showcasing my projects and skills as a frontend developer.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://www.github.com/aaimeraud/fortunedaniel.com",
    status: "Completed",
  },
];
