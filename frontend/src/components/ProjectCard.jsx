import { motion } from 'framer-motion'

export function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glow backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={`absolute -inset-px rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]`} />
      </div>

      {/* Image section */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.tone}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
          {project.badge}
        </div>
      </div>

      {/* Gradient accent line */}
      <div className={`h-px bg-gradient-to-r ${project.tone}`} />

      {/* Content */}
      <div className="relative p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          {project.period}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-slate-950/30 p-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">{metric.label}</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-5 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            GitHub
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            Live Demo
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  )
}
