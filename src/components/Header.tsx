import { useState } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import type { SectionId } from '../App'

const links: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

interface Props {
  active: SectionId
  onNavigate: (id: SectionId) => void
}

export default function Header({ active, onNavigate }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container inner">
        <button className="logo" onClick={() => onNavigate('home')} aria-label="Home">
          <span className="mark">J</span>
          <span className="name">Joel Oluwasogo</span>
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <button
              key={l.id}
              className={`link ${active === l.id ? 'active' : ''}`}
              onClick={() => { onNavigate(l.id); setOpen(false) }}
            >
              {l.label}
            </button>
          ))}
          <a
            className="btn btn-primary resume-btn"
            href="https://www.linkedin.com/in/joel-oluwasogo-563257179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload size={15} /> Resume
          </a>
        </nav>

        <button className="menu" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <style>{`
        .header {
          position: sticky; top: 0; z-index: 100;
          height: var(--header-h);
          background: rgba(7, 11, 20, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 100%;
        }
        .logo {
          display: flex; align-items: center; gap: 0.6rem;
        }
        .mark {
          width: 34px; height: 34px; border-radius: 9px;
          background: var(--accent); color: #042f2e;
          display: grid; place-items: center;
          font-weight: 800; font-size: 1rem;
        }
        .name { font-weight: 700; font-size: 0.95rem; letter-spacing: -0.02em; }
        .nav { display: none; align-items: center; gap: 0.15rem; }
        .link {
          padding: 0.4rem 0.75rem; border-radius: 8px;
          font-size: 0.85rem; font-weight: 500;
          color: var(--text-secondary); transition: all 0.15s;
        }
        .link:hover, .link.active {
          color: var(--text); background: rgba(255,255,255,0.04);
        }
        .link.active { color: var(--accent); }
        .resume-btn { margin-left: 0.5rem; padding: 0.45rem 1rem; font-size: 0.8rem; }
        .menu { display: flex; padding: 0.35rem; color: var(--text); }
        @media (min-width: 900px) {
          .nav { display: flex; }
          .menu { display: none; }
        }
        @media (max-width: 899px) {
          .nav.open {
            display: flex; flex-direction: column; align-items: stretch;
            position: absolute; top: var(--header-h); left: 0; right: 0;
            background: var(--bg); border-bottom: 1px solid var(--border);
            padding: 0.75rem 1.25rem 1.25rem; gap: 0.25rem;
            animation: down 0.2s ease;
          }
          .nav.open .link { text-align: left; padding: 0.7rem 0.85rem; }
          .nav.open .resume-btn { margin: 0.5rem 0 0; width: 100%; }
        }
        @keyframes down {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
