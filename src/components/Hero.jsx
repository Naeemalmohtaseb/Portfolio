import { motion } from 'framer-motion'
import { heroPreviewProjects } from '../data/projects'

const MotionDiv = motion.div

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
            Student / Early-Career Portfolio
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Naeem Almohtaseb
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium tracking-[-0.02em] text-slate-100 sm:text-2xl">
            Data Science, Modeling, and Computational Projects
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I build data-driven tools, analytical dashboards, and computational
            systems across healthcare, business, and scientific modeling.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Contact / GitHub
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[480px] items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.14),_transparent_38%)]" />
          <div className="relative h-full w-full max-w-[580px]">
            {heroPreviewProjects.map((project, index) => (
              <MotionDiv
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 * index }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`absolute overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 shadow-[0_35px_90px_rgba(2,6,23,0.45)] backdrop-blur ${
                  index === 0
                    ? 'left-0 top-12 w-[82%] rotate-[-5deg]'
                    : index === 1
                      ? 'right-0 top-0 w-[76%] rotate-[6deg]'
                      : 'bottom-0 right-10 w-[72%] rotate-[-2deg]'
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
                <div className="border-t border-white/10 bg-slate-950/85 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    {project.category}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {project.title}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
