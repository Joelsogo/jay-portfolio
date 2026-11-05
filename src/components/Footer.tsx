import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="inner">
          <div className="brand">
            <span className="mark">J</span>
            <p className="name">Joel Oluwasogo</p>
          </div>
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
          padding: 2.5rem 0 calc(1.75rem + var(--safe-bottom));
          background: rgba(5, 8, 15, 0.8);
          margin-top: auto;
        }
        @media (max-width: 899px) {
          .footer { padding-bottom: calc(var(--nav-h) + var(--safe-bottom) + 1.5rem); }
        }
        .inner { text-align: center; }
        .brand {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .mark {
          width: 28px; height: 28px; border-radius: 8px;
          background: linear-gradient(135deg, #2dd4bf, #0d9488);
          color: #042f2e; font-weight: 800; font-size: 0.85rem;
          display: grid; place-items: center;
        }
        .name { font-weight: 700; font-size: 1rem; }
        .tag { color: var(--text-muted); font-size: 0.8rem; margin-bottom: 1.15rem; }
        .links {
          display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .links a {
          width: 40px; height: 40px; border-radius: 12px;
          display: grid; place-items: center;
          color: var(--text-muted);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .links a:hover {
          color: var(--accent);
          border-color: var(--border-hover);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }
        .copy { color: var(--text-muted); font-size: 0.75rem; }
      `}</style>
    </footer>
  )
}
