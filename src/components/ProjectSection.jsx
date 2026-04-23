import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const MotionDiv = motion.div

const sectionLabels = {
  'data-products': 'Applied Work',
  'research-simulation': 'Technical Depth',
  'algorithmic-systems': 'Systems Thinking',
}

function ProjectSection({ id, title, subtitle, projects }) {
  return (
    <section
      id={id}
      className="relative px-6 py-14 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <MotionDiv
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              {sectionLabels[id] ?? 'Project Category'}
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.9rem]">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-slate-500">
          <span className="h-px flex-1 bg-white/10" />
          <span>{projects.length} selected projects</span>
        </div>

        <div
          className={`mt-10 grid gap-6 ${
            id === 'data-products'
              ? 'lg:grid-cols-2 xl:grid-cols-2'
              : 'lg:grid-cols-2 xl:grid-cols-2'
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              emphasized={
                id === 'data-products' &&
                (index === 0 || project.title === 'Hospital Insurance Dashboard')
              }
            />
          ))}
        </div>
      </MotionDiv>
    </section>
  )
}

export default ProjectSection
