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
}))

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(148,163,184,0.12),_transparent_22%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_28%)]" />
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

        <section id="about" className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.3)] sm:p-10 lg:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              About
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="max-w-md text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Interdisciplinary work across data, systems, and computation.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                My work sits at the intersection of data science,
                healthcare and economic analysis, scientific
                simulation, and algorithmic side projects. I care about
                building tools that are not only technically rigorous, but
                also clear, usable, and easy for collaborators to evaluate
                quickly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
