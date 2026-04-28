import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { focusAreas, projects } from '../data/projects'

const MotionSection = motion.section

const stackPositions = {
  prev: {
    className:
      '-left-6 top-[20%] z-10 hidden w-[34%] -rotate-[7deg] lg:block xl:-left-10',
    animate: {
      x: 0,
      y: -8,
      scale: 0.96,
      opacity: 0.76,
    },
  },
  active: {
    className:
      'left-1/2 top-0 z-30 w-full max-w-[560px] -translate-x-1/2 lg:top-[8%]',
    animate: {
      x: '-50%',
      y: 0,
      scale: 1,
      opacity: 1,
    },
  },
  next: {
    className:
      '-right-7 top-[3%] z-20 hidden w-[35%] rotate-[6deg] lg:block xl:-right-10',
    animate: {
      x: 0,
      y: 6,
      scale: 0.97,
      opacity: 0.8,
    },
  },
}

function HeroPanel({ project, role, onClick, isInteractive }) {
  const position = stackPositions[role]
  const isActive = role === 'active'
  const panelClassName = `absolute overflow-hidden rounded-[1.85rem] border border-white/10 bg-slate-950/84 text-left shadow-[0_26px_70px_rgba(2,6,23,0.34)] backdrop-blur ${position.className} ${
    isInteractive ? 'cursor-pointer' : 'cursor-default'
  }`
  const content = (
    <>
      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/95 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky-300/45" />
        <span className="ml-3 truncate text-[11px] uppercase tracking-[0.22em] text-slate-500">
          {isActive ? project.category : role === 'prev' ? 'Previous' : 'Next'}
        </span>
      </div>

      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.1),_transparent_42%)]">
        <div className="pointer-events-none absolute inset-x-8 top-6 z-10 h-px bg-white/10" />
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={`w-full object-cover ${isActive ? 'h-[360px] sm:h-[390px]' : 'h-48'}`}
        />
      </div>

      <div className="border-t border-white/10 bg-slate-950/92 px-5 py-5">
        <div
          className={`flex flex-wrap items-start justify-between gap-3 ${
            isActive ? '' : 'flex-col'
          }`}
        >
          <div className={isActive ? 'max-w-[24rem]' : 'max-w-full'}>
            <p className="text-sm font-semibold tracking-[-0.02em] text-white">
              {project.title}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {project.whyItMatters ?? project.description}
            </p>
          </div>

          {isActive ? (
            <div className="flex flex-wrap gap-2">
              {project.atAGlance?.slice(0, 2).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {isActive ? (
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              {project.featured ? 'Open Case Study' : 'Live Demo'}
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
        ) : null}
      </div>
    </>
  )

  if (isActive) {
    return (
      <motion.div
        layout
        initial={{
          opacity: 0,
          y: 18,
          scale: 0.94,
        }}
        animate={position.animate}
        exit={{
          opacity: 0,
          y: -18,
          scale: 0.9,
        }}
        transition={{ type: 'spring', stiffness: 170, damping: 24, mass: 0.85 }}
        className={panelClassName}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <motion.button
      type="button"
      layout
      onClick={onClick}
      initial={{
        opacity: 0,
        y: role === 'prev' ? 40 : -32,
        scale: 0.94,
      }}
      animate={position.animate}
      exit={{
        opacity: 0,
        y: role === 'prev' ? -28 : 28,
        scale: 0.9,
      }}
      transition={{ type: 'spring', stiffness: 170, damping: 24, mass: 0.85 }}
      className={panelClassName}
    >
      {content}
    </motion.button>
  )
}

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visiblePanels = useMemo(() => {
    const previousIndex = (activeIndex - 1 + projects.length) % projects.length
    const nextIndex = (activeIndex + 1) % projects.length

    return [
      { role: 'prev', project: projects[previousIndex], index: previousIndex },
      { role: 'active', project: projects[activeIndex], index: activeIndex },
      { role: 'next', project: projects[nextIndex], index: nextIndex },
    ]
  }, [activeIndex])

  const showProject = (nextIndex) => {
    if (nextIndex === activeIndex) {
      return
    }

    setActiveIndex(nextIndex)
  }

  const stepProject = (step) => {
    setActiveIndex((current) => (current + step + projects.length) % projects.length)
  }

  return (
    <MotionSection
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-14 lg:px-8 lg:pb-32 lg:pt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/20 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-2xl pt-2">
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
            Data Science Portfolio
          </p>
          <div className="grid gap-7 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div className="w-full max-w-[270px]">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/85 shadow-[0_22px_70px_rgba(2,6,23,0.34)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/95 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-300/45" />
                  <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Profile
                  </span>
                </div>
                <img
                  src="/profile/naeem-placeholder.svg"
                  alt="Placeholder portrait for Naeem Almohtaseb"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-slate-500">
                Naeem Almohtaseb
              </p>
            </div>

            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                Introduction
              </p>
              <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-4xl lg:text-[3rem]">
                A student researcher and builder focused on usable analytical
                work.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I&apos;m Naeem Almohtaseb. My work sits between data products,
                computational modeling, and algorithmic systems, with a
                particular interest in projects that turn difficult structure
                into something people can actually inspect and use.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                I care about analytical clarity, thoughtful interfaces, and
                systems that feel rigorous without becoming inaccessible. This
                portfolio is a selection of projects across healthcare,
                environmental analysis, simulation, and solver design.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-slate-900/75 px-4 py-2 text-xs font-medium tracking-[0.18em] text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              View Selected Work
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              GitHub / Contact
            </a>
          </div>
        </div>

        <div className="relative min-h-[760px] lg:min-h-[820px]">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.7rem] bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_30%)]" />

          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => stepProject(-1)}
            className="absolute left-2 top-[26%] z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-xl text-slate-900 shadow-[0_18px_40px_rgba(2,6,23,0.32)] transition hover:-translate-y-0.5 hover:bg-slate-100 lg:inline-flex"
            aria-label="Previous project"
          >
            &lsaquo;
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => stepProject(1)}
            className="absolute right-2 top-[26%] z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-xl text-slate-900 shadow-[0_18px_40px_rgba(2,6,23,0.32)] transition hover:-translate-y-0.5 hover:bg-slate-100 lg:inline-flex"
            aria-label="Next project"
          >
            &rsaquo;
          </motion.button>

          <div className="relative h-full w-full">
            <AnimatePresence initial={false} mode="popLayout">
              {visiblePanels.map(({ role, project, index }) => (
                <HeroPanel
                  key={project.title}
                  project={project}
                  role={role}
                  onClick={() => showProject(index)}
                  isInteractive={role !== 'active'}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="relative z-40 mx-auto mt-[34rem] flex w-full max-w-[560px] flex-col lg:mt-[38rem]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                Browse all projects
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => showProject(index)}
                  className={`rounded-[1rem] border px-3 py-3 text-left transition ${
                    index === activeIndex
                      ? 'border-white bg-white text-slate-950 shadow-[0_14px_35px_rgba(255,255,255,0.14)]'
                      : 'border-white/70 bg-white/90 text-slate-700 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950'
                  }`}
                >
                  <p
                    className={`truncate text-[11px] uppercase tracking-[0.18em] ${
                      index === activeIndex ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    {project.category}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-6">
                    {project.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default Hero
