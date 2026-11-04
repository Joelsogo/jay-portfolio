import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import type { SectionId } from '../App'

const links: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
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
      <div className="container header-inner">
        <div className="logo" onClick={() => onNavigate('home')}>
          <span className="logo-mark">J</span>
          <span className="logo-text">Joel Oluwasogo</span>
        </div>

        <nav className={`desktop-nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(l.id)
                setOpen(false)
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11, 17, 32, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
          height: var(--header-height);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
        }
        .logo-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 1.1rem;
        }
        .logo-text {
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: -0.3px;
        }
        .desktop-nav {
          display: none;
          gap: 0.25rem;
        }
        .nav-link {
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-light);
          background: rgba(64, 145, 108, 0.12);
        }
        .menu-btn {
          display: flex;
          color: var(--text-light);
          padding: 0.35rem;
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex; }
          .menu-btn { display: none; }
        }
        @media (max-width: 767px) {
          .desktop-nav.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: var(--header-height);
            left: 0;
            right: 0;
            background: var(--bg-dark);
            border-bottom: 1px solid var(--border);
            padding: 1rem;
            gap: 0.35rem;
            animation: slideDown 0.25s ease;
          }
          .desktop-nav.open .nav-link {
            width: 100%;
            text-align: left;
            padding: 0.75rem 1rem;
          }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
