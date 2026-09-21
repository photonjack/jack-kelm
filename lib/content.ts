export const siteConfig = {
  name: "Jack Kelm",
  title: "Automation Engineer, CMSE",
  credentials: "CMSE",
  tagline:
    "9 years automating manufacturing — $55M+ in identified savings across 800+ robot cell projects",
  location: "Northfield, OH",
  email: "Jackkelm13@gmail.com",
  phone: "(330) 241-7532",
  phoneHref: "tel:+13302417532",
  linkedin: "https://www.linkedin.com/in/jack-kelm-a40412b3/",
  resumePdf: "/resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jack-kelm.vercel.app",
};

export const about = {
  paragraphs: [
    "I'm Jack Kelm, CMSE — a mechanical engineer and Certified Machinery Safety Expert based in Northfield, Ohio. For nearly a decade at Parker Hannifin, I've designed, programmed, and delivered industrial robot cells that cut labor costs, raise throughput, and keep people safer on the manufacturing floor.",
    "My work spans the full automation lifecycle: business-case development, robot cell design (structure, electrical, sensors, programming, and safety), risk assessments to RIA R15.06 / R15.08, and remote project leadership across North American plants. I've also deep experience in computer vision, CAD, additive manufacturing, and 3D scanning.",
    "Whether you're hiring for an automation engineering role or looking for manufacturing automation consulting in the Cleveland–Akron area, I bring hands-on robotics expertise backed by measurable results and TÜV NORD–certified machinery safety credentials.",
  ],
};

export type ExperienceRole = {
  company: string;
  location: string;
  title: string;
  period: string;
  highlights: { title?: string; body: string }[];
};

export const experience: ExperienceRole[] = [
  {
    company: "Parker Hannifin",
    location: "Macedonia, OH",
    title: "Automation Engineer",
    period: "July 2017 – Present",
    highlights: [
      {
        title: "Business Case Development (2023 – present)",
        body: "Identified $55M worth of yearly savings across one-fifth of Parker's North American manufacturing plants.",
      },
      {
        title: "Project Management",
        body: "Provided technical expertise for 800+ robot cell projects at remote Parker sites — covering structure, electrical, sensors, programming, safety, and risk assessment per RIA R15.08.",
      },
      {
        body: "Designed and implemented a robot cell that saved 12 FTEs conducting ventilator valve testing, increasing throughput during a 12× surge in demand for ventilator valves during the global pandemic.",
      },
      {
        body: "Identified and remotely managed automation projects, including fluid valve testing automation. Visited the site to prioritize opportunities and directed the on-site engineer through implementation — ultimately delivering $2.8M/year in savings through improved throughput and reduced labor costs.",
      },
    ],
  },
  {
    company: "Hyson Metal Forming Solutions",
    location: "Brecksville, OH",
    title: "Engineering Co-op",
    period: "Summers 2013 – 2015",
    highlights: [
      {
        body: "Rotating roles in shop operations, HSE/quality, and engineering — building foundational manufacturing and process-improvement experience.",
      },
    ],
  },
];

export type SkillGroup = {
  name: string;
  items?: string[];
  subgroups?: { name: string; items: string[] }[];
};

