import { motion } from 'framer-motion'

const MotionSection = motion.section

function FeaturedProject({ project }) {
  return (
    <MotionSection
      id="featured-project"
      className="px-6 py-12 lg:px-8 lg:py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_35px_120px_rgba(2,6,23,0.45)]">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 lg:border-b-0 lg:border-r lg:p-6">
            <img
              src={project.image}
              alt={project.title}
              className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-200/75">
                Featured Project
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                {project.description}
              </p>
              <ul className="mt-8 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-200"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default FeaturedProject
