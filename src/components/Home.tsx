import { FiArrowRight, FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi'
import type { SectionId } from '../App'

interface Props {
  onNavigate: (id: SectionId) => void
}

export default function Home({ onNavigate }: Props) {
  return (
    <section id="home" className="section home">
      <div className="orb orb-1" aria-hidden />
      <div className="orb orb-2" aria-hidden />
      <div className="container">
        <div className="hero">
          <p className="eyebrow reveal">Quality Assurance · Evaluation · Research</p>
          <h1 className="reveal reveal-delay-1">
            Joel <span>Oluwasogo</span>
          </h1>
          <p className="lead reveal reveal-delay-2">
            Analytical engineering graduate and Quality Assurance Engineer at Credlock Nigeria Limited.
            I investigate issues rigorously, document evidence clearly, and deliver precise written
            evaluations — ready for research, QA, and evaluation specialist roles.
          </p>

          <div className="meta reveal reveal-delay-2">
            <span className="pill">Ilorin, Nigeria</span>
            <span className="pill available">Open to opportunities</span>
          </div>

          <div className="actions reveal reveal-delay-3">
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

          <div className="socials reveal reveal-delay-4">
            <a href="https://www.linkedin.com/in/joel-oluwasogo-563257179/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={17} /> LinkedIn
            </a>
            <a href="https://github.com/Joelsogo" target="_blank" rel="noopener noreferrer">
              <FiGithub size={17} /> GitHub
            </a>
            <a href="mailto:joeloluwasogo@gmail.com">joeloluwasogo@gmail.com</a>
          </div>
        </div>
      </div>

      <style>{`
        .home {
          padding-top: 3.5rem;
          padding-bottom: 3rem;
          min-height: calc(100dvh - var(--header-h) - 40px);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.5;
          animation: float 12s ease-in-out infinite;
        }
        .orb-1 {
          width: 320px; height: 320px;
          background: rgba(45, 212, 191, 0.2);
          top: -5%; right: 5%;
        }
        .orb-2 {
          width: 240px; height: 240px;
          background: rgba(56, 189, 248, 0.12);
          bottom: 10%; left: -5%;
          animation-delay: -4s;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(12px, -18px) scale(1.05); }
        }
        .hero { max-width: 680px; position: relative; z-index: 1; }
        .eyebrow {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 1.15rem;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .eyebrow::before {
          content: ''; width: 8px; height: 8px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        h1 {
          font-size: clamp(2.5rem, 8vw, 3.6rem);
          font-weight: 800; letter-spacing: -0.04em; line-height: 1.08;
          margin-bottom: 1.25rem;
        }
        h1 span {
          background: linear-gradient(135deg, #2dd4bf 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .lead {
          color: var(--text-secondary); font-size: 1.08rem; line-height: 1.75;
          margin-bottom: 1.5rem; max-width: 560px;
        }
        .meta {
          display: flex; flex-wrap: wrap; gap: 0.6rem;
          margin-bottom: 2rem;
        }
        .pill {
          font-size: 0.8rem; color: var(--text-muted);
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
        }
        .pill.available {
          color: var(--accent);
          border-color: rgba(45, 212, 191, 0.3);
          background: var(--accent-dim);
        }
        .actions {
          display: flex; flex-wrap: wrap; gap: 0.85rem; margin-bottom: 2.25rem;
        }
        .socials {
          display: flex; flex-wrap: wrap; gap: 1.4rem; align-items: center;
        }
        .socials a {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.85rem; color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
        }
        .socials a:hover {
          color: var(--accent);
          transform: translateY(-1px);
        }
        @media (min-width: 768px) {
          .home { padding-top: 5rem; }
        }
      `}</style>
    </section>
  )
}
