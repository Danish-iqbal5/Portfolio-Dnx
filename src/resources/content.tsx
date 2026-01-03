import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Danish",
  lastName: "Iqbal",
  name: `Danish Iqbal`,
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpeg",
  email: "ik340779@gmail.com",
  location: "Asia/Karachi", // Peshawar, Pakistan falls under Asia/Karachi timezone
  languages: ["English", "Urdu"],
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Danish-iqbal5",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/danish-iqbal-08a258275/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Danish Iqbal — Full Stack Engineer",
  description: "Portfolio of Danish Iqbal, a passionate Full Stack Engineer skilled in Node.js, Django, and React, focused on building secure and high-performance web systems.",
  headline: <>I design and build powerful backend systems and modern full-stack solutions.</>,
  featured: {
    display: true,
    title: "Flight Management System",
    href: "/work/flights-system",
  },
  subline: <>I&apos;m a backend and full-stack engineer with a passion for secure architectures, clean APIs, and smooth developer experience. My projects combine performance, reliability, and design clarity.</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        I&apos;m Danish Iqbal, a Full Stack Engineer from Peshawar, Pakistan. I specialize in backend development 
        using Node.js and Django, and build dynamic frontends using React and Next.js. I&apos;m also interested 
        in cybersecurity, system engineering, and firmware development. My goal is to build secure and 
        scalable software that makes a real impact.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance & Personal Projects",
        timeframe: "2023 - Present",
        role: "Full Stack Engineer",
        achievements: [
          <>Developed scalable backend systems with Node.js and Django.</>,
          <>Built secure authentication, role-based permissions, and dynamic API-driven UIs.</>,
        ],
        images: [
          ],
      },
        {
          company: "Dynamics Solutions and Technology — Lahore",
          timeframe: "Aug 2025 - Oct 2025",
          role: "Full Stack Dev Intern",
          achievements: [
            <>Completed a two-month internship working on full-stack features and integrations.</>,
            <>Contributed to backend APIs, frontend components, and testing workflows.</>,
          ],
          images: [],
        },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "CECOS University of IT and Emerging Sciences",
        description: (
          <>
            BS Computer Science — expected 2023 - 2027. Current CGPA: 3.2.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>Building REST APIs, authentication, and secure systems with Node.js and Django.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "Express.js",
            icon: "express",
          },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>Building fast, responsive interfaces with React and Next.js.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "DevOps & Deployment",
        description: (
          <>Containerization and deployment using Docker, Kubernetes, and CI/CD pipelines.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        images: [],
      },
      {
        title: "Cybersecurity & Systems",
        description: (
          <>Exploring secure backend architectures, authentication mechanisms, and network systems.</>
        ),
        tags: [
          {
            name: "CEH",
            icon: "shield",
          },
          {
            name: "Network Security",
            icon: "lock",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "",
  label: "",
  title: "",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "",
  label: "",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
// Whitelist of project slugs to include on the site. Only these project files will be listed.
export const allowedProjectSlugs = [
  "flights-system",
  "saas-ecommerce-platform",
  "permissions-system",
];
