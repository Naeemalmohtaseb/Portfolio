import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const MotionDiv = motion.div

function ProjectSection({ id, title, subtitle, projects }) {
  return (
    <section id={id} className="px-6 py-12 lg:px-8 lg:py-16">
      <MotionDiv
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Project Category
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </MotionDiv>
    </section>
  )
}

export default ProjectSection
