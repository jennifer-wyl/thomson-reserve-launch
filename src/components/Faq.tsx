import { useState } from 'react'
import { faq } from '../content'
import './Faq.css'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <span className="section-label">{faq.sectionLabel}</span>
        <h2 className="section-heading">{faq.heading}</h2>

        <div className="faq-list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button className="faq-question" onClick={() => setOpenIndex(isOpen ? null : i)}>
                  <span>{item.q}</span>
                  <span className="faq-chevron">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