export const skills: SkillGroup[] = [
  {
    name: "Robotics",
    subgroups: [
      {
        name: "ABB",
        items: [
          "Programming 1",
          "Programming 2",
          "Programming 3",
          "SafeMove2",
          "RobotStudio 1",
          "RobotStudio 2",
        ],
      },
      {
        name: "Fanuc",
        items: [
          "HandlingTool",
          "Advanced Teach Pendant",
          "Roboguide",
          "DCS",
        ],
      },
      {
        name: "Kuka",
        items: ["Programming 1"],
      },
      {
        name: "Universal Robots",
        items: ["All training"],
      },
    ],
  },
  {
    name: "Computer Vision",
    items: ["Keyence", "Cognex", "Teledyne"],
  },
  {
    name: "CAD & Simulation",
    items: [
      "SolidWorks",
      "CATIA V5",
      "Inventor",
      "Fusion 360",
      "SpaceClaim",
      "Ansys",
      "Generative Design",
    ],
  },
  {
    name: "Additive Manufacturing",
    items: [
      "Stratasys J750",
      "Fortus (250, 370, 450mc)",
      "Carbon M2",
      "EOS P396",
      "DfAM — Powder-Bed Fusion (metal & plastics)",
      "FDM",
      "Resin",
    ],
  },
  {
    name: "3D Scanning",
    items: ["Artec Spider", "Artec Leo", "Creaform"],
  },
  {
    name: "Safety",
    items: [
      "CMSE® — Certified Machinery Safety Expert",
      "FMEA",
      "Robot Safety",
      "Risk Assessments (RIA R15.06 / R15.08)",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  tags: string[];
};

/** Placeholder projects — replace media in public/projects/ when ready */
export const projects: Project[] = [
  {
    slug: "ventilator-valve-cell",
    title: "Ventilator Valve Test Automation",
    description:
      "Robot cell that replaced 12 FTEs of manual ventilator valve testing and scaled throughput during a 12× demand surge.",
    image: "/projects/placeholder-1.svg",
    tags: ["Robotics", "Testing", "Safety"],
  },
  {
    slug: "fluid-valve-automation",
    title: "Fluid Valve Testing Automation",
    description:
      "Site assessment and remote project leadership delivering $2.8M/year in savings through improved testing throughput and labor reduction.",
    image: "/projects/placeholder-2.svg",
    tags: ["Automation", "Project Management"],
  },
  {
    slug: "robot-cell-portfolio",
    title: "800+ Robot Cell Projects",
    description:
      "Technical expertise across structure, electrical, sensors, programming, and RIA-compliant safety for robot cells at remote manufacturing sites.",
    image: "/projects/placeholder-3.svg",
    tags: ["ABB", "Fanuc", "Kuka", "UR"],
  },
];

export const education = {
  school: "Embry-Riddle Aeronautical University",
  location: "Daytona Beach, FL",
  degree: "Mechanical Engineering (Robotics Concentration)",
  graduated: "May 2017",
};

export type Certification = {
  title: string;
  detail?: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    title: "CMSE® — Certified Machinery Safety Expert",
    detail:
      "Pilz training · Examined and certified by TÜV NORD CERT (Cert. No. 44 506 26 094038 0447). Valid March 13, 2026 – March 13, 2030.",
    href: "/cmse-certificate.pdf",
  },
  {
    title: "Certified ABB Robot Studio 1 Trainer",
  },
  {
    title:
      "First Place Winner — 2016 Tech Entrepreneurship Expo, Embry-Riddle Aeronautical University",
  },
  {
    title: "Private Pilot",
  },
];

export const faqs = [
  {
    question: "What robotics platforms does Jack Kelm work with?",
    answer:
      "Jack works with ABB (Programming 1–3, SafeMove2, RobotStudio 1–2), Fanuc (HandlingTool, Advanced Teach Pendant, Roboguide, DCS), Kuka (Programming 1), and Universal Robots (full training suite) for industrial robot cell design, programming, and safety.",
  },
  {
    question: "Is Jack Kelm a Certified Machinery Safety Expert (CMSE)?",
    answer:
      "Yes. Jack Kelm is a CMSE® — Certified Machinery Safety Expert. After Pilz CMSE training, he passed the TÜV NORD CERT examination (certificate 44 506 26 094038 0447, valid through March 13, 2030).",
  },
  {
    question: "Where is Jack Kelm based?",
    answer:
      "Jack is based in Northfield, Ohio, serving manufacturing and automation opportunities in the Cleveland–Akron area and remotely across North America.",
  },
  {
    question: "What kind of automation work does Jack do?",
    answer:
      "Jack specializes in manufacturing automation engineering and consulting: robot cell design, computer vision integration, machinery safety and risk assessments (RIA R15.06/R15.08), additive manufacturing, and business-case development for automation investments.",
  },
  {
    question: "Does Jack Kelm offer automation consulting?",
    answer:
      "Yes. With 9 years at Parker Hannifin delivering 800+ robot cell projects, identifying $55M+ in annual savings, and CMSE® machinery safety credentials, Jack is available for automation engineering roles and manufacturing automation consulting.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const allKnowsAbout = [
  "Automation Engineering",
  "Industrial Robotics",
  "Robot Cell Design",
  "ABB",
  "ABB Programming",
  "ABB SafeMove2",
  "ABB RobotStudio",
  "Fanuc",
  "Fanuc HandlingTool",
  "Fanuc Roboguide",
  "Fanuc DCS",
  "Kuka",
  "Kuka Programming",
  "Universal Robots",
  "Computer Vision",
  "Keyence",
  "Cognex",
  "Manufacturing Automation",
  "Additive Manufacturing",
  "Design for Additive Manufacturing",
  "SolidWorks",
  "CATIA V5",
  "RIA R15.06",
  "Robot Safety",
  "Machinery Safety",
  "CMSE",
  "Certified Machinery Safety Expert",
  "3D Scanning",
];
