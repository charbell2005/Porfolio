import { useState } from 'react'
import { portfolioData } from '../data/portfolio'
import { SocialLinks } from './SocialLinks'

const initialState = { name: '', email: '', message: '' }

export function ContactPanel() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Unable to send message right now.')
      }

      setStatus('success')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
        <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
        <div className="mt-6 space-y-4 text-slate-300">
          <a className="block transition hover:text-white" href="mailto:charbel.barrak901@yahoo.com">Email: charbel.barrak901@yahoo.com</a>
          {portfolioData.socialLinks.slice(0, 2).map((link) => (
            <a key={link.label} className="block transition hover:text-white" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>

      <form onSubmit={submitForm} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Your Name"
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="Your Email"
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
            required
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Your Message"
          rows="6"
          className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="mt-4 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="mt-4 text-sm text-emerald-300">Message sent successfully.</p>}
        {status === 'error' && <p className="mt-4 text-sm text-rose-300">Message could not be sent right now.</p>}
      </form>
    </div>
  )
}