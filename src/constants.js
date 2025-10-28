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
import cLogo from './assets/tech_logo/c.png';
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


// Project Section Logo's
import authify from './assets/work_logo/authify.png';
import textControl from './assets/work_logo/text-control.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';



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
      { name: 'C', logo: cLogo },
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
    grade: "8.39 CGPA (Till 4th Sem)",
    desc: "Currently pursuing a Bachelor's degree in Computer Engineering at Government Engineering College, Modasa, where I am building a strong foundation in software development, data structures, algorithms, and modern computing technologies. Actively involved in projects and learning opportunities to enhance my technical skills and practical knowledge.",
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
  },
  {
    id: 2,
    img: sjsLogo,
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
    grade: "84.5%",
    desc:"Completed Secondary School (10th) with consistent academic performance, developing essential skills in logical reasoning, mathematics, and a disciplined approach to learning.",
    degree: "Standard (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Authify",
    description:
      "An authetication system build using React, Spring Boot and MySQL . Here all the users can register themselves through email id and password , they can even change thier pssword if they forgot it using OTP. I have used Brevo here to send OTP to the users. ",
    image: authify,
    tags: [ "React JS", "Bootstrap", "Spring Boot", "MySQL", "Brevo"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Text Control",
    description:
      "A text editor based web application that can be used to to make simple text modification  like uppercase , lower case , sentence case and others and counting the no. or words in the given text.",
    image: textControl,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "",
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
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "",
    webapp: "",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "",
    webapp: "",
  },
];  