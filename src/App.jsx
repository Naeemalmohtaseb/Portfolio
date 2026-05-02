import Footer from './components/Footer'
import FeaturedProject from './components/FeaturedProject'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import { featuredProject, projectCategories, projects } from './data/projects'

const projectsByCategory = projectCategories.map((category) => ({
  ...category,
  projects: projects.filter(
    (project) => project.categoryId === category.id && !project.featured,
  ),
})).filter((category) => category.projects.length > 0)

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_24%),radial-gradient(circle_at_78%_18%,_rgba(148,163,184,0.08),_transparent_18%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.06),_transparent_22%)]" />
      <Navbar />
      <main>
        <Hero />
        <section id="projects" className="section-divider">
          <FeaturedProject project={featuredProject} />
          {projectsByCategory.map((section) => (
            <ProjectSection
              key={section.id}
              id={section.id}
              title={section.label}
              subtitle={section.subtitle}
              projects={section.projects}
            />
          ))}
        </section>

        <section id="about" className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-8 shadow-[0_28px_90px_rgba(2,6,23,0.34)] sm:p-10 lg:p-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              About
            </p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <h2 className="max-w-md text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.85rem]">
                I build tools that make complex systems easier to inspect.
              </h2>
              <div className="max-w-2xl space-y-5 text-base leading-8 text-slate-300">
                <p>
                  My work spans healthcare and economic analysis, scientific
                  modeling, and solver systems. The through-line is building
                  tools that make complicated structure easier to inspect
                  without sanding off the hard parts.
                </p>
                <p className="text-slate-400">
                  I&apos;m most interested in work that requires both analytical
                  rigor and product judgment, where the interface is part of
                  the reasoning rather than decoration around it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
