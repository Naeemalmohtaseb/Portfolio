export const projectCategories = [
  {
    id: 'data-products',
    label: 'Data Products',
    subtitle:
      'Dashboards, decision tools, and analytical interfaces built to make real-world data legible, useful, and fast to evaluate.',
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
    image: '/Screenshots/healthcare.jpeg',
    liveUrl: 'https://hospital-insurance-six.vercel.app/#',
    githubUrl: 'https://github.com/Naeemalmohtaseb/Hospital-Insurance',
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
    image: '/Screenshots/retail.jpeg',
    liveUrl: 'https://retail-delta-five.vercel.app/',
    githubUrl: 'https://github.com/Naeemalmohtaseb/Retail',
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
    image: '/Screenshots/microplastics.jpeg',
    liveUrl: 'https://www.microplastichealthregression.xyz/',
    githubUrl: 'https://github.com/Naeemalmohtaseb/Microplastic_Regression',
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
    image: '/Screenshots/environment.jpeg',
    liveUrl: 'https://environmental-policies.vercel.app/',
    githubUrl: 'https://github.com/Naeemalmohtaseb/Environmental-Policy-Analysis',
    tags: ['Environmental Justice', 'Spatial Analysis', 'Policy-Relevant'],
  },
  {
    title: 'Real-Time Prediction Market Analysis Platform',
    category: 'Data Products',
    categoryId: 'data-products',
    featured: false,
    description:
      'Aggregates Polymarket and Kalshi data to summarize market-implied probabilities for current-world questions through a clean, AI-assisted dashboard.',
    highlights: [
      'Integrated Polymarket and Kalshi APIs into a unified prediction-market data pipeline.',
      'Cached 1K+ active markets locally with SQLite for faster hybrid search.',
      'Built NLP-style relevance ranking to match natural-language questions to relevant contracts.',
      'Designed deterministic probability aggregation, confidence labeling, and provider comparison.',
      'Added RSS context and LLM-assisted summaries without allowing AI to invent probabilities.',
      'Created a simplified Streamlit dashboard for nontechnical users.',
    ],
    atAGlance: ['Market Data', 'API Pipeline', 'Forecast Dashboard'],
    whyItMatters:
      'Turns fragmented prediction-market contracts into readable, explainable market summaries.',
    image: '/Screenshots/Betting.png',
    screenshots: [
      '/Screenshots/Betting.png',
      '/Screenshots/dashboard-home.png',
      '/Screenshots/forecast-summary.png',
      '/Screenshots/market-evidence.png',
      '/Screenshots/provider-comparison.png',
    ],
    liveUrl: 'https://predictionmarketinsight-dkxz77bxbpxk5x66tnms3k.streamlit.app/',
    githubUrl: 'https://github.com/Naeemalmohtaseb/Prediction_Market_Insight',
    caseStudyUrl: 'TODO_ADD_CASE_STUDY_LINK',
    tags: [
      'Python',
      'Streamlit',
      'Data Engineering',
      'APIs',
      'SQLite',
      'NLP',
      'LLMs',
      'Forecasting',
    ],
  },
]

export const featuredProject = projects.find((project) => project.featured)

export const focusAreas = [
  'Healthcare Analytics',
  'Data Products',
  'Policy Analysis',
  'Forecasting Systems',
]
