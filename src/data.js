export const profile = {
  name: 'Kishan Ravikumar',
  role: 'Computer Science Graduate',
  tagline:
    'BSc Computer Science graduate from the University of Essex (2:1), with a broad technical foundation built through academic and professional experience and projects. Looking for a full-time, entry-level graduate role to start my career.',
  email: 'kishan.ravi196@gmail.com',
  phone: '07490 182595',
  github: 'https://github.com/Kishanr19',
  linkedin: 'https://www.linkedin.com/in/kishan-ravikumar-ba8476214/',
  cvFile: 'Kishan-Ravikumar-CV.pdf',
}

export const experience = [
  {
    title: 'Data and Operations Assistant',
    company: 'University of Essex',
    dates: 'Jan 2023 – Jul 2025',
    points: [
      'Audited and consolidated a 1,000+ student dataset in Excel using VLOOKUPs and PivotTables, resolving duplicate records and producing weekly management dashboards',
      'Tested functionality for an AI-driven student support chatbot, presenting performance updates to steering committees',
      'Maintained implementation timelines and milestone trackers for an automated room-booking rollout',
      'Mapped enrolment workflows to support the transition from paper forms to a digital portal',
    ],
  },
  {
    title: 'CSEE Software Engineering Intern',
    company: 'University of Essex',
    dates: 'Jan 2024 – Mar 2024',
    points: [
      'Developed Python and SQL backend components within a six-person Agile team, delivering iteratively against sprint objectives',
      'Acted as Scrum Master, coordinating stand-ups and tracking tasks in Jira',
      'Used SQL to compare records across databases and isolate anomalies',
      'Created and executed 15+ regression test suites to support reliable releases',
    ],
  },
  {
    title: 'Data Analytics Practicum',
    company: 'University of Essex',
    dates: 'Jan 2024 – Mar 2024',
    points: [
      'Analysed structured datasets to identify trends and inconsistencies, translating results into clear reporting outputs against defined requirements',
      'Served as Scrum Master for a 6-person team, using Jira to organise priorities and communicate progress',
    ],
  },
  {
    title: 'STEM Peer Mentor',
    company: 'University of Essex',
    dates: 'Feb 2025 – Jul 2025',
    points: [
      'Delivered structured one-to-one mentoring for 15+ students, adapting technical guidance to individual needs while managing sessions alongside academic deadlines',
    ],
  },
  {
    title: 'Data and Technology Insight Programme',
    company: 'PwC',
    dates: 'Aug 2021 – Sep 2021',
    points: [
      'Supported structured data validation, reconciliation, and quality testing across 5+ concurrent project tracks',
      'Drafted technical documentation of testing results and presented findings to non-technical stakeholders',
    ],
  },
]

