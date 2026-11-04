import { FiArrowRight, FiMail } from 'react-icons/fi'
import type { SectionId } from '../App'

interface Props {
  onNavigate: (id: SectionId) => void
}

export default function Home({ onNavigate }: Props) {
  return (
    <section id="home" className="section home">
      <div className="container hero">
        <div className="hero-badge">Evaluation Specialist Candidate</div>
        <h1>
          Hi, I'm <span>Joel Oluwasogo</span>
        </h1>
        <p className="hero-lead">
          Analytical engineering graduate focused on quality assurance, technical investigation,
          research, and precise written evaluation. Currently Quality Assurance Engineer at
          Credlock Nigeria Limited.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <strong>B.Eng</strong>
            <span>Electrical & Electronics</span>
          </div>
          <div className="stat">
            <strong>QA</strong>
            <span>Quality Assurance</span>
          </div>
          <div className="stat">
            <strong>Google</strong>
            <span>Cybersecurity Cert</span>
          </div>
        </div>
        <div className="hero-actions">
          <button className="btn" onClick={() => onNavigate('experience')}>
            View Experience <FiArrowRight />
          </button>
          <button className="btn btn-outline" onClick={() => onNavigate('contact')}>
            <FiMail /> Contact Me
          </button>
        </div>
      </div>

      <style>{`
        .home {
          padding-top: 2.5rem;
          padding-bottom: 2rem;
        }
        .hero {
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(64, 145, 108, 0.15);
          color: var(--primary-light);
          border: 1px solid rgba(64, 145, 108, 0.35);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .hero h1 {
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }
        .hero h1 span {
          color: var(--primary-light);
        }
        .hero-lead {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 1.75rem;
          line-height: 1.65;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .stat {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 0.85rem 1.15rem;
          min-width: 110px;
          text-align: center;
        }
        .stat strong {
          display: block;
          font-size: 1.1rem;
          color: var(--primary-light);
          margin-bottom: 0.15rem;
        }
        .stat span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        @media (min-width: 640px) {
          .home { padding-top: 4rem; }
        }
      `}</style>
    </section>
  )
}
