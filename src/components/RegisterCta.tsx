import { registerCta } from '../content'
import { LEAD_FORM_URL } from '../config'
import './RegisterCta.css'

export default function RegisterCta() {
  return (
    <section className="section register-cta">
      <div className="container register-cta-inner">
        <h2>{registerCta.heading}</h2>
        <p>{registerCta.sub}</p>
        <a className="btn btn-primary" href={LEAD_FORM_URL} target="_blank" rel="noreferrer">
          {registerCta.ctaLabel}
        </a>
        <span className="register-cta-micro">{registerCta.microcopy}</span>
      </div>
    </section>
  )
}
