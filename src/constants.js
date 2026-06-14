// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import gecLogo from './assets/education_logo/gec_logo.png';
import sjsLogo from './assets/education_logo/sjs_logo.png'
import ckLogo from './assets/education_logo/ck_logo.jpg';


// Project Section Logo's
import authify from './assets/work_logo/authify.png';
import textControl from './assets/work_logo/text-control.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import homeDecor from './assets/work_logo/home-decor.png';
// import npmLogo from './assets/work_logo/npm.png';


// certification section.
import java_basics from './assets/certificates/java_basics.png';
import java_programming from './assets/certificates/java_programming.png';
import NoSQL_db from './assets/certificates/NoSQL_db.png';
import agile from './assets/certificates/agile.png';
import dbms1 from './assets/certificates/dbms1.png';
import dbms2 from './assets/certificates/dbms2.png';
import java_iit from './assets/certificates/java_iit.png';
import java_foundation_certification from './assets/certificates/java_foundation_certification.png';
import CyberSecurity from './assets/certificates/CyberSecurity.png';
import SE_simulation from './assets/certificates/SE_simulation.png';
import AWS from './assets/certificates/AWS.png';
import Dsa from './assets/certificates/Dsa.png';
import oci_ai from './assets/certificates/oci_ai.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];


export const education = [
  {
    id: 1,
    img: gecLogo,
    school: "GOVERNMENT ENGINEERING COLLEGE, MODASA",
    date: "August 2023 - july 2027 (Expected)",
    grade: "8.52 CGPA (Till 5th Sem)",
    desc: "Currently pursuing a Bachelor's degree in Computer Engineering at Government Engineering College, Modasa, where I am building a strong foundation in software development, data structures, algorithms, and modern computing technologies. Actively involved in projects and learning opportunities to enhance my technical skills and practical knowledge.",
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
  },
  {
    id: 2,
    img: ckLogo,
    school: "C.K. Prajapati School, Vaodara",
    date: "May 2022 - March 2023",
    grade: "70%",
    desc: "I completed my class 12 education from C.K. Prajapati School, Vadodara, under the Gujarat board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "Standard (XII) - PCM with Computer",
  },
  {
    id: 3,
    img: sjsLogo,
    school: "Saint Joseph High School",
    date: "July 2020 - March 2021",
    grade: "87.17%",
    desc:"Completed Secondary School (10th) with consistent academic performance, developing essential skills in logical reasoning, mathematics, and a disciplined approach to learning.",
    degree: "Standard (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Authify",
    description:
      "An authetication system build using React, Spring Boot and PostgreSQL . Here all the users can register themselves through email id and password , they can even change thier pssword if they forgot it using OTP. I have used Brevo here to send OTP to the users. ",
    image: authify,
    tags: [ "React JS", "Bootstrap", "Spring Boot", "PostgreSQL", "Brevo"],
    github: "https://github.com/Amit1374/authify-server.git",
    webapp: "https://authify-client-vkka.onrender.com",
  },
  
  {
    id: 1,
    title: "Home Decor",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image:homeDecor,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amit1374/Home-decor.git",
    webapp: "https://krisha-enterprise.vercel.app/",
  },
  {
    id: 2,
    title: "Shopsphere",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Text Control",
    description:
      "A text editor based web application that can be used to to make simple text modification  like uppercase , lower case , sentence case and others and counting the no. or words in the given text.",
    image: textControl,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amit1374/Text-Control.git",
    webapp: "https://textcontrol.vercel.app/",
  },
  
];  


export const certifications = [
   {
     id:1,
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    date: "2026",
    credentialId: "",
    image:oci_ai,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CBB8B547D23084C56A05301AC6BAB8A013CA3CC4888FDC25CC7F905586B5D682",
    category: "AI/ML"
    
  },
   {
     id:2,
    title: "Data Structures and Algorithms using Java",
    issuer: "Infosys Springboard",
    date: "2026",
    credentialId: "",
    image:Dsa,
    link: "https://verify.onwingspan.com",
    category: "Java Technology"
    
  },
  {
     id:3,
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2026",
    credentialId: "",
    image:java_foundation_certification,
    link: "https://verify.onwingspan.com",
    category: "Java Technology"
    
  },

  {
    id:4,
    title: "Java Training (IIT Bombay)",
    issuer: "Spoken Tutorial( IIT Bombay)",
    date: "2024",
    credentialId: "",
    image:java_iit,
    link: "https://your-link.com",
    category: "Java"
    
  },
   
   {
    id:5,
    title: "Database Management System part-2",
    issuer: "Infosys",
    date: "2026",
    credentialId: "",
    image:dbms2,
    link: "https://verify.onwingspan.com",
    category: "DBMS"
  },
   {
    id:6,
    title: "Database Management System part-1",
    issuer: "Infosys",
    date: "2026",
    credentialId: "",
    image:dbms1,
    link: "https://verify.onwingspan.com",
    category: "DBMS"
   
  },
   {
    id:7,
    title: "Agile Scrum in Practise",
    issuer: "Infosys",
    date: "2026",
    credentialId: "",
    image:agile,
    link: "https://verify.onwingspan.com",
    category: "Software Engineering"
    
  },
  {
    id:8,
    title: "Intoduction to NoSQL Databases",
    issuer: "Infosys",
    date: "2026",
    credentialId: "",
    image:NoSQL_db,
    link: "https://verify.onwingspan.com",
    category: "DBMS"
    
  },
  {
    id:9,
    title: "Programming using java",
    issuer: "Infosys",
    date: "2026",
    credentialId: "",
    image: java_programming,
    link: "https://verify.onwingspan.com",
    category: "Java Technology"
    
  },
  {
    id: 10,
    title: "Java Programming fundamentals",
    issuer: "Infosys",
    date: "2026",
    credentialId: "",
    image: java_basics,
    link: "https://verify.onwingspan.com",
    category: "Java Technology"
   
  },
  
  {
    id:11,
    title: "Software Engineering Job Simulation",
    issuer: "Forage (JP Morgan)",
    date: "2026",
    credentialId: "",
    image:SE_simulation,
    link: "https://www.theforage.com/simulations/jpmorgan/advanced-software-engineering-r0fm/completed",
    category: "Software Engineering"
    
  },
  {
    id:12,
    title: "AWS Architecture Job Simulation",
    issuer: "Forage (AWS)",
    date: "2025",
    credentialId: "",
    image:AWS,
    link: "https://your-link.com",
    category: "Software Engineering"
    
  },
   {
    id:13,
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage (TCS)",
    date: "2025",
    credentialId: "",
    image:CyberSecurity,
    link: "https://your-link.com",
    category: "Software Engineering"
    
  },
];

