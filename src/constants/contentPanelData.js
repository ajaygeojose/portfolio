import { questLogo, riskcovryLogo, ontashLogo } from "../assets/logos/logos";
export const PROFILE = `Innovative and results-driven web developer with 6+ years of experience crafting high-performance, user-first applications across diverse industries. Expert in modern front-end technologies including React.js, JavaScript (ES6+), Redux, and responsive UI/UX design, with a sharp focus on accessibility and performance optimization. Adept at translating complex requirements into elegant, scalable solutions by leveraging tools like Plotly.js for data visualization, AWS for cloud deployment, and DevOps automation for streamlined delivery. Proven leadership in mentoring junior developers and collaborating cross-functionally to launch impactful digital experiences. Passionate about building intuitive interfaces and driving innovation through clean code, strategic thinking, and continuous learning.`;
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AddCardIcon from '@mui/icons-material/AddCard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export const keywords = [
  "6+ years of experience",
  "React.js",
  "JavaScript (ES6+)",
  "Redux",
  "responsive UI/UX design",
  "data visualization",
  "Plotly.js",
  "AWS",
];
export const EXPERIENCE = [
  {
    company: "Riskcovry",
    logo: riskcovryLogo,
    url: "https://riskcovry.com/",
    period: "SEPT 2024 - MAY 2025",
    role: "Senior Front-End Developer - Riskcovry",
    details: [
      "Spearheaded front-end development for Lendpro , driving a 60% boost in user engagement and cutting page load times by 30%.",
      "Engineered scalable, reusable UI components with React and Styled Components, accelerating development cycles by 40%.",
      "Translated complex wireframes into pixel-perfect, responsive interfaces in close collaboration with UX/UI teams",
      "Enhanced performance through code splitting, lazy loading, and strategic caching, resulting in faster, smoother user experiences.",
      "Strengthened code quality by implementing robust unit and integration testing with Jest, reducing production bugs.",
      "Played a key role in architectural planning and codebase refactoring to improve scalability and long-term maintainability.",
    ],
    show: false,
  },

  {
    company: "Quest Global",
    logo: questLogo,
    url: "https://www.questglobal.com/",
    period: "APRIL 2021 - SEPT 2024",
    role: "Senior Front-End Developer - Quest Global",
    details: [
      "Built and maintained responsive web applications using React.js, JavaScript, Plotly.js, Marker.js, MUI, and Tailwind, delivering intuitive user experiences across platforms.",
      "Led and mentored a team of 5 developers, elevating code quality through structured reviews and knowledge sharing.",
      "Developed advanced data visualizations and formula-driven features, contributing to improved decision-making",
      "Collaborated cross-functionally to integrate front-end components with backend systems, ensuring seamless functionality.",
      "Actively participated in Agile ceremonies, driving sprint efficiency and team alignment.",
      "Ensured cross-browser compatibility and compliance with modern web standards for consistent performance",
    ],
    show: false,
  },
  {
    company: "Ontash India Technologies, Calicut",
    logo: ontashLogo,
    url: "https://ontash.net/",
    period: "JUN 2017 - JUN 2019",
    role: "Front-End Developer - Ontash India Technologies",
    details: [
      "Developed responsive UIs for healthcare applications such as DSH Eligibility Checker.",
      "Contributed to UI development within Odoo ERP, enhancing usability and workflows.",
      "Built and maintained company websites including ontash.net, qualityreimbursement.com, and stgeorgemedicalmission.org.",
    ],
    show: false,
  },
];

export const PROJECTS = [
  {
    client: "Insurtech : HDFC, Geojith, Indusind Bank",
    url:"https://riskcovry.com/",
    name: "LendPro",
    company: "Riskcovry",
    period: "2024 - 2025",
    details: [
      "Led the development of a dynamic web application designed to streamline insurance operations by tracking transactions,identifying defaulters, and analyzing sales performance in real time. The platform featured interactive data visualizations and live filtering capabilities to monitor profit margins, product trends, and daily sales targets. A key highlight was the creation of a responsive, agent-centric dashboard that delivered actionable insights on sales loss, growth metrics, and customer behavior. Built using React.js, ES6, Redux, MUI, Node.js, and AWS, the solution empowered insurance teams to make data-driven decisions with speed and precision",
    ],
    logo:AddCardIcon,
    show: false,
  },
  {
    client: "Hitachi - Semi Conductor Industry",
    url:"https://www.questglobal.com/",
    name: "Advanced Graph Hitech",
    company: "Quest Global",
    period: "2021 - 2024",
    details: [
      "Developed a specialized web application for semiconductor fabrication facilities to monitor wafer manufacturing processes and optimize production efficiency. The platform enabled real-time tracking of processor chip fabrication, helping reduce material waste and accelerate throughput. Leveraging custom Plotly.js dashboards, the solution visualized complex FAB workflows, pinpointed defective batches, and surfaced actionable insights to minimize losses. Built with React.js, ES6, Marker.js, Redux, REST APIs, and deployed on Azure, the application empowered engineering teams with intuitive data views and precision-driven decision support.",
    ],
    logo:AutoGraphIcon,
    show: false,
  },
  {
    client: "QRS - Healthcare",
    url:"https://ontash.net/",
    name: "DSH (Disproportionate Share Hospital) ",
    company: "Ontash India Technologies",
    period: "2017 - 2019",
    details: [
      "Designed and implemented a patient eligibility validation system to assess insurance qualification by evaluating key criteria such as age, health status, SSN, income, and dependent information against predefined benchmarks. The solution streamlined reimbursement workflows, flagged defaulters, and ensured efficient record management and backup protocols. Built using Ruby on Rails, jQuery, Bootstrap, and Tailwind CSS, the platform featured intuitive data tables, seamless record upload and editing capabilities, and an integrated mailing system for automated notifications—enhancing operational accuracy and reducing administrative overhead.",
    ],
    logo:HealthAndSafetyIcon,
    show: false,
  },
];

export const EDUCATION = [
  {
    level: "B.Tech in Computer Science Engineering",
    period: "June 2013 - June 2017",
    show: false,
  },
  {
    level: "Higher Secondary School Education",
    period: "June 2011 - June 2013",
    show: false,
  },
];
