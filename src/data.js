export const profile = {
  name: 'Kishan Ravikumar',
  role: 'Computer Science Graduate',
  tagline:
    'BSc Computer Science graduate from the University of Essex (2:1), with a broad technical foundation built through academic and professional experience and projects. Seeking a full-time graduate or entry-level role where I can apply my skills, gain industry experience, and continue developing within the wider technology sector.',
  email: 'kishan.ravi196@gmail.com',
  phone: '+44 7490 182595',
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
      'Managed CRM data for 500+ applicants, tracking recruitment pipeline and ensuring enrolment accuracy',
      'Coordinated a 300+ attendee STEM event, leading cross-functional teams and managing event logistics, project timelines, and resource allocation',
      'Identified and resolved data anomalies and schema inconsistencies proactively, applying a methodical approach to catching issues before they compounded downstream',
    ],
  },
  {
    title: 'STEM Peer Mentor',
    company: 'University of Essex',
    dates: 'Feb 2025 – Jul 2025',
    points: [
      'Delivered structured one-to-one mentoring for 15+ students, adapting technical guidance to individual needs while managing sessions alongside academic deadlines',
      'Created learning strategies for diverse technical skill levels, increasing concept comprehension and logical reasoning assessment scores by 30% over four months for 15+ students',
      "Streamlined complex technical principles to improve students' logical reasoning and problem-solving abilities",
    ],
  },
  {
    title: 'Frontrunner Software Engineering Internship',
    company: 'University of Essex',
    dates: 'Jan 2024 – Mar 2024',
    points: [
      'Designed and implemented an e-commerce and booking application using Python and SQL, translating business requirements into functional, process-driven application workflows',
      'Built and iterated functional prototypes against defined requirements, refining workflow logic and application features before implementing the final solution',
      'Integrated REST APIs and used regression testing to validate functionality, applying AI tools such as Google Gemini to explore implementation approaches and troubleshoot issues before deployment',
      'Led Agile project delivery as Scrum Master for a 6-person team, using Jira to prioritise development work, coordinate implementation and drive resolution of project blockers',
    ],
  },
  {
    title: 'Data Analytics Practicum',
    company: 'University of Essex',
    dates: 'Jan 2024 – Mar 2024',
    points: [
      'Cleaned and validated 1,500+ record datasets while creating technical data documentation to establish consistent data definitions and improve data accuracy by 20%',
      'Executed Kibana log searches and query filtering to analyse system data, building 2 executive dashboards that cut reporting turnaround time from 5 days to 1 day',
      'Led daily stand-ups across 4 two-week sprints as Scrum Master for a 6-person team, documenting sprint retrospectives and achieving a 100% sprint completion rate in Jira',
      'Tracked and prioritised 25+ Jira user stories, maintaining clear project documentation and resolving 8 critical blockers to deliver all practicum milestones on schedule',
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
    description:
      'A multi-tool analytics portfolio spanning database design, Python data science, and Tableau/Excel dashboarding, built to demonstrate a full analytical workflow from raw data to decision-ready insight rather than a single isolated technique. Covers a relational retail database, a live-API Python pipeline, a machine learning model, and multiple Excel/Tableau dashboards across real-world datasets including retail sales, employee attrition, and property sales.',
    features: [
      'Designed a relational PostgreSQL schema (BicyclesDB) for a bike retailer\'s sales and inventory system, then wrote 20+ SQL queries using multi-table joins, subqueries, aggregation, and grouping to analyse revenue, customer behaviour, inventory, and staff performance',
      'Built a Python ETL pipeline that retrieves live S&P 500 options data via the Tradier API, processes and calculates trading ranges with pandas, and loads results into PostgreSQL through a SQLAlchemy ORM layer',
      'Developed a logistic regression model in Jupyter to predict employee churn, including full exploratory data analysis with Matplotlib/Seaborn and model evaluation via scikit-learn cross-validation',
      'Built interactive Tableau dashboards analysing a bank marketing campaign (customer segmentation and conversion) and Adidas retail performance (operating margin by year, location, and product category)',
      'Produced Excel-based analysis of Adidas US sales and Milwaukee property sales using pivot tables, XLOOKUP, statistical hypothesis testing, and interactive slicers for drill-down exploration',
    ],
    outcome:
      'Delivered four end-to-end analytical workflows - a relational database with 20+ validated queries, a live-API ETL pipeline, a predictive ML model, and multiple published Tableau/Excel dashboards - turning disconnected raw datasets into structured, query-ready, decision-ready outputs.',
    tech: ['Python', 'PostgreSQL', 'SQLAlchemy', 'REST API', 'Tableau', 'Pandas', 'scikit-learn', 'Excel'],
    github: 'https://github.com/Kishanr19/Commercial-Customer-Intelligence-Analytics-Platform-',
    demo: null,
  },
  {
    name: 'Automated Grade Calculation & Validation System',
    description:
      'Manual peer-assessment grading is slow, inconsistent, and error-prone across large student teams, since adjusting individual grades by hand from peer evaluation scores doesn\'t scale and is easy to get wrong. Built a Java application in a 5-person hackathon team that replaces this manual process with a validated, deterministic pipeline: structured peer-assessment data is checked for invalid or unexpected values before it ever reaches the calculation logic, so grade outputs stay consistent and defensible.',
    features: [
      'Designed a modular pipeline with distinct input validation, processing, and calculation stages, so each part of the system could be developed, tested, and debugged independently rather than as one tangled process',
      'Built defensive input validation that catches invalid or unexpected peer-assessment data before it reaches the grade calculation logic, isolating validation failures from calculation defects and making troubleshooting systematic',
      'Implemented deterministic calculation rules that translate assessment requirements into explicit logic producing consistent, repeatable grade outcomes for identical inputs',
      'Wrote 10+ unit tests covering expected inputs, boundary conditions, edge cases, and invalid data, following an implement → test → debug → fix → retest → integrate cycle to catch regressions before merging',
      'Used Git and GitHub with CI/CD to validate every change before integration, coordinating delivery across a 5-person team under hackathon time constraints',
    ],
    outcome:
      'Delivered a fully functional, end-to-end application that automated a previously manual, error-prone grading process, with robust input validation and test coverage on every pipeline stage - completed and shipped within the hackathon deadline.',
    tech: ['Java', 'JUnit', 'Git', 'CI/CD', 'Agile'],
    github: 'https://github.com/Kishanr19/Automated-Grade-Calculation-Validation-System',
    demo: null,
  },
  {
    name: 'PacRun: A Java-Based Exploration of Object-Oriented Game Architecture with Advanced State Management (Dissertation)',
    description:
      'Demonstrating advanced object-oriented design and real-time state management needed a project with genuine architectural complexity, not just a tutorial clone. A Java reimagining of Pac-Man built around a unified entity model, personality-driven ghost AI, and optimised real-time collision detection.',
    features: [
      'Designed a modular, MVC-inspired architecture built around a unified Block class, encapsulating position, state, and behaviour across every entity to demonstrate OOP principles including encapsulation, inheritance, and polymorphism',
      'Built AI for four ghosts with distinct targeting strategies (direct pursuit, ambush, alternating pursuit/wander, proximity-based retreat), including anti-oscillation logic and controlled randomness to avoid predictable pathing',
      'Implemented state-driven power-up mechanics (speed boosts, control reversal, ghost-hunting) and a competitive two-player "Pellet Race" mode with position-swapping to keep play fair',
      'Optimised real-time collision detection using an AABB approach with selective testing, HashSet-backed entity storage, and conditional logic gating to maintain stable performance under Java Swing\'s event-driven model',
      'Engineered a custom real-time rendering and game-loop pipeline directly on Java Swing with no external game engine, handling timed updates, input, and rendering within a single event-driven cycle',
      'Implemented defensive resource loading for the audio system, with error handling and fallback behaviour to prevent crashes from missing or corrupt asset files',
      'Wrote 37 JUnit tests across 4 test classes to validate core game logic, covering a ~2,900-line core game engine and ~1,800-line UI and menu system',
      'Validated gameplay and usability through structured playtesting with 8+ participants, iterating on difficulty progression and engagement based on feedback',
    ],
    outcome:
      'Delivered a fully playable, architecturally complex game with four distinct AI-driven ghost behaviours, layered power-up mechanics, and a competitive two-player mode, validated for usability and difficulty balance through structured playtesting with 8+ participants.',
    tech: ['Java', 'Swing', 'OOP & MVC', 'AI Pathfinding', 'Performance Optimisation'],
    github: 'https://github.com/Kishanr19/PacRun-A-Java-Based-Exploration-of-Object-Oriented-Game-Architecture-with-Advanced-State-Management',
    demo: null,
    report:
      'https://github.com/Kishanr19/PacRun-A-Java-Based-Exploration-of-Object-Oriented-Game-Architecture-with-Advanced-State-Management/blob/main/CE301%20Final%20Report.pdf',
  },
  {
    name: 'Virtual Café - Concurrent Client-Server System',
    description:
      'Modelling real-world resource contention needed a system where multiple clients compete for shared resources at once, not a simplified single-user demo. A multi-threaded Java client-server application simulating a real-time café where multiple customers order concurrently and a central server processes each request through a synchronized workflow.',
    features: [
      'Concurrent processing of multiple simultaneous customer connections, each handled by its own dedicated request thread',
      'Order state management tracking each beverage through waiting, brewing (30s tea / 45s coffee), and completion stages',
      'Thread-safe design using synchronized collections to prevent race conditions under concurrent load',
      'Dual logging system recording events as both timestamped text logs and structured JSON via GSON',
      'Graceful shutdown handling for Ctrl-C interruption and client reconnection scenarios',
    ],
    outcome:
      'Delivered a fully working concurrent client-server system that handles multiple simultaneous customer connections without data corruption or race conditions, with dual-format event logging and graceful recovery from client disconnects.',
    tech: ['Java', 'Socket Programming', 'Multi-threading', 'GSON', 'Collections Framework'],
    github: 'https://github.com/Kishanr19/-Virtual-Caf-Concurrent-Client-Server-System',
    demo: null,
  },
]

