export const profile = {
  name: 'Pragati Singh',
  roles: ['Software Engineer', 'Full Stack Developer', 'Problem Solver'],
  tagline: 'Final-Year B.Tech CSE Student | Full Stack Developer | Problem Solver',
  location: 'Delhi, India',
  about:
    'Final-year B.Tech CSE student seeking software engineering opportunities to build real-world products and solve meaningful problems. Passionate about full stack web development, algorithmic problem solving, and building scalable software solutions.',
  email: 'singhpragati@gmail.com',
  links: {
    github: 'https://github.com/singh7pragati',
    linkedin: 'https://www.linkedin.com/in/pragati-singh-80a201293/',
    leetcode: 'https://leetcode.com/u/singh_pragati/',
  },
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
]

export const projects = [
  {
    name: 'JobQuest',
    description:
      'An intelligent resume analyzer that compares resumes with job descriptions using keyword and skill matching to identify skill gaps, calculate a match score, and provide personalized recommendations.',
    features: [
      'Resume Analysis',
      'Skill Extraction',
      'Keyword Matching',
      'Skill Gap Detection',
      'Match Score',
      'Personalized Recommendations',
    ],
    tech: ['Python', 'FastAPI', 'Flask', 'React', 'spaCy', 'RapidFuzz'],
    github: 'https://github.com/singh7pragati/jobQuest',
    demo: 'https://job-quest-chi.vercel.app/',
  },
  {
    name: 'CareerTrack',
    description:
      'A full-stack job and internship tracking platform that helps users organize applications, track recruitment progress, manage goals, and monitor their career journey through a centralized dashboard.',
    features: [
      'Application Tracking',
      'Recruitment Pipeline',
      'Dashboard Analytics',
      'Goal Management',
      'Status Tracking',
      'CRUD Operations',
      'Responsive UI',
      'User Authentication',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    github: 'https://github.com/singh7pragati/careerTrack',
    demo: 'https://career-track-one.vercel.app',
  },
]

export const stats = [
  { value: 450, suffix: '+', label: 'DSA Problems Solved on LeetCode' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '', label: 'Featured Projects' },
  { value: 3, suffix: '', label: 'Certifications' },
]

export const education = [
  {
    period: '2023 — 2027',
    school: 'IMS Engineering College',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    detail: 'CGPA: 8.7',
    courseworkLabel: 'Relevant Coursework',
    coursework: [
      'Data Structures & Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
    ],
  },
  {
    period: '2022 — 2023',
    school: 'Kendriya Vidyalaya Kanpur',
    degree: 'Senior Secondary Education (Class XII)',
    detail: 'Percentage: 91.8%',
    courseworkLabel: '',
    coursework: [],
  },
  {
    period: '2020 — 2021',
    school: 'Kendriya Vidyalaya Kanpur',
    degree: 'Secondary Education (Class X)',
    detail: 'Percentage: 97.2%',
    courseworkLabel: '',
    coursework: [],
  },
]

export const certifications = [
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
  },
  {
    title: 'Software Product Developer Virtual Internship',
    issuer: 'Skill India Digital Hub',
  },
]

export const achievements = [
  '450+ DSA problems solved on LeetCode',
  'Strong foundation in problem solving, algorithms, and core CS fundamentals',
  'Passionate about software engineering and building impactful products',
]
