export const profile = {
  name: 'Pragati Singh',
  roles: ['Full Stack Developer', 'Problem Solver', 'CS Engineering Student'],
  tagline: 'Computer Science Engineering Student | Full Stack Developer | Problem Solver',
  location: 'Delhi, India',
  available: true,
  about:
    'I am a Computer Science Engineering student passionate about Full Stack Development and Problem Solving. I enjoy building scalable web applications, solving DSA challenges, and continuously learning modern technologies. My goal is to create impactful software products while strengthening my engineering skills.',
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
    items: ['REST APIs', 'FastAPI', 'Flask'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Figma', 'Wireshark'],
  },
  {
    title: 'Core CS',
    items: [
      'Data Structures & Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOPs',
    ],
  },
]

export const projects = [
  {
    name: 'Resume Analyzer',
    description:
      'An ATS-friendly resume analyzer that compares resumes with job descriptions using skill matching and keyword extraction.',
    features: [
      'Skill extraction',
      'Keyword matching',
      'Missing skill detection',
      'Match percentage calculation',
      'Personalized recommendations',
    ],
    tech: ['React', 'FastAPI', 'Flask', 'spaCy', 'RapidFuzz'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'TaskFlow',
    description:
      'A modern full-stack task management platform with authentication and dynamic CRUD operations.',
    features: [
      'User authentication',
      'Task tracking dashboard',
      'Task categorization',
      'Responsive UI',
      'Workflow management',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NextAuth.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export const stats = [
  { value: 300, suffix: '+', label: 'DSA Problems Solved' },
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
    courseworkLabel: 'Subjects',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
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
  'Solved 300+ DSA problems across LeetCode and GeeksforGeeks',
  'Strong foundation in problem solving and algorithms',
  'Passionate about software engineering and continuous learning',
]
