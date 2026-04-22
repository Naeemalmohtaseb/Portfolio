function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 px-6 py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
            Naeem Almohtaseb
          </p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
            Built with React, Vite, Tailwind CSS, and Framer Motion. Designed
            to present analytical and computational work with clarity.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="transition hover:text-white"
          >
            your.email@example.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
