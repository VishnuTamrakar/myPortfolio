import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png"; 
import project6 from "../assets/images/project-6.png";

export const HERO_CONTENT = `Aspiring Power Platform & Frontend Developer with practical experience in building Model-Driven Apps and responsive web interfaces. Specialized in bridging the gap between Microsoft Dataverse and custom Frontend technologies like HTML, CSS, JavaScript, and React. Currently managing end-to-end development for a tech startup, demonstrating strong problem-solving skills and the ability to work independently to deliver efficient business solutions.`;

export const ABOUT_TEXT = `I am a dedicated software developer with a unique skill set that combines the Microsoft Power Platform with modern frontend development. Currently working as a Core Developer at a tech startup, I handle end-to-end project execution—from requirement gathering to deployment. 

My expertise lies in designing complex Model-Driven Apps on Dataverse and enhancing them with custom HTML/CSS/JavaScript Web Resources to achieve requirements beyond standard capabilities. Simultaneously, I build responsive, high-performance websites using React.js. I thrive in challenging environments where I can take ownership of projects, evident from my work on live corporate websites and internal management systems. I am passionate about writing clean code and continuously learning new technologies in the Dynamics 365 ecosystem.`;





export const PROJECTS = [
  {
    title: "Techspace Official Site",
    image: project6, // Make sure to save the Techspace screenshot as project-5.png
    description:
      "Designed and developed the official corporate website for Techspace. The site features a professional modern UI, fully responsive layout, and optimized performance to effectively represent the company's brand identity and services.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: 'https://github.com/jags-techspace/trunk/tree/main/techspacesite', 
    link: 'https://www.techspace.se/'
  },
  {
    title: "Stadfix Services",
    image: project5, 
    description:
      "A professional service-based website built for Stadfix. Focused on clean navigation, service showcasing, and mobile responsiveness to ensure a seamless user experience for potential customers looking for cleaning services.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: 'https://github.com/jags-techspace/trunk/tree/main/stadfix0', 
    link: 'https://www.stadfix.com/'
  },
  {
    title: "Labathon Company",
    image: project3,
    description:
      "Built a custom website for Labathon, focusing on clean UI/UX and fast loading speeds. The application allows users to interact with the services efficiently.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: 'https://github.com/jags-techspace/trunk/tree/main/Labathon%20%E2%80%94%20Technology%20consulting%20space%20company',
    link: 'https://labathon.com/'
  },
  {
    title: "Weather Website",
    image: project2,
    description:
      "This is a simple and responsive weather website built using React, HTML, and Tailwind CSS. It allows users to check real-time weather conditions by entering the name of any city. It fetches data from a weather API and presents it in a visually appealing layout.",
    technologies: ["HTML", "Tailwindcss", "React"],
    github: 'https://github.com/VishnuTamrakar/weather-website',
    link: 'https://check-weatherrr.netlify.app/'
  },
  {
    title: "Product Designer Portfolio",
    image: project4,
    description:
      "Developed a fully responsive, animated portfolio website for a product designer using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll for smooth scrolling effects.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: 'https://github.com/VishnuTamrakar/animation-website',
    link: 'https://animate-websitee.netlify.app/'
  },
  {
    title: "E-Wallet App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication managed via Firebase.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    github: 'https://github.com/VishnuTamrakar/e-wallet',
    link: 'https://gleaming-raindrop-0c9d2b.netlify.app/'
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra.",
  phoneNo: "8657373029",
  email: "vishnu.dev.tamatta@gmail.com",
};