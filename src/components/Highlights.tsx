import { highlights } from '../content'
import './Highlights.css'

const icons: Record<string, JSX.Element> = {
  train: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="5" y="3" width="14" height="14" rx="4" />
      <path d="M8 21l1.5-3M16 21l-1.5-3M5 13h14" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M20 4C10 4 4 10 4 18c0 0 8 2 12-2s4-8 4-12Z" />
      <path d="M4 20 12 12" />
    </svg>
  ),
  school: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  ),
  basket: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 9h16l-1.5 10.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 9Z" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
    </svg>
  ),
}

export default function Highlights() {
  return (
    <section className="section" id="highlights">
      <div className="container">
        <span className="section-label">{highlights.sectionLabel}</span>
        <h2 className="section-heading">{highlights.heading}</h2>
        <p className="section-sub">{highlights.sub}</p>

        <div className="highlights-grid">
          {highlights.cards.map((c) => (
            <div className="highlight-card" key={c.title}>
              <div className="highlight-icon">{icons[c.icon]}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <p className="highlights-legacy">{highlights.legacyNote}</p>
      </div>
    </section>
  )
}
