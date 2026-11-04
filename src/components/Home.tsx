import { FiArrowRight, FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi'
import type { SectionId } from '../App'

interface Props {
  onNavigate: (id: SectionId) => void
}

export default function Home({ onNavigate }: Props) {
  return (
    <section id="home" className="section home">
      <div className="container">
        <div className="hero">
          <p className="eyebrow">Quality Assurance · Evaluation · Research</p>
          <h1>
            Joel <span>Oluwasogo</span>
          </h1>
          <p className="lead">
            Analytical engineering graduate and Quality Assurance Engineer at Credlock Nigeria Limited.
            I investigate issues rigorously, document evidence clearly, and deliver precise written
            evaluations — ready for research, QA, and evaluation specialist roles.
          </p>

          <div className="meta">
            <span>Ilorin, Nigeria</span>
            <span className="dot">·</span>
            <span>Open to opportunities</span>
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={() => onNavigate('experience')}>
              View experience <FiArrowRight size={16} />
            </button>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/joel-oluwasogo-563257179/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={15} /> Resume / LinkedIn
            </a>
          </div>

          <div className="socials">
            <a href="https://www.linkedin.com/in/joel-oluwasogo-563257179/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Joelsogo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={18} /> GitHub
            </a>
            <a href="mailto:joeloluwasogo@gmail.com" aria-label="Email">
              joeloluwasogo@gmail.com
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .home { padding-top: 3rem; padding-bottom: 2.5rem; }
        .hero { max-width: 640px; }
        .eyebrow {
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 1rem;
        }
        h1 {
          font-size: clamp(2.25rem, 7vw, 3.25rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
          margin-bottom: 1.15rem;
        }
        h1 span { color: var(--accent); }
        .lead {
          color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .meta {
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;
          color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1.75rem;
        }
        .dot { opacity: 0.5; }
        .actions {
          display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem;
        }
        .socials {
          display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: center;
        }
        .socials a {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.85rem; color: var(--text-muted); transition: color 0.15s;
        }
        .socials a:hover { color: var(--accent); }
        @media (min-width: 768px) {
          .home { padding-top: 5rem; }
        }
      `}</style>
    </section>
  )
}
