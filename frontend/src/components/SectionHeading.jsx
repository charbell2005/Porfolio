export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  )
}