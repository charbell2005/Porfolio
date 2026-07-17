import { motion } from 'framer-motion'

export function SkillGrid({ groups }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => (
        <motion.article
          key={group.category}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold text-white">{group.category}</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {group.items.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  )
}