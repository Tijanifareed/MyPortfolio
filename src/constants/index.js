import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png"

export const HERO_CONTENT = `I am a highly productive Software Engineer passionate about designing scalable, high-performance software solutions. I am proficient in Java, Python, JavaScript, Dart, TypeScript, and HTML, i am experienced with frameworks and tools such as  Spring Boot, Flutter, Django, React, NestJS, Tailwind CSS, Flask, Node.js, and Next.js. I have strong knowledge in database management and version control, and am skilled in building secure REST APIs and implementing robust authentication protocols.`;

export const ABOUT_TEXT = `I am a dedicated software engineer who thrives on problem-solving and leverages a diverse range of technologies as tools to overcome challenges. I believe that the right approach can transform complex issues into opportunities for innovation and efficiency. My proactive mindset and continuous learning enable me to adapt quickly in dynamic environments, always striving to deliver high-quality, impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Backend Developer(Django)",
    company: " Meerge Africa",
    description: `Lead backend engineer driving the design and implementation of a startup delivery platform and fintech features .`,
    technologies: ["Python", "Django", "Agile Methodology", "Version Control",],
  },

  {
    year: "Feb 2025 - May 2025",
    role: "Mobile Developer (Intern)",
    company: " 3ribe",
    description: `At 3ribe, I gained hands-on experience in mobile development by working on a Flutter-based application, improving UI responsiveness and optimizing the user experience.`,
    technologies: ["Flutter","Firebase", "Agile Methodology", "Version Control",],
  },
  {
    year: "Feb 2024 -Feb 2025",
    role: "Software Engineer (Trainee)",
    company: " Semicolon Africa",
    description: `I immersed myself in a fast-paced, collaborative environment that honed my problem-solving and adaptive learning skills. I developed a solid foundation in full-stack web development while embracing agile methodologies, which improved my teamwork, communication, and ability to navigate complex challenges efficiently.`,
    technologies: ["Full-Stack Development","Databases", "Agile Methodology", "Version Control", "Design-Thinking", "Critical-Thinking",],
  },
  

  

];

export const PROJECTS = [
  {
    title: "CommsBridge Mobile App",
    image: project1,
    github:"https://github.com/CommsBridge",
    postman:"https://documenter.getpostman.com/view/36978958/2sAYX8HLW5",
    description:
      "An assistive mobile app enhancing communication for the hearing impaired.",
    technologies: ["Flutter(Dart)", "Java(Spring-Boot)", "Python(FastAPI)", "MySQL", ],
  },
  {
    title: "RealMart",
    image: project2,
    github:"https://github.com/RealMarts",
    postman:"",
    description:
      "A full-stack online marketplace for seamless buying and selling of handmade products.",
    technologies: ["Java(Spring-Boot)", "React", "TailwindCSS", "PostgreSQL"],
  },

  {
    title: "Treelink-Inspired Portfolio for Fabhands",
    image: project5,
    github:"https://fabhands-link.vercel.app/",
    postman:"",
    description:
      "Designed and developed a streamlined Link-in-bio site for a  freelance artist with booking and digital brochure.",
    technologies: ["React", "Vite", "TailwindCSS",],
  },
  
  {
    title: "Portfolio Website",
    image: project3,
    github:"https://github.com/Tijanifareed/MyPortfolio.git",
    postman:"",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer-motion",],
  },
  {
    title: "Digital Library management system Backend",
    image: project4,
    github:"https://github.com/Tijanifareed/Library-Management-System.git",
    postman:"",
    description:
      "The Digital Library Management System automates core library functions. It manages book collections and member records, allowing users to borrow, return, and reserve books, while automatically generating fines for overdue items. Administrators have full control to update and manage all records.",
    technologies: ["Java(Spring-Boot)", "MySQL"],
  },
];

export const CONTACT = {
  address: "Sabo, Lagos, Nigeria",
  phoneNo: "+234 8130926516",
  email: "fareedtijani2810@gmail.com",
};
