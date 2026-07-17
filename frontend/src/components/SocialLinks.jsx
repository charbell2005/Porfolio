import { portfolioData } from '../data/portfolio'

export function SocialLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {portfolioData.socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : '_self'}
          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          className={`inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r ${link.accent} px-4 py-2 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-black/20`}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}