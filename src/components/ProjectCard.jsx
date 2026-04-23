import { motion } from 'framer-motion'

const MotionArticle = motion.article

function ProjectCard({ project, emphasized = false }) {
  return (
    <MotionArticle
      className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] shadow-[0_20px_70px_rgba(2,6,23,0.32)] transition ${
        emphasized ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className={`${emphasized ? 'lg:grid lg:grid-cols-[1.08fr_0.92fr]' : ''}`}>
        <div className="relative overflow-hidden border-b border-white/10 bg-slate-950/80 lg:border-b-0">
          <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/95 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky-300/40" />
            <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-slate-500">
              {project.category}
            </span>
          </div>
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.1),_transparent_42%)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.08))]" />
            <div className="pointer-events-none absolute inset-x-6 top-5 z-10 h-px bg-white/10" />
            <img
              src={project.image}
              alt={project.title}
              className={`w-full object-cover transition duration-500 group-hover:scale-[1.015] ${
                emphasized ? 'h-72 sm:h-[22rem] lg:h-full' : 'h-60'
              }`}
            />
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.atAGlance?.length ? (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
              <span className="text-slate-600">At a glance</span>
              {project.atAGlance.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900/80 px-3 py-1.5 text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          <h3 className="mt-5 max-w-[24rem] text-[1.85rem] font-semibold tracking-[-0.045em] text-white">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[32rem] text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          {project.whyItMatters ? (
            <p className="mt-4 text-sm leading-6 text-sky-100/78">
              Why it matters: {project.whyItMatters}
            </p>
          ) : null}

          <ul className="mt-7 space-y-3.5 border-t border-white/8 pt-6">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
    </MotionArticle>
  )
}

export default ProjectCard
