import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png"
import project6 from "../assets/projects/project-6.png"
import project7 from "../assets/projects/project-7.png"
import project8 from "../assets/projects/project-8.jpg"
import project0 from "../assets/projects/project-0.png"



export const HERO_CONTENT = `Full-stack engineer who turns ideas into real-world products across fintech, logistics, mobile, and AI. I specialize in backend engineering with Python and Java, frontend with React and TypeScript, and cross-platform mobile with Flutter. 18, based in Lagos, open to remote roles and relocation worldwide. I've worked in teams, led sprints, and built entire platforms solo from zero to live users. Most recently shipped HireJourney, an AI career platform with 40+ APIs, LLM integrations, a Chrome extension, and dual payment infrastructure serving Nigeria and the world. I write clean APIs, ship fast, and take full ownership of whatever I touch.`;

export const ABOUT_TEXT = `I started writing code at 15, freelancing for clients in the UK before most people my age had their first job. Since then I've built fintech backends, Flutter mobile apps, booking platforms, and logistics APIs across teams and independently.
Most recently I built HireJourney solo from scratch. FastAPI backend, React and TypeScript frontend, OpenRouter LLM integrations, Redis caching, Chrome extension, and dual payment infrastructure with automatic IP-based routing. Live users, real product.
I've worked in agile teams, shipped under pressure, and taken ownership of features end to end. Whether I'm collaborating or building independently, I show up the same way focused on outcomes, not just tasks.`;

export const EXPERIENCES = [
  {
year: "Oct 2025 - Present",
role: "Full-Stack Engineer & Founder",
company: "HireJourney",
description: `Built and shipped a full-stack AI career platform entirely solo from zero to live users. Designed and developed 40+ RESTful APIs with FastAPI covering auth, resume analysis, job tracking, cover letter generation, and interview simulation. Integrated OpenRouter for real-time LLM features including job fit scoring, ATS analysis, and dynamic interview question generation tailored to specific job descriptions. Built a voice-driven Interview Simulator using the Web Speech API with zero third-party cost. Shipped a Chrome Extension that pulls job descriptions from job boards and triggers AI analysis in one click. Implemented dual payment infrastructure with Paystack and Lemon Squeezy with automatic IP-based routing for Nigerian and international users. Deployed backend on Fly.io and frontend on Vercel with full CI/CD pipeline.`,
technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "OpenRouter", "Chrome Extension", "Paystack", "Lemon Squeezy", "Fly.io", "Vercel"],
},
  {
    year: "May 2025",
    role: "Backend Developer",
    company: " Meerge Africa",
    description: `Lead backend engineer driving the design and implementation of a startup Logistics Plaform.`,
    technologies: ["Python", "Django", "Agile Methodology", "Version Control"],
  },

  {
    year: "February 2025 - April 2025",
    role: "Mobile Developer",
    company: " 3ribe",
    description: `At 3ribe, I gained hands-on experience in mobile development by working on a Flutter-based application, improving UI responsiveness and optimizing the user experience.`,
    technologies: ["Flutter", "Firebase", "Agile Methodology", "Version Control"],
  },
  {
    year: "Feb 2024 - Feb 2025",
    role: "Software Engineer",
    company: " Semicolon Africa",
    description: `Built scalable backend systems and APIs that powered fast, reliable web and mobile apps. Focused on clean code, performance, and ease of maintenance to improve both user experience and developer workflow. Worked closely with cross-functional teams to deliver features that scaled smoothly and were easy to support.`,
    technologies: ["Full-Stack Development","Databases", "Agile Methodology", "Version Control", "Design-Thinking", "Critical-Thinking",],
  },
  {
    year:"January 2023 – February 2024",
    role: "Software Engineer",
    company: " Independent Contracts",
    description:`Delivered end-to-end software solutions for international clients across lifestyle, e-commerce, and personal branding sectors, focusing on scalability, usability, and performance.`,
    technologies: ["Full-stack Development", "React", "TailwindCSS", "HTML", "CSS"]
  }
  

  

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
    title: "Consumer Data Ingestion System",
    image: project8,
    github:"https://github.com/Tijanifareed/aktos-assignment.git",
    postman:"https://fareed-team-7973.postman.co/workspace/c6250aa7-94a0-49bf-8031-508196beb84e/collection/44846809-153e881b-cb50-4d91-a430-176933ea161e?action=share&source=copy-link&creator=44846809",
    description:
      "A robust full-stack Django application to ingest, manage, and query consumer data, featuring a scalable API with filtering and offset-based pagination for handling large datasets.",
    technologies: [ "Python, Django, PostgreSQL (Railway), Render, Postman, Git, Vercel"],
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
    technologies: ["React", "Vite", "TailwindCSS"],
  },
  
  {
    title: "Personal Portfolio Website",
    image: project3,
    github:"https://github.com/Tijanifareed/MyPortfolio.git",
    postman:"",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer-motion"],
  },
  {
    title: "Digital Library management system (Backend)",
    image: project4,
    github:"https://github.com/Tijanifareed/Library-Management-System.git",
    postman:"",
    description:
      "The Digital Library Management System automates core library functions. It manages book collections and member records, allowing users to borrow, return, and reserve books, while automatically generating fines for overdue items. Administrators have full control to update and manage all records.",
    technologies: ["Java(Spring-Boot)", "MySQL"],
  },

  {
    title: "Online Clothing Store",
    image: project6,
    github:"https://interwave-one.vercel.app/",
    postman:"",
    description:
      "Built A demo e-commerce website for a clothing brand",
    technologies: ["NextJS", "React", "TailwindCSS"],
  },

  {
    title: "Makeup Artist E-commerce Site",
    image: project7,
    github:"https://beautybytumi.vercel.app/",
    postman:"",
    description:
      "Built A demo website for a make-up Artist.",
    technologies: ["NextJS", "React", "TailwindCSS"],
  },


  
];

export const CONTACT = {
  address: "Sabo, Lagos, Nigeria",
  phoneNo: "+2348130926516",
  email: "fareedtijani2810@gmail.com",
};
