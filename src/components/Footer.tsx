import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="name">Joel Oluwasogo</p>
          <p className="tagline">Evaluation Specialist · Quality Assurance · Research</p>
          <div className="socials">
            <a href="https://github.com/Joelsogo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="mailto:joeloluwasogo@gmail.com" aria-label="Email">
              <FiMail size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </div>
          <p className="copy">© {new Date().getFullYear()} Joel Oluwasogo. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 2rem 0 calc(1.5rem + var(--safe-bottom));
          background: #0A0F1A;
          margin-top: auto;
        }
        @media (max-width: 767px) {
          .footer {
            padding-bottom: calc(var(--nav-height) + var(--safe-bottom) + 1.5rem);
          }
        }
        .footer-inner {
          text-align: center;
        }
        .name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .tagline {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        .socials {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .socials a {
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
        }
        .socials a:hover {
          color: var(--primary-light);
          transform: translateY(-2px);
        }
        .copy {
          color: var(--text-muted);
          font-size: 0.8rem;
        }
      `}</style>
    </footer>
  )
}