export const projects = [
  {
    name: 'Commercial & Customer Intelligence Analytics Platform',
    problem:
      'Retail and property datasets sat in disconnected sources, making margin and sales trends slow to surface.',
    solution:
      'Built an automated ETL pipeline and relational schema to centralise the data, then layered dashboards on top for fast, repeatable analysis.',
    features: [
      'Python ETL pipeline extracting from a REST API, transforming, and loading into PostgreSQL via SQLAlchemy',
      'Relational schema with 20+ SQL queries validating retail sales and inventory data across related tables',
      'Excel/Tableau dashboards covering retail margins and property sales',
    ],
    outcome: 'Turned raw multi-source data into a structured, query-ready dataset with repeatable reporting.',
    tech: ['Python', 'PostgreSQL', 'SQLAlchemy', 'REST API', 'Tableau'],
    github: 'https://github.com/Kishanr19/Commercial-Customer-Intelligence-Analytics-Platform-',
    demo: null,
  },
  {
    name: 'Automated Grade Calculation & Validation System',
    problem:
      'Manual peer-assessment grading is slow and error-prone across large student teams.',
    solution:
      'Built a Java application in a 5-person hackathon team that automates validation and grade calculation with a testable, modular pipeline.',
    features: [
      'Separated input validation, processing, and calculation into distinct, testable stages',
      '10+ unit tests covering edge-case scenarios',
      'Git-based version control with CI/CD for reliable delivery',
    ],
    outcome: 'Automated a process that was previously manual and error-prone, with test coverage on every stage.',
    tech: ['Java', 'JUnit', 'Git', 'CI/CD'],
    github: 'https://github.com/Kishanr19/Automated-Grade-Calculation-Validation-System',
    demo: null,
  },
  {
    name: 'PacRun — Dissertation',
    problem:
      'Demonstrating advanced object-oriented design and real-time state management needed a project with genuine architectural complexity, not just a tutorial clone.',
    solution:
      'A Java reimagining of Pac-Man built around a unified entity model, personality-driven ghost AI, and optimised real-time collision detection — graded 78% (First).',
    features: [
      'Modular, MVC-inspired architecture built around a unified Block class demonstrating encapsulation, inheritance, and polymorphism',
      'AI for four ghosts with distinct targeting strategies, anti-oscillation logic, and controlled randomness to avoid predictable pathing',
      'State-driven power-up mechanics and a competitive two-player "Pellet Race" mode with position-swapping',
      'Real-time collision detection optimised with AABB selective testing and HashSet-backed entity storage',
    ],
    outcome: 'Graded 78% (First Class), validated through structured playtesting with 8+ participants.',
    tech: ['Java', 'Swing', 'OOP & MVC', 'AI Pathfinding', 'Performance Optimisation'],
    github: 'https://github.com/Kishanr19/PacRun-A-Java-Based-Exploration-of-Object-Oriented-Game-Architecture-with-Advanced-State-Management',
    demo: null,
    wide: true,
    report:
      'https://github.com/Kishanr19/PacRun-A-Java-Based-Exploration-of-Object-Oriented-Game-Architecture-with-Advanced-State-Management/blob/main/CE301%20Final%20Report.pdf',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'SQL'],
  },
  {
    category: 'Data',
    items: ['Pandas', 'NumPy', 'PostgreSQL', 'MySQL', 'Excel', 'SQLAlchemy', 'Tableau', 'Power BI'],
  },
  {
    category: 'Software Engineering',
    items: ['OOP', 'MVC', 'TDD', 'Regression Testing', 'REST APIs', 'Extreme Programming'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'IntelliJ IDEA', 'Agile', 'Scrum'],
  },
  {
    category: 'Infrastructure & Networking',
    items: ['Cisco CCNA', 'Routing & Switching', 'Linux'],
  },
]

export const education = {
  degree: 'BSc (Hons) Computer Science',
  institution: 'University of Essex',
  grade: 'Upper Second Class Honours (2:1) — 67%',
  dates: 'Oct 2021 – Jul 2025',
  honors: "Dean's List Award",
  dissertation: {
    title: 'PacRun: A Java-Based Exploration of Object-Oriented Game Architecture with Advanced State Management',
    grade: '78% (First Class)',
    supervisor: 'Dr Renato Amorim',
  },
  modules: [
    {
      year: 'Year 1',
      items: [
        'CE101 Team Project Challenge',
        'CE141 Mathematics for Computing',
        'CE151 Introduction to Programming',
        'CE152 Object-Oriented Programming',
        'CE153 Introduction to Databases',
        'CE154 Web Development',
        'CE155 Network Fundamentals',
        'CE161 Fundamentals of Digital Systems',
      ],
    },
    {
      year: 'Year 2',
      items: [
        'CE201 Team Project Challenge',
        'CE202 Software Engineering',
        'CE203 Application Programming',
        'CE204 Data Structures and Algorithms',
        'CE217 Computer Game Design',
        'CE222 Operating Systems',
        'CE231 Computer and Data Networks',
        'CE235 Computer Security',
      ],
    },
    {
      year: 'Year 3',
      items: [
        'CE301 Individual Capstone Project Challenge',
        'CE303 Advanced Programming',
        'CE306 Information Retrieval',
        'CE317 Virtual Worlds',
        'CE318 High-Level Games Development',
        'CE320 Large Scale Software Systems and Extreme Programming',
      ],
    },
  ],
}

export const certifications = [
  { name: "Dean's List Award", issuer: 'University of Essex', dates: 'Oct 2024 – Jul 2025' },
  { name: 'CCNA: Routing and Switching', issuer: 'Cisco', dates: 'Oct 2023 – May 2024' },
  { name: 'CCNA: Network Fundamentals', issuer: 'Cisco', dates: 'Oct 2022 – May 2023' },
]
