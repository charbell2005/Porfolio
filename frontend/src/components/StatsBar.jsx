import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function Counter({ value, label, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.6, ease: 'easeOut' })
    }
  }, [isInView, count, value])

  return (
    <div ref={ref} className="text-center">
      <motion.p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{rounded}</motion.p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">{label}</p>
    </div>
  )
}

export function StatsBar() {
  const stats = [
    { value: 2, suffix: '+', label: 'Years Experience' },
    { value: 5, suffix: '+', label: 'Projects Built' },
    { value: 10, suffix: '+', label: 'Technologies' },
    { value: 1, suffix: '', label: 'Internship' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-8 backdrop-blur-xl sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="px-4">
          <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
        </div>
      ))}
    </motion.div>
  )
}
