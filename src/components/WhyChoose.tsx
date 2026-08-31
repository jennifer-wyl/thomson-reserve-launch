import { whyChoose } from '../content'
import './WhyChoose.css'

export default function WhyChoose() {
  return (
    <section className="section section-alt" id="why-choose">
      <div className="container">
        <span className="section-label">{whyChoose.sectionLabel}</span>
        <h2 className="section-heading">{whyChoose.heading}</h2>
        <p className="section-sub">{whyChoose.sub}</p>

        <div className="why-grid">
          {whyChoose.points.map((p, i) => (
            <div className="why-point" key={p.title}>
              <span className="why-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
