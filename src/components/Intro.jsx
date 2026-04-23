import { motion } from 'framer-motion'

const MotionSection = motion.section

function Intro() {
  return (
    <MotionSection
      id="intro"
      className="px-6 pb-14 pt-2 lg:px-8 lg:pb-18"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-7xl rounded-[2.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_28px_90px_rgba(2,6,23,0.3)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[310px]">
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
              <p className="mt-4 text-center text-xs uppercase tracking-[0.22em] text-slate-500 lg:text-left">
                Replace with your real portrait in `public/profile`
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Introduction
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3rem]">
              A student researcher and builder focused on usable analytical work.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I’m Naeem Almohtaseb. My work sits between data products,
              computational modeling, and algorithmic systems, with a particular
              interest in projects that turn difficult structure into something
              people can actually inspect and use.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              I care about analytical clarity, thoughtful interfaces, and
              systems that feel rigorous without becoming inaccessible. This
              portfolio is a selection of projects across healthcare,
              environmental analysis, simulation, and solver design.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                Data Products
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                Modeling
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                Research
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                Solver Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default Intro
