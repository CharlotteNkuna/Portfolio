import recipeBook from "../assets/images/image.webp";
import bankingApp from "../assets/images/image2.webp";
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
      title: "ATM Banking System",
  
      description:
        "Java banking application supporting deposits, withdrawals, transfers and account management.",
  
      image: bankingApp,
  
      technologies: [
        "Java",
        "OOP",
        "Collections",
      ],
  
      github: "https://github.com/CharlotteNkuna/Java-Banking-app/tree/develop",
  
      live: "https://charlottenkuna.github.io/Java-Banking-app/",
    },

  ];