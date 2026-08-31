import { useState } from 'react'
import { header, site } from '../content'
import { LEAD_FORM_URL } from '../config'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="site-logo" href="#top">
          {header.logoText}
        </a>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {header.navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary site-nav-cta"
            href={LEAD_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            {header.ctaLabel}
          </a>
        </nav>

        <button
          className="site-nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="site-header-agent-strip">
        <div className="container">
          {site.agent.name} · {site.agent.title} · {site.agent.handle}
        </div>
      </div>
    </header>
  )
}
