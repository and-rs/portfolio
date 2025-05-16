export interface Project {
  image: string;
  title: string;
  year: number;
  description: {
    en: string;
    es: string;
  };
  source?: string;
  website?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    image:
      "https://res.cloudinary.com/dh9rajm0q/image/upload/v1738777215/portfolio/sanarte.png",
    title: "SanArte [WIP]",
    year: 2025,
    description: {
      en: "E-commerce for a home-decor business.",
      es: "Tienda virtual de artículos de decoración.",
    },
    source: "https://github.com/and-rs/sanarte-hydrogen",
    technologies: [
      "TypeScript",
      "Remix",
      "Hydrogen",
      "GraphQL",
      "Tailwind",
      "Shadcn/ui",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dh9rajm0q/image/upload/v1738777214/portfolio/joe_car_por.png",
    title: "Artist Portfolio",
    year: 2025,
    description: {
      en: "Portfolio for illustrators and artists.",
      es: "Portafolio para ilustradores y artistas.",
    },
    source: "https://github.com/and-rs/portfolio-joseph-carreno",
    website: "https://portfolio-joseph-carreno.vercel.app/",
    technologies: ["TypeScript", "Next.js", "Shadcn/ui", "Tailwind"],
  },
  {
    image:
      "https://res.cloudinary.com/dh9rajm0q/image/upload/v1738776811/portfolio/pixelstream.png",
    title: "Pixel Stream",
    year: 2024,
    description: {
      en: "Business landing page for modelling agency.",
      es: "Sitio web comercial para agencia de modelaje",
    },
    website: "https://pixelstream.com.co",
    technologies: [
      "TypeScript",
      "Next.js",
      "Shadcn/ui",
      "Tailwind",
      "Framer Motion",
      "EmailJS",
      "Google Ads",
    ],
  },
];
