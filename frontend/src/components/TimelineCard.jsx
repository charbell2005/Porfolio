import { motion } from 'framer-motion'

export function TimelineCard({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{item.period}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
        </div>
        <div className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">
          {item.location}
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-slate-400">{item.company}</p>
      <p className="mt-3 leading-7 text-slate-300">{item.description}</p>

      <ul className="mt-5 space-y-3">
        {item.details.map((detail) => (
          <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}