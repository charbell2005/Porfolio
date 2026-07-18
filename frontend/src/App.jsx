import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from './data/portfolio'
import { Hero } from './components/Hero'
import { SectionHeading } from './components/SectionHeading'
import { SkillGrid } from './components/SkillGrid'
import { ProjectCard } from './components/ProjectCard'
import { TimelineCard } from './components/TimelineCard'
import { ContactPanel } from './components/ContactPanel'
import { SocialLinks } from './components/SocialLinks'
import { StatsBar } from './components/StatsBar'
import { BackToTop } from './components/BackToTop'
import { Particles } from './components/Particles'

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink-950 text-slate-100 selection:bg-cyan-400/30 selection:text-cyan-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.12),_transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#020617_100%)]" />
      <div className="fixed inset-0 -z-10 bg-hero-grid bg-[length:72px_72px] opacity-[0.10]" />

      <Particles />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200">
            Charbel Barrak
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {portfolioData.navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {portfolioData.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-3 border-t border-white/10 pt-3">
                  <SocialLinks className="justify-start gap-3" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Hero />

        <div className="mt-16">
          <StatsBar />
        </div>

        <motion.section
          id="about"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-24"
        >
          <SectionHeading eyebrow="About" title="Professional Summary" />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              I am a Computer Science graduate with a strong foundation in software development, algorithms,
              databases, and web technologies. Currently pursuing a Master's degree while working as a freelance
              web developer, building efficient solutions and scalable applications.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-24"
        >
          <SectionHeading eyebrow="Skills" title="Core Technologies" />
          <SkillGrid groups={portfolioData.skills} />
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-24"
        >
          <SectionHeading eyebrow="Projects" title="Featured Work" />
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-24"
        >
            <SectionHeading eyebrow="Experience" title="Professional Experience" />
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioData.experience.map((item) => (
              <TimelineCard key={item.role} item={item} />
            ))}
          </div>
        </motion.section>

        <div className="mt-24 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.section
            id="education"
            variants={sectionMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading eyebrow="Education" title="Academic Background" />
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <img src="/lu-logo.png" alt="Lebanese University logo" className="h-16 w-16 shrink-0 rounded-xl object-contain" />
                  <div>
                    <p className="text-lg font-semibold text-white">Master's in Computer Science</p>
                    <p className="mt-1 text-sm text-slate-400">Lebanese University · 2026 – Present</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-cyan-300/80 font-medium">In Progress</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <img src="/lu-logo.png" alt="Lebanese University logo" className="h-16 w-16 shrink-0 rounded-xl object-contain" />
                  <div>
                    <p className="text-lg font-semibold text-white">Bachelor's in Computer Science</p>
                    <p className="mt-1 text-sm text-slate-400">Lebanese University · 2023–2026</p>
                  </div>
                </div>
                <p className="mt-3 text-slate-300">Built a strong foundation in programming, software design, and analytical problem-solving.</p>
              </div>
            </div>
          </motion.section>

          <div className="space-y-6">
            <motion.section
              id="certifications"
              variants={sectionMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <SectionHeading eyebrow="Certifications" title="Credentials" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <p className="text-lg font-semibold text-white">DELF B2 French Certificate</p>
                <p className="mt-1 text-sm text-slate-400">French Embassy of Beirut · 2022</p>
              </div>
            </motion.section>

            <motion.section
              id="languages"
              variants={sectionMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <SectionHeading eyebrow="Languages" title="Fluency" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-white">English</p>
                    <p className="text-sm text-slate-400">Fluent</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-white">French</p>
                    <p className="text-sm text-slate-400">Fluent</p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        <motion.section
          id="contact"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-24 pb-8"
        >
          <SectionHeading eyebrow="Contact" title="Let's Build Something Useful" />
          <ContactPanel />
        </motion.section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <SocialLinks className="justify-center" />
          <p>Charbel Barrak. Computer Science Graduate | Junior Software Developer.</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}

export default App
