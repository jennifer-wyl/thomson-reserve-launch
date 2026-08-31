import { pricing } from '../content'
import { LEAD_FORM_URL } from '../config'
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <span className="section-label">{pricing.sectionLabel}</span>
        <h2 className="section-heading">{pricing.heading}</h2>
        <p className="section-sub">{pricing.sub}</p>

        <div className="pricing-panel">
          <div className="pricing-note">{pricing.note}</div>
          <a className="btn btn-primary" href={LEAD_FORM_URL} target="_blank" rel="noreferrer">
            Notify Me When Pricing Is Out
          </a>
        </div>
      </div>
    </section>
  )
}
