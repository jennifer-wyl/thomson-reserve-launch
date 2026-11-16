import { gallery } from '../content'
import './Gallery.css'

// 16 Nov 2026: the placeholder gradient tiles are replaced by the facility
// names grouped by club. When cleared renderings arrive, add an `image` to
// each facility in content.ts and bring back a picture grid here.
export default function Gallery() {
  const zones = [...new Set(gallery.facilities.map((f) => f.zone))]
  return (
    <section className="section section-alt" id="gallery">
      <div className="container">
        <span className="section-label">{gallery.sectionLabel}</span>
        <h2 className="section-heading">{gallery.heading}</h2>
        <p className="section-sub">{gallery.sub}</p>

        <div className="facility-zones">
          {zones.map((zone) => (
            <div className="facility-zone" key={zone}>
              <h3 className="facility-zone-name">{zone}</h3>
              <ul className="facility-list">
                {gallery.facilities
                  .filter((f) => f.zone === zone)
                  .map((f) => (
                    <li key={f.name}>{f.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
