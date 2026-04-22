export const projectCategories = [
  {
    id: 'data-products',
    label: 'Data Products',
    subtitle:
      'Interactive dashboards and analytical tools built around real-world datasets and decisions.',
  },
  {
    id: 'research-simulation',
    label: 'Research / Simulation',
    subtitle:
      'Modeling-focused work that translates scientific questions into computational experiments.',
  },
  {
    id: 'algorithmic-systems',
    label: 'Algorithmic Systems / Solvers',
    subtitle:
      'Search, optimization, and logic systems built to reason through structured problems.',
  },
]

export const projects = [
  {
    title: 'Hospital Price CareFinder',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: true,
    description:
      'Interactive healthcare pricing platform exploring hospital price variation, regional differences, and transparency across U.S. providers.',
    highlights: [
      'Compares provider pricing patterns across procedures and regions.',
      'Transforms dense transparency datasets into recruiter-friendly, explorable views.',
      'Balances public-facing design with analytical depth for practical decision-making.',
    ],
    image: '/projects/hospital-carefinder.svg',
    liveUrl: 'https://example.com/hospital-carefinder',
    githubUrl: 'https://github.com/yourusername/hospital-carefinder',
    tags: ['React', 'Healthcare', 'Interactive'],
  },
  {
    title: 'Business Retail Analysis',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'A retail analytics dashboard focused on sales behavior, customer segments, and operational trends across business units.',
    highlights: [
      'Surfaces margin, basket, and seasonal performance patterns.',
      'Designed for fast executive scanning and deeper follow-up analysis.',
      'Pairs clean visual storytelling with actionable KPI framing.',
    ],
    image: '/projects/business-retail-analysis.svg',
    liveUrl: 'https://example.com/business-retail-analysis',
    githubUrl: 'https://github.com/yourusername/business-retail-analysis',
    tags: ['Dashboard', 'Retail', 'BI'],
  },
  {
    title: 'Microplastics',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Data exploration project examining microplastic distribution patterns, measurement uncertainty, and environmental context.',
    highlights: [
      'Combines spatial and comparative views for clearer environmental interpretation.',
      'Emphasizes uncertainty-aware storytelling rather than raw chart density.',
      'Structured to support both research communication and public understanding.',
    ],
    image: '/projects/microplastics.svg',
    liveUrl: 'https://example.com/microplastics',
    githubUrl: 'https://github.com/yourusername/microplastics',
    tags: ['Environment', 'Research Data'],
  },
  {
    title: 'Environmental Analysis',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'An environmental analysis interface bringing together trend monitoring, geographic context, and interpretable reporting.',
    highlights: [
      'Frames multi-factor environmental data in a decision-oriented format.',
      'Built to stay readable across both dense and sparse regional datasets.',
      'Uses strong visual hierarchy to reduce time-to-insight.',
    ],
    image: '/projects/environmental-analysis.svg',
    liveUrl: 'https://example.com/environmental-analysis',
    githubUrl: 'https://github.com/yourusername/environmental-analysis',
    tags: ['Analytics', 'Geospatial'],
  },
  {
    title: 'Hospital Insurance Dashboard',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Healthcare dashboard analyzing insurer-hospital relationships, negotiated rates, and payer-specific pricing behavior.',
    highlights: [
      'Highlights variation between insurers, procedures, and local markets.',
      'Built around comparative analysis rather than static reporting.',
      'Turns complex pricing structures into concise visual narratives.',
    ],
    image: '/projects/hospital-insurance-dashboard.svg',
    liveUrl: 'https://example.com/hospital-insurance-dashboard',
    githubUrl: 'https://github.com/yourusername/hospital-insurance-dashboard',
    tags: ['Healthcare', 'Dashboard'],
  },
  {
    title: 'Rainbow Simulation',
    category: 'Research / Simulation',
    categoryId: 'research-simulation',
    featured: false,
    description:
      'A scientific simulation exploring light behavior and atmospheric conditions to model rainbow formation and variation.',
    highlights: [
      'Translates physical assumptions into an interpretable computational model.',
      'Designed to communicate both simulation output and parameter sensitivity.',
      'Blends scientific curiosity with a presentation-ready research interface.',
    ],
    image: '/projects/rainbow-simulation.svg',
    liveUrl: 'https://example.com/rainbow-simulation',
    githubUrl: 'https://github.com/yourusername/rainbow-simulation',
    tags: ['Simulation', 'Scientific Computing'],
  },
  {
    title: 'Solitaire Solver',
    category: 'Algorithmic Systems / Solvers',
    categoryId: 'algorithmic-systems',
    featured: false,
    description:
      'A search-based solver that models game states, evaluates move sequences, and explores efficient strategies for solvable solitaire boards.',
    highlights: [
      'Focuses on state representation, pruning, and computational efficiency.',
      'Makes algorithm behavior understandable through structured outputs.',
      'A strong example of turning abstract logic into a usable system.',
    ],
    image: '/projects/solitaire-solver.svg',
    liveUrl: 'https://example.com/solitaire-solver',
    githubUrl: 'https://github.com/yourusername/solitaire-solver',
    tags: ['Algorithms', 'Search'],
  },
  {
    title: 'Crossword Solver',
    category: 'Algorithmic Systems / Solvers',
    categoryId: 'algorithmic-systems',
    featured: false,
    description:
      'Constraint-driven crossword solving system built around pattern matching, search heuristics, and efficient candidate generation.',
    highlights: [
      'Uses structured constraints to reduce large search spaces quickly.',
      'Shows how algorithmic reasoning can power an elegant end-user workflow.',
      'Built as a compact but rigorous systems project.',
    ],
    image: '/projects/crossword-solver.svg',
    liveUrl: 'https://example.com/crossword-solver',
    githubUrl: 'https://github.com/yourusername/crossword-solver',
    tags: ['Constraints', 'Solver'],
  },
]

export const featuredProject = projects.find((project) => project.featured)

export const heroPreviewProjects = [
  projects[0],
  projects[1],
  projects[5],
]