export const skills = [
  {
    category: 'Programming and Data',
    items: ['Python', 'Java', 'SQL', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Pandas', 'NumPy'],
  },
  {
    category: 'Analytics and Reporting',
    items: ['Microsoft Excel', 'PowerPoint', 'Word', 'Tableau', 'Power BI', 'Google Workspace'],
  },
  {
    category: 'Software Engineering',
    items: ['OOP', 'MVC', 'TDD', 'Regression Testing', 'REST APIs', 'Extreme Programming'],
  },
  {
    category: 'Core Systems and Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'IntelliJ IDEA', 'Dynamics 365 CRM'],
  },
  {
    category: 'Project and Delivery',
    items: ['Agile', 'Scrum', 'Workflow Mapping'],
  },
  {
    category: 'Infrastructure and Networking',
    items: ['Cisco CCNA', 'Routing & Switching', 'Linux'],
  },
  {
    category: 'Automation and AI',
    items: ['Microsoft Copilot', 'Python Automation'],
  },
]

export const education = {
  degree: 'BSc (Hons) Computer Science',
  institution: 'University of Essex',
  grade: 'Upper Second Class Honours (2:1)',
  honorsDescription:
    'An academic honour recognising exceptional academic excellence among the highest-performing students.',
  dates: 'Oct 2022 – Jul 2025',
  honors: "Dean's List Award",
  dissertation: {
    title: 'PacRun: A Java-Based Exploration of Object-Oriented Game Architecture with Advanced State Management',
    grade: 'First Class',
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
  {
    name: 'Cisco Certified Network Associate (CCNA) - Introduction to Networks',
    issuer: 'Cisco',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA) - Routing and Switching',
    issuer: 'Cisco',
  },
]
