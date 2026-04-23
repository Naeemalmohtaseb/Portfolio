import { motion } from 'framer-motion'

const MotionSection = motion.section

function FeaturedProject({ project }) {
  return (
    <MotionSection
      id="featured-project"
      className="px-6 pb-14 pt-6 lg:px-8 lg:pb-20 lg:pt-8"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl px-1">
          <p className="text-[11px] uppercase tracking-[0.28em] text-sky-200/70">
            Selected Project
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.6rem]">
            A healthcare pricing case study built as both analysis and product.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_42px_140px_rgba(2,6,23,0.5)]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.15),_transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,1))] p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-7">
              <div className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-400 w-fit">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                Live product snapshot
              </div>
              <div className="screenshot-frame">
                <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-300/45" />
                  <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {project.title}
                  </span>
                </div>
                <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.1),_transparent_42%)]">
                  <div className="pointer-events-none absolute inset-x-8 top-6 z-10 h-px bg-white/10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full min-h-[420px] w-full object-cover xl:min-h-[520px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">
              <div>
                <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Featured Work
                </p>
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.5rem]">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  {project.description}
                </p>
                {project.whyItMatters ? (
                  <p className="mt-4 max-w-xl text-sm leading-7 text-sky-100/78">
                    Why it matters: {project.whyItMatters}
                  </p>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3.5 py-2 text-[11px] uppercase tracking-[0.18em] text-sky-100/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-9 space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={highlight}
                      className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-[1.35rem] border border-white/8 bg-white/[0.025] px-4 py-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-sky-100">
                        0{index + 1}
                      </span>
                      <span className="text-sm leading-7 text-slate-200">
                        {highlight}
                      </span>
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
                  Open Case Study
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Review Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default FeaturedProject
