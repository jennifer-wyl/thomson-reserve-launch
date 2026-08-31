import { footer, site } from '../content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-agent">
          <strong>{footer.agentBlock.name}</strong>
          <span>{footer.agentBlock.title}</span>
          <span>{footer.agentBlock.handle}</span>
          <a href={`mailto:${footer.agentBlock.email}`}>{footer.agentBlock.email}</a>
        </div>

        <p className="site-footer-disclaimer">{footer.disclaimer}</p>

        <p className="site-footer-cea">{footer.cea}</p>

        <p className="site-footer-copy">
          © {new Date().getFullYear()} {site.projectName}. Prepared by {site.agent.name}, an
          independent PropNex-appointed agent. Not affiliated with or endorsed by the developer.
        </p>
      </div>
    </footer>
  )
}
