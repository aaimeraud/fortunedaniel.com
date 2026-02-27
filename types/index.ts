export type Metadata = {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
    viewport?: string;
    themeColor?: string;
    icons?: {
        icon: string;
        apple: string;
        other: {
            rel: string;
            url: string;
        }[];
    };
}



export type NavbarLink = {
  label: string;
  href: string;
};


export type Project = {
    id: number;
    title: string;
    description: string;
    image?: string;
    link: string;
    status?: "In Progress" | "Completed";
    tags?: string[];
}

export type Experience = {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
}

export type Education = {
    institution: string;
    degree: string;
    startDate: string;
    currentGrade?: string;
    endDate?: string;
    description: string;
    link?: string;
}

export type SocialLink = {
    platform: string;
    url: string;
}

export type ContactInfo = {
    email: string;
    phone?: string;
    address?: string;
}