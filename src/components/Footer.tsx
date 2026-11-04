import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="inner">
          <p className="name">Joel Oluwasogo</p>
          <p className="tag">Quality Assurance · Evaluation Specialist · Research</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/joel-oluwasogo-563257179/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="https://github.com/Joelsogo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="mailto:joeloluwasogo@gmail.com" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
          <p className="copy">© {new Date().getFullYear()} Joel Oluwasogo. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 2rem 0 calc(1.5rem + var(--safe-bottom));
          background: #05080f; margin-top: auto;
        }
        @media (max-width: 899px) {
          .footer { padding-bottom: calc(var(--nav-h) + var(--safe-bottom) + 1.25rem); }
        }
        .inner { text-align: center; }
        .name { font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem; }
        .tag { color: var(--text-muted); font-size: 0.8rem; margin-bottom: 1rem; }
        .links {
          display: flex; justify-content: center; gap: 1.25rem; margin-bottom: 1.15rem;
        }
        .links a { color: var(--text-muted); transition: color 0.15s; }
        .links a:hover { color: var(--accent); }
        .copy { color: var(--text-muted); font-size: 0.75rem; }
      `}</style>
    </footer>
  )
}
