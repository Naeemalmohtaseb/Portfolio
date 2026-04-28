function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 px-6 py-12 lg:px-8 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/15 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
            Naeem Almohtaseb
          </p>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Data products, modeling work, and solver systems built to be clear,
            credible, and easy to review.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:items-end">
            <a
              href="https://www.linkedin.com/in/naeem-89b121306/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:privatenaeem0@gmail.com"
              className="transition hover:text-white"
            >
              privatenaeem0@gmail.com
            </a>
            <a href="tel:5206788417" className="transition hover:text-white">
              520 678 8417
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            React / Vite / Tailwind / Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
