import {
  php,
  python,
  cpp,
  aws,
  cs,
  flutter,
  mysql,
  backend,
  creator,
  mobile,
  web,
  css,
  html,
  javascript,
  mongodb,
  typescript,
  parrolabs,
  alfa,
  bairesdev,
  globant,
  intern,
  portfolio,
  dima,
  cms,
  colo,
  CRM,
  PMTSB,
  sol,
  tmst,
  BairesDev,
  Inte,
  Parro
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web3 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "cs",
    icon: cs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  }, 
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "Intern Colombia",
    icon: intern,
    iconBg: "#383E56",
    date: "Jun 2019 - Dec 2019",
    points: [
      "Assisted in the development of responsive websites for small businesses, gaining experience in HTML, CSS, and JavaScript.",
      "Collaborated with the design team to ensure pixel-perfect implementation of UI/UX designs.",
      "Conducted cross-browser compatibility testing, ensuring functionality across multiple platforms.",
      "Learned to work in a professional environment, meeting deadlines and improving communication skills.",
    ],
  },
  {
    title: "Junior Front End Developer",
    company_name: "BairesDev",
    icon: bairesdev,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Mar 2021",
    points: [
      "Developed interactive and user-friendly interfaces for web applications using React.js and Redux.",
      "Optimized front-end performance, reducing page load times by up to 30%.",
      "Partnered with UX designers to create engaging interfaces, implementing feedback to enhance usability.",
      "Participated in code reviews and contributed to improving the team’s coding standards.",
      "Used version control systems like Git to maintain code quality and collaborate effectively"
    ],
  },
  {
    title: "Junior Back End Developer",
    company_name: "Globant",
    icon: globant,
    iconBg: "#383E56",
    date: "Apr 2021 - May 2022",
    points: [
      "Built RESTful APIs and integrated third-party services for scalable applications using Node.js and Express.js.",
      "Collaborated with front-end teams to ensure seamless data flow and functionality between client and server.",
      "Improved database query performance by implementing indexing strategies, reducing response times by 40%.",
      "Gained experience in microservices architecture, enhancing the modularity of applications.",
      "Worked closely with senior developers to resolve bugs and implement new features within deadlines."
    ],
  },
  {
    title: "Back End Developer",
    company_name: "AlfamediaWEB",
    icon: alfa,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Designed and implemented robust server-side logic for web applications using PHP frameworks like Laravel.",
      "Developed and maintained APIs for mobile and web applications, ensuring secure and efficient data transmission.",
      "Integrated MongoDB and MySQL databases, optimizing queries for complex data operations.",
      "Collaborated with DevOps engineers to deploy applications in production environments.",
      "Provided post-deployment support and addressed critical issues to ensure high availability."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Parrolabs",
    icon: parrolabs,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jul 2024",
    points: [
      "Developed full-stack web applications using React.js, Node.js, and Express.js, delivering scalable and efficient solutions.",
      "Integrated blockchain functionality into client projects, ensuring secure and transparent operations.",
      "Led a project to refactor legacy code, improving maintainability and reducing technical debt by 25%.",
      "Mentored junior developers, fostering a collaborative environment and improving team productivity.",
      "Created detailed project documentation and provided technical support to clients post-deployment."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kevin made notable contributions to the front-end development at BairesDev. Despite being early in his career, he demonstrated a solid understanding of web technologies, and his work on creating responsive layouts and intuitive user interfaces added significant value to our projects.",
    name: "Justice Erolin",
    designation: "CTO",
    company: "BairesDev",
    image: BairesDev,
  },
  {
    testimonial:
      "Kevin was always eager to learn and share his knowledge with the team. He worked on backend systems with a focus on functionality and security. His collaborative approach and problem-solving skills made him a pleasure to work with.",
    name: "Matthew Barfield",
    designation: "PD",
    company: "Intern Colombia",
    image: Inte,
  },
  {
    testimonial:
      "Working with Kevin was a pleasure. He was responsive, professional, and delivered our task management system ahead of schedule. His implementation of real-time updates using Socket.io transformed how our team collaborates.",
    name: "Niels Siskens",
    designation: "CEO",
    company: "Parrolabs",
    image: Parro,
  },
];

const projects = [
  {
    name: "Task Management System for Teams",
    description:
      "Developed both front-end and back-end features, created dynamic user interfaces with React.js, implemented real-time task updates using Socket.io, and built RESTful APIs with Node.js and MongoDB.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "green-text-gradient",
      },
    ],
    image: tmst,
    source_code_link: "https://github.com/",
  },
  {
    name: "Colombia.travel development",
    description:
      "Responsible for designing, developing, and maintaining the client/server-side architecture to ensure the platform's functionality, security, and scalability.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: colo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Content Management System (CMS) API",
    description:
      "Designed and developed a RESTful API for content management, handled data storage with MongoDB, implemented secure user authentication with JWT, and ensured role-based access control for different user permissions.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB ",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "orange-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/",
  },
  {
    name: "CRM System with Real-Time Messaging",
    description:
      "Contributed to building the back-end using Node.js and PostgreSQL, integrated real-time chat functionality with WebSocket, and developed the front-end using React.js for a responsive UI.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: CRM,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dimayor Backend Development",
    description:
      "Worked as one of backend developers and contributed to this project in backend development DIMAYOR, is an organization responsible for organizing and operating professional football leagues and tournaments in Colombia. I worked as one of backend developers and contributed to this project in backend development",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "pink-text-gradient",
      },
    ],
    image: dima,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Management Tool for Small Businesses",
    description:
      "Worked on the front-end using React.js to create interactive features, built back-end APIs with Node.js and MongoDB, and integrated Stripe API for handling subscriptions and payments.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe API",
        color: "orange-text-gradient",
      },
    ],
    image: PMTSB,
    source_code_link: "https://github.com/",
  },
  {
    name: "Solmaq shopping website",
    description:
      "Responsible for designing, developing, and maintaining the server-side architecture to ensure the platform's functionality, security, and scalability. In my role as a backend developer for Solmaq.com, I was responsible for designing, developing, and maintaining the server-side architecture to ensure the platform's functionality, security, and scalability.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: sol,
    source_code_link: "https://github.com/",
  },
  {
    name: "Digital Portfolio Platform",
    description:
      "Developed front-end components using React.js, ensured mobile responsiveness with CSS and Bootstrap, and created interactive elements like image galleries and smooth navigation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
