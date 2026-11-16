import { floorPlans } from '../content'
import { CONTACT_URL } from '../config'
import './FloorPlans.css'

export default function FloorPlans() {
  return (
    <section className="section" id="unit-types">
      <div className="container">
        <span className="section-label">{floorPlans.sectionLabel}</span>
        <h2 className="section-heading">{floorPlans.heading}</h2>
        <p className="section-sub">{floorPlans.sub}</p>

        <div className="collections-grid">
          {floorPlans.collections.map((col) => (
            <div className="collection-card" key={col.name}>
              <h3>{col.name}</h3>
              <p className="collection-desc">{col.description}</p>

              <ul className="unit-type-list">
                {col.types.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <a className="btn btn-outline unit-type-cta" href={CONTACT_URL}>
                {floorPlans.gatedCtaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
