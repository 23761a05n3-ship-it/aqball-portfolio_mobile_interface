/**
 * Central portfolio data — generated from Aqbal Mohammad's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aqbal Mohammad',
  displayName: 'Mohammad Aqball',
  firstName: 'AQBALL',
  seriesTag: 'THE DEVELOPER',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN AQBALL ORIGINAL',
  role: 'Java Full Stack Developer',
  tagline: ['Java Full Stack Developer', 'AI / ML', 'DSA'],
  intro:
    'A B.Tech Computer Science and Engineering student (CGPA 8.77) building full-stack applications, machine-learning systems and Agentic AI workflows with Java, Python and modern web technologies.',
  location: 'Vijayawada, Andhra Pradesh',
  email: 'mdaqbal763@gmail.com',
  phone: '+91 7396565799',
  links: {
    linkedin: 'https://www.linkedin.com/in/mdaqball-2805vij',
    github: 'https://github.com/AQBAL-debug',
  },
  resumePdf: '/assets/Aqbal_Mohammad_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Mohammad Aqball',
  },
  interests: ['Agentic AI', 'Artificial Intelligence', 'Emerging Technologies'],
};

export const education = [
  {
    school: 'Lakireddy Bali Reddy College of Engineering',
    place: '',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – Present',
    score: 'CGPA 8.77 / 10',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: '',
    degree: 'Intermediate (MPC)',
    period: '2021 – 2023',
    score: '96.9%',
  },
  {
    school: 'Rushi Vidyalayam',
    place: '',
    degree: 'Secondary School Certificate (SSC)',
    period: '2021',
    score: '99.67%',
  },
];

export const experience = [
  {
    company: 'SmartBridge Educational Services Pvt. Ltd. (with APSCHE)',
    role: 'Artificial Intelligence and Machine Learning Intern',
    place: 'Virtual',
    period: '2 Months · 120 Hours',
    points: [
      'Developed OptiCrop, a machine learning-based crop recommendation system using soil and environmental parameters.',
      'Performed data preprocessing and model development using Python, NumPy, Pandas and Scikit-learn.',
      'Developed a Flask-based application for providing crop recommendations based on user inputs.',
    ],
  },
  {
    company: 'SmartBridge (APSCHE Virtual Internship Program)',
    role: 'Full Stack Developer Intern',
    place: 'Virtual',
    period: '2 Months',
    points: [
      'Developed full-stack web application modules using frontend, backend and database technologies.',
      'Integrated REST APIs and database services for dynamic application workflows.',
      'Performed testing and debugging to improve application reliability.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'noc-fault-diagnosis',
    title: 'Agentic AI NOC Fault Diagnosis',
    year: 'In progress',
    genre: 'Agentic AI • Telecom • LLM',
    logline: 'An Agentic AI system for telecom network fault diagnosis, incident analysis and service restoration recommendations.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'OpenRouter'],
    build: [
      'Developing an Agentic AI system for telecom network fault diagnosis, incident analysis, and service restoration recommendations.',
      'Designing multi-agent workflows using LangGraph for alarm correlation, root cause analysis, and anomaly detection.',
      'Building backend APIs with FastAPI and integrating PostgreSQL for incident and network event management.',
      'Integrating LLMs through OpenRouter and incorporating human-in-the-loop approval for proposed remediation actions.',
    ],
    features: [
      'Multi-agent workflows with LangGraph',
      'Alarm correlation & root cause analysis',
      'Anomaly detection',
      'FastAPI + PostgreSQL incident management',
      'Human-in-the-loop approval for remediation',
    ],
    metrics: [
      { value: 'Multi-agent', label: 'LangGraph workflows' },
      { value: 'LLM', label: 'via OpenRouter' },
      { value: 'Human', label: 'in-the-loop approval' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'robotic-vehicle',
    title: 'Multimodal Robotic Vehicle',
    year: '3rd Year',
    genre: 'IoT • Computer Vision • ML',
    logline: 'A robotic vehicle controlled through head gestures and offline voice commands, with decision fusion and an automatic safety stop.',
    stack: ['ESP32', 'Python', 'MediaPipe', 'Vosk', 'Random Forest'],
    build: [
      'Developed a robotic vehicle controlled through head gestures and offline voice commands using MediaPipe FaceMesh and Vosk.',
      'Implemented confidence-based decision fusion using Random Forest and voice matching scores, with an automatic safety stop for ambiguous commands.',
    ],
    features: [
      'Head-gesture control (MediaPipe FaceMesh)',
      'Offline voice commands (Vosk)',
      'Confidence-based decision fusion (Random Forest)',
      'Automatic safety stop for ambiguous commands',
    ],
    metrics: [
      { value: '2', label: 'input modes fused' },
      { value: 'Offline', label: 'voice recognition' },
      { value: 'Auto', label: 'safety stop' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'appointment-agent',
    title: 'AI Appointment Booking Agent',
    year: 'Automation',
    genre: 'AI Agent • Automation • Voice',
    logline: 'An automated agent that calls customers and reminds them about upcoming appointments.',
    stack: ['Python', 'n8n', 'Twilio', 'REST APIs'],
    build: [
      'Developed an automated appointment booking agent that calls customers and reminds them about upcoming appointments.',
      'Integrated Twilio with n8n workflows to automate appointment confirmations, reminders and rescheduling.',
    ],
    features: [
      'Automated customer calls & reminders',
      'Appointment confirmations',
      'Rescheduling workflows',
      'Twilio + n8n integration',
    ],
    metrics: [
      { value: '3', label: 'automated flows: confirm · remind · reschedule' },
      { value: 'Twilio', label: 'voice integration' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'mern-hackathon',
    title: 'Second Prize',
    org: 'Full Stack MERN Hackathon · LBRCE',
    detail: 'Developed an online food booking application using React, Node.js and MongoDB.',
    laurel: 'Second Prize',
  },
  {
    id: 'pvpsit-expo',
    title: 'Third Prize',
    org: 'Project Expo · PVP Siddhartha Institute of Technology',
    detail: 'Presented the Smart Driver Safety and Accident Prevention System.',
    laurel: 'Third Prize',
  },
  {
    id: 'engineers-day',
    title: 'Project Expo',
    org: "Engineers' Day · LBRCE",
    detail: 'Presented the Multimodal Robotic Vehicle Using Decision Fusion during 3rd year.',
    laurel: 'Presenter',
  },
  {
    id: 'lakshya',
    title: 'Event Coordinator',
    org: 'KGF Event · Lakshya 2K25 · LBRCE',
    detail: 'Coordinated the KGF event at the college fest Lakshya 2K25.',
    laurel: 'Leadership',
  },
  {
    id: 'nss',
    title: 'NSS Coordinator',
    org: 'AP Legislative Assembly Elections 2024',
    detail: 'Contributed to election awareness and volunteer coordination.',
    laurel: 'Community Service',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Cloud Practitioner (2025)', link: '' },
  { issuer: 'Salesforce', name: 'Salesforce Certified Agentforce Specialist (2025)', link: '' },
  { issuer: 'NPTEL', name: 'The Joy of Computing Using Python — Elite (2024)', link: '' },
  { issuer: 'NPTEL', name: 'Introduction to Internet of Things — Elite (2024)', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C • Java • Python',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core CS',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL & NoSQL',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'Oracle', mono: 'Or' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    subtitle: 'Frontend to backend',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Java Servlets', mono: 'Sv' },
      { name: 'JSP', mono: 'Jp' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'iot',
    title: 'IoT / Embedded',
    subtitle: 'Hardware meets software',
    skills: [
      { name: 'ESP32', mono: 'Es' },
      { name: 'Raspberry Pi', mono: 'Rp' },
      { name: 'Sensors', mono: 'Se' },
      { name: 'IoT Systems', mono: 'Io' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Shipping & workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Eclipse', mono: 'Ec' },
      { name: 'Apache Tomcat', mono: 'Tc' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'AI / ML', mono: 'Ml' },
      { name: 'Emerging Tech', mono: 'Et' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Java Full Stack Developer Intern', 'Servlets & JSP'],
  Python: ['OptiCrop (AI/ML Intern)', 'NOC Fault Diagnosis', 'Robotic Vehicle', 'NPTEL Joy of Computing (Elite)'],
  JavaScript: ['MERN Hackathon (2nd Prize)'],
  'REST APIs': ['Full Stack Developer Intern', 'Appointment Booking Agent'],
  MongoDB: ['MERN Hackathon (2nd Prize)'],
  ESP32: ['Multimodal Robotic Vehicle'],
  'IoT Systems': ['NPTEL Introduction to IoT (Elite)'],
  'Agentic AI': ['NOC Fault Diagnosis (LangGraph)', 'Salesforce Agentforce Specialist'],
  'AI / ML': ['OptiCrop', 'Random Forest decision fusion'],
  Git: ['Tools'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff5d73' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021',
    synopsis: 'Secondary school at Rushi Vidyalayam — the foundation of the story.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Topper',
        description: 'Secondary School Certificate (SSC) at Rushi Vidyalayam — finishing with 99.67%.',
        tags: ['SSC', '99.67%'],
        runtime: '2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Foundation',
    period: '2021 – 2023',
    synopsis: 'Intermediate (MPC) at Sri Chaitanya Junior College.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scholar',
        description: 'Intermediate (MPC) at Sri Chaitanya Junior College — 96.9%.',
        tags: ['MPC', '96.9%'],
        runtime: '2021 – 2023',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter: Computer Science',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science and Engineering at Lakireddy Bali Reddy College of Engineering.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering — CGPA 8.77 / 10.',
        tags: ['B.Tech', 'CSE', 'CGPA 8.77'],
        runtime: '2023 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Prize Winner',
        description: 'Second Prize at the Full Stack MERN Hackathon and Third Prize at the PVPSIT Project Expo.',
        tags: ['MERN', 'Hackathon', 'Project Expo'],
        runtime: 'LBRCE · PVPSIT',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'The Organizer',
        description: 'Event Coordinator for the KGF Event at Lakshya 2K25, and NSS Coordinator for election awareness in 2024.',
        tags: ['Lakshya 2K25', 'NSS'],
        runtime: '2024 – 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Learning to Build',
    period: 'Internships',
    synopsis: 'Two internships with SmartBridge under the APSCHE Virtual Internship Program.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The ML Intern',
        description: 'AI & ML Intern (120 hours) — built OptiCrop, a crop recommendation system with Python, NumPy, Pandas, Scikit-learn and Flask.',
        tags: ['Python', 'Scikit-learn', 'Flask'],
        runtime: '2 Months · 120 Hrs',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The Full Stack Intern',
        description: 'Developed full-stack modules, integrated REST APIs and database services, and tested and debugged for reliability.',
        tags: ['Full Stack', 'REST APIs', 'Databases'],
        runtime: '2 Months',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'Building Originals',
    period: 'Now streaming',
    synopsis: 'Agentic AI, IoT and automation projects — plus cloud and Agentforce certifications.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Agent Builder',
        description: 'Developing an Agentic AI NOC fault diagnosis system with LangGraph, FastAPI, PostgreSQL and OpenRouter.',
        tags: ['LangGraph', 'FastAPI', 'Agentic AI'],
        runtime: 'In progress',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Maker',
        description: 'Multimodal Robotic Vehicle with head-gesture and offline voice control, fused by a Random Forest.',
        tags: ['ESP32', 'MediaPipe', 'Vosk'],
        runtime: '3rd Year',
        palette: amber,
      },
      {
        code: 'S05 E03',
        title: 'The Certified',
        description: 'AWS Certified Cloud Practitioner and Salesforce Certified Agentforce Specialist (both 2025).',
        tags: ['AWS', 'Salesforce'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Java Full Stack Developer', palette: amber },
  { label: 'The AI Original', title: 'NOC Fault Diagnosis', detail: 'LangGraph • FastAPI • OpenRouter', palette: crimson },
  { label: 'Cloud credential', title: 'AWS Cloud Practitioner', detail: 'AWS Certified • 2025', palette: ocean },
  { label: 'Agentic credential', title: 'Agentforce Specialist', detail: 'Salesforce Certified • 2025', palette: violet },
  { label: 'Hackathon', title: 'MERN Hackathon', detail: 'Second Prize • LBRCE', palette: jade },
  { label: 'Project Expo', title: 'PVPSIT Expo', detail: 'Third Prize • Driver Safety System', palette: amber },
  { label: 'Hardware Original', title: 'Robotic Vehicle', detail: 'Gestures + offline voice • ESP32', palette: crimson },
  { label: 'ML Internship', title: 'OptiCrop', detail: 'SmartBridge • 120 hours', palette: ocean },
  { label: 'Academic high', title: 'SSC 99.67%', detail: 'Rushi Vidyalayam', palette: jade },
  { label: 'Current focus', title: 'Agentic AI', detail: 'Multi-agent systems & emerging tech', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Lakireddy Bali Reddy College of Engineering', '2023 – Present'],
    chips: ['CGPA 8.77'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C · HTML, CSS, JavaScript, Servlets, JSP', 'MySQL, Oracle, MongoDB · ESP32, Raspberry Pi'],
    chips: ['Java', 'Python', 'C', 'REST APIs', 'MongoDB', 'ESP32'],
  },
  {
    kicker: 'Internships',
    title: 'Two Internships',
    lines: ['AI & ML Intern — OptiCrop (120 hours)', 'Full Stack Developer Intern', 'SmartBridge × APSCHE'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Agentic AI NOC Fault Diagnosis — LangGraph', 'Multimodal Robotic Vehicle — gestures + voice', 'AI Appointment Booking Agent — Twilio + n8n'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Second Prize — Full Stack MERN Hackathon', 'Third Prize — PVPSIT Project Expo', "Project Expo — Engineers' Day"],
  },
  {
    kicker: 'Certified',
    title: '4 Certifications',
    lines: ['AWS Cloud Practitioner · Salesforce Agentforce Specialist', 'NPTEL Python (Elite) · NPTEL IoT (Elite)'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Agentic AI · Artificial Intelligence · Emerging Technologies'],
  },
];

export type ProfileId = 'aqball' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aqball',
    name: 'Aqball',
    blurb: 'The full series, in order',
    color: '#2f8cff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internships', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
