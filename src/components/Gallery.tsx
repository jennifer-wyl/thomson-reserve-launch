import { gallery } from '../content'
import './Gallery.css'

export default function Gallery() {
  return (
    <section className="section section-alt" id="gallery">
      <div className="container">
        <span className="section-label">{gallery.sectionLabel}</span>
        <h2 className="section-heading">{gallery.heading}</h2>
        <p className="section-sub">{gallery.sub}</p>

        <div className="gallery-grid">
          {gallery.facilities.map((f, i) => (
            <div className={`gallery-tile gallery-tile-${i % 4}`} key={f.name}>
              <span className="gallery-zone">{f.zone}</span>
              <span className="gallery-name">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
