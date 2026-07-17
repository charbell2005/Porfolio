import { motion } from 'framer-motion'
import { SocialLinks } from './SocialLinks'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="hero" className="grid min-h-[calc(100vh-5rem)] items-center py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.p variants={item} className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
          Charbel Barrak
        </motion.p>
        <motion.h1 variants={item} className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Charbel Barrak
        </motion.h1>
        <motion.h2 variants={item} className="mt-5 max-w-2xl text-2xl font-medium text-slate-300 sm:text-3xl lg:text-[2rem] lg:leading-tight">
          Computer Science Graduate | Junior Software Developer
        </motion.h2>
        <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I build backend-first applications, practical software tools, and clean user experiences that solve
          real problems with clarity and reliability.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            View Projects
          </a>
          <a href="/resume-placeholder.txt" download className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Download Resume
          </a>
          <a href="#contact" className="rounded-full border border-cyan-300/30 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10">
            Contact Me
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <SocialLinks />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-12 lg:mt-0"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/70">Portfolio snapshot</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Backend-minded problem solver</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  Focused on practical software, reliable APIs, and polished interfaces that feel clear and professional.
                </p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-2xl font-semibold text-cyan-200">
                CB
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Role</p>
                <p className="mt-2 text-sm font-medium text-white">Junior Software Developer</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Strength</p>
                <p className="mt-2 text-sm font-medium text-white">Backend & data logic</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Availability</p>
                <p className="mt-2 text-sm font-medium text-emerald-300">Open to work</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'Java', 'React', 'Node.js', 'SQL'].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}