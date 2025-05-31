import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";

export const HERO_CONTENT = `Creative and detail-oriented Frontend Developer with hands-on experience in building responsive and dynamic web applications. Proficient in HTML, CSS, JavaScript, and React. Skilled in using Tailwind CSS for rapid and efficient styling and Firebase for real-time databases, authentication, and hosting. Passionate about writing clean, maintainable code and continuously learning new technologies to stay current in the ever-evolving web development landscape. Adept at turning design concepts into high-quality, user-friendly web experiences.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [

  {
    title: "Weather website",
    image: project2,
    description:
      "This is a simple and responsive weather website built using React, HTML, and Tailwind CSS. It allows users to check real-time weather conditions by entering the name of any city. The app displays the temperature, humidity, and wind speed, providing a clean and user-friendly interface for quick weather updates. It fetches data from a weather API and presents it in a visually appealing layout using Tailwind CSS for styling.",
    technologies: ["HTML", "Tailwindcss", "React" ],
    github:'https://github.com/VishnuTamrakar/weather-website',
    link:'https://check-weatherrr.netlify.app/'
  },
  {
    title: "gemini Website",
    image: project3,
    description:
      "I have built a fully functional clone of the Gemini app using React, HTML, and CSS. The application allows users to ask questions and receive intelligent responses, simulating a conversational AI experience.",
    technologies: ["HTML", "CSS", "React", "GeminiApi"],
    github:'https://github.com/VishnuTamrakar/Gemini-clone',
    link:'https://geminiwe.netlify.app/'
  },
  {
    title: "Product Designer",
    image: project4,
    description:
      "Developed a fully responsive, animated portfolio website for a product designer using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll.",
    technologies: ["HTML", "CSS", "Javascript"],
    github:'https://github.com/VishnuTamrakar/animation-website',
    link:'https://animate-websitee.netlify.app/'
  },
  {
    title: "Wallet-website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    github:'https://github.com/VishnuTamrakar/e-wallet',
    link:'https://gleaming-raindrop-0c9d2b.netlify.app/'
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra.",
  phoneNo: "8657373029",
  email: "vishnutamatta142@gmail.com",
};