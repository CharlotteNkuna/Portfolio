import recipeBook from "../assets/images/image.webp";
import zkhiphani from "../assets/images/image2.webp";
import portfolio from "../assets/images/image3.webp";

export const projects = [
    {
      title: "Recipe Book",
      description:
      "A modern Angular application that allows users to browse, search, and manage delicious recipes through a clean and responsive user interface.",
  
      image: recipeBook,
  
      technologies: [
        "Angular",
        "TypeScript",
        "Git",
      ],
  
      github: "https://github.com/CharlotteNkuna/My-Recipe-Book",
  
      live: "https://my-recipe-book-liard.vercel.app/",    
    },
  
    {
      title: "Developer Portfolio",
  
      description:
        "A modern responsive portfolio built using React, TypeScript and Tailwind CSS with dark mode support.",
  
      image: portfolio,
  
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
      ],
  
      github: "https://github.com/CharlotteNkuna/Portfolio",
  
      live: "#",
    },
  
    {
      title: "Z'khiphani Mzansi",
    
      description:
        "A modern event booking platform built with Angular where users can browse events, search by category, book tickets, complete a checkout process, and manage bookings. Includes authentication, role-based access, and an admin dashboard for managing events.",
    
      image: zkhiphani,
    
      technologies: [
        "Angular",
        "TypeScript",
        "Bootstrap",
        "Signals",
        "LocalStorage"
      ],
    
      github: "https://github.com/CharlotteNkuna/Zkhiphani-Mzansi",
    
      live: "https://vercel.com/charlotte-s-projects12/zkhiphani-mzansi-xu8r"
    },

  ];