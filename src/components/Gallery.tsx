import { gallery } from '../content'
import './Gallery.css'
import islandClub from '../assets/renders/island-club.jpg'
import grandClubhouse from '../assets/renders/grand-clubhouse.jpg'
import wellnessClub from '../assets/renders/wellness-club.jpg'

// Developer renderings from the Thomson Reserve ebook V4 (pp. 10, 11, 13),
// cleared for the public site by Jennifer on 16 Nov 2026.
const zoneImages: Record<string, { src: string; alt: string }> = {
  'Island Club': { src: islandClub, alt: 'Island Club poolside lounge' },
  'Grand Clubhouse': { src: grandClubhouse, alt: 'Grand Clubhouse beside the pool' },
  'Wellness Club': { src: wellnessClub, alt: 'Wellness Club hydro spa pool' },
}

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
              {zoneImages[zone] && (
                <figure className="facility-photo">
                  <img src={zoneImages[zone].src} alt={zoneImages[zone].alt} loading="lazy" />
                  <figcaption>Artist’s impression</figcaption>
                </figure>
              )}
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
