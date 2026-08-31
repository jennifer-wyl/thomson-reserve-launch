import { hero } from '../content'
import { LEAD_FORM_URL } from '../config'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-inner">
        <span className="pill hero-eyebrow">{hero.eyebrow}</span>
        <h1 className="hero-headline">{hero.headline}</h1>
        <p className="hero-sub">{hero.subheadline}</p>

        <div className="hero-ctas">
          <a className="btn btn-primary" href={LEAD_FORM_URL} target="_blank" rel="noreferrer">
            {hero.primaryCta}
          </a>
          <a className="btn btn-ghost-light" href="#highlights">
            {hero.secondaryCta}
          </a>
        </div>

        <dl className="hero-facts">
          {hero.facts.map((f) => (
            <div key={f.label} className="hero-fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
