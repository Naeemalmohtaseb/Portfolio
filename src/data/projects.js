export const projectCategories = [
  {
    id: 'data-products',
    label: 'Data Products',
    subtitle:
      'Dashboards, decision tools, and analytical interfaces built to make real-world data legible, useful, and fast to evaluate.',
  },
  {
    id: 'research-simulation',
    label: 'Research / Simulation',
    subtitle:
      'Modeling work grounded in scientific computation, parameterized systems, and physically informed analysis.',
  },
  {
    id: 'algorithmic-systems',
    label: 'Algorithmic Systems / Solvers',
    subtitle:
      'Search logic, heuristics, and solver design for structured problems that reward careful system thinking.',
  },
]

export const projects = [
  {
    title: 'Hospital Price CareFinder',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: true,
    description:
      'Research-driven pricing explorer that turns hospital transparency files into a usable decision tool for comparing procedure costs across providers and regions.',
    highlights: [
      'Compares provider-level prices across procedures, markets, and geographies.',
      'Built as both an analytical interface and a public-facing product surface.',
      'Exposes pricing opacity in data that is usually difficult to inspect quickly.',
    ],
    atAGlance: ['Healthcare', 'Interactive App', 'Geographic Comparison'],
    whyItMatters: 'Exposes pricing opacity across hospitals and regions.',
    image: '/projects/hospital-carefinder.svg',
    liveUrl: 'https://hospital-insurance-six.vercel.app/#',
    githubUrl: 'https://github.com/yourusername/hospital-carefinder',
    tags: ['Healthcare Pricing', 'Research + Product', 'Decision Tool'],
  },
  {
    title: 'Business Retail Analysis',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Business-facing retail analysis system built to surface revenue concentration, customer segmentation, and repeat-purchase patterns from transaction data.',
    highlights: [
      'Highlights customer segments, purchase frequency, and top-line concentration.',
      'Frames retention and product mix questions in a decision-ready format.',
      'Turns raw transaction records into a clearer view of growth levers.',
    ],
    atAGlance: ['Dashboard', 'Segmentation', 'Revenue Analysis'],
    whyItMatters: 'Turns raw transaction data into retention and revenue strategy.',
    image: '/projects/business-retail-analysis.svg',
    liveUrl: 'https://retail-delta-five.vercel.app/',
    githubUrl: 'https://github.com/yourusername/business-retail-analysis',
    tags: ['Retail', 'Decision Support', 'Customer Analysis'],
  },
  {
    title: 'Microplastics',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Analytical study of microplastic distribution patterns that focuses on ecological context, measurement uncertainty, and the limits of straightforward inference.',
    highlights: [
      'Separates observed patterns from stronger causal claims the data cannot support.',
      'Uses comparative views to show how measurement context changes interpretation.',
      'Designed to communicate environmental risk without overstating certainty.',
    ],
    atAGlance: ['Environmental', 'Inference', 'Public Health'],
    whyItMatters: 'Makes ecological signal and uncertainty visible at the same time.',
    image: '/projects/microplastics.svg',
    liveUrl: 'https://www.microplastichealthregression.xyz/',
    githubUrl: 'https://github.com/yourusername/microplastics',
    tags: ['Microplastics', 'Uncertainty-Aware', 'Environmental Data'],
  },
  {
    title: 'Environmental Analysis',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Spatial analysis interface examining how environmental burden, vulnerability, and representation diverge across places rather than aligning neatly.',
    highlights: [
      'Pairs geographic context with comparative indicators instead of single-score summaries.',
      'Designed to surface mismatches between exposure, vulnerability, and visibility.',
      'Structured for policy-facing interpretation rather than generic mapping.',
    ],
    atAGlance: ['Geospatial', 'Policy Analysis', 'Vulnerability'],
    whyItMatters: 'Maps gaps between environmental burden and who gets represented.',
    image: '/projects/environmental-analysis.svg',
    liveUrl: 'https://environmental-policies.vercel.app/',
    githubUrl: 'https://github.com/yourusername/environmental-analysis',
    tags: ['Environmental Justice', 'Spatial Analysis', 'Policy-Relevant'],
  },
  {
    title: 'Hospital Insurance Dashboard',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Applied healthcare dashboard for comparing insurer-hospital pricing relationships, negotiated rates, and payer-specific variation across procedures.',
    highlights: [
      'Lets users compare payers, procedures, and local market behavior side by side.',
      'Built around negotiated-rate differences rather than static summary charts.',
      'Makes insurer-specific pricing structures easier to evaluate and explain.',
    ],
    atAGlance: ['Healthcare', 'Payer Comparison', 'Dashboard'],
    whyItMatters: 'Makes insurer-hospital pricing easier to compare and evaluate.',
    image: '/projects/hospital-insurance-dashboard.svg',
    liveUrl: 'https://example.com/hospital-insurance-dashboard',
    githubUrl: 'https://github.com/yourusername/hospital-insurance-dashboard',
    tags: ['Negotiated Rates', 'Comparative Analysis', 'Healthcare Data'],
  },
  {
    title: 'Rainbow Simulation',
    category: 'Research / Simulation',
    categoryId: 'research-simulation',
    featured: false,
    description:
      'Physically grounded rainbow simulation that models light behavior under varying atmospheric conditions to study how optical structure changes.',
    highlights: [
      'Uses stochastic or parameter-based simulation to explore optical variation.',
      'Connects visual output back to physical assumptions instead of treating it as a black box.',
      'Presents scientific modeling work in a form that is still easy to inspect.',
    ],
    atAGlance: ['Simulation', 'Optics', 'Monte Carlo'],
    whyItMatters: 'Models a physical phenomenon through stochastic simulation.',
    image: '/projects/rainbow-simulation.svg',
    liveUrl: 'https://example.com/rainbow-simulation',
    githubUrl: 'https://github.com/yourusername/rainbow-simulation',
    tags: ['Physical Modeling', 'Scientific Computing', 'Optical Simulation'],
  },
  {
    title: 'Solitaire Solver',
    category: 'Algorithmic Systems / Solvers',
    categoryId: 'algorithmic-systems',
    featured: false,
    description:
      'Search-based solver that treats solitaire as a state-space problem and prioritizes move sequences that improve solvability.',
    highlights: [
      'Encodes board states and legal transitions for systematic search.',
      'Uses heuristics or move prioritization to reduce wasted exploration.',
      'Turns abstract search logic into a concrete problem-solving system.',
    ],
    atAGlance: ['Heuristic Solver', 'Search', 'State Space'],
    whyItMatters: 'Shows how search strategy changes practical solvability.',
    image: '/projects/solitaire-solver.svg',
    liveUrl: 'https://example.com/solitaire-solver',
    githubUrl: 'https://github.com/yourusername/solitaire-solver',
    tags: ['Solver Design', 'State-Space Search', 'Heuristics'],
  },
  {
    title: 'Crossword Solver',
    category: 'Algorithmic Systems / Solvers',
    categoryId: 'algorithmic-systems',
    featured: false,
    description:
      'Constraint-based crossword solver that combines pattern matching, candidate filtering, and search strategy to fill structured grids efficiently.',
    highlights: [
      'Uses letter-position constraints to prune large candidate sets early.',
      'Combines search order and filtering logic to improve fill quality.',
      'A compact example of algorithmic reasoning applied to language structure.',
    ],
    atAGlance: ['Constraint Logic', 'Search Strategy', 'Language'],
    whyItMatters: 'Turns constraint reasoning into an efficient fill strategy.',
    image: '/projects/crossword-solver.svg',
    liveUrl: 'https://example.com/crossword-solver',
    githubUrl: 'https://github.com/yourusername/crossword-solver',
    tags: ['Constraint Solver', 'Pattern Matching', 'Algorithmic Reasoning'],
  },
]

export const featuredProject = projects.find((project) => project.featured)

export const heroPreviewProjects = [
  projects[0],
  projects[1],
  projects[5],
]

export const focusAreas = [
  'Healthcare Analytics',
  'Data Products',
  'Simulation',
  'Algorithmic Systems',
]
