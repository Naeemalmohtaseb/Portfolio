import { motion } from 'framer-motion'

const MotionArticle = motion.article

function ProjectCard({ project }) {
  return (
    <MotionArticle
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(2,6,23,0.35)] transition"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
            {project.category}
          </span>
          {project.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm leading-6 text-slate-200"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
    </MotionArticle>
  )
}

export default ProjectCard
