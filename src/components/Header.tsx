import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
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
            <FiDownload size={14} /> Resume
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
          background: rgba(5, 8, 15, 0.55);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
        }
        .header.scrolled {
          background: rgba(5, 8, 15, 0.85);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }
        .inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 100%;
        }
        .logo {
          display: flex; align-items: center; gap: 0.65rem;
          transition: opacity 0.2s;
        }
        .logo:hover { opacity: 0.9; }
        .mark {
          width: 36px; height: 36px; border-radius: 11px;
          background: linear-gradient(135deg, #2dd4bf, #0d9488);
          color: #042f2e;
          display: grid; place-items: center;
          font-weight: 800; font-size: 1rem;
          box-shadow: 0 4px 14px rgba(45, 212, 191, 0.3);
        }
        .name { font-weight: 700; font-size: 0.95rem; letter-spacing: -0.02em; }
        .nav { display: none; align-items: center; gap: 0.1rem; }
        .link {
          padding: 0.45rem 0.85rem; border-radius: 10px;
          font-size: 0.84rem; font-weight: 500;
          color: var(--text-secondary); transition: all 0.2s var(--ease);
        }
        .link:hover {
          color: var(--text); background: rgba(255,255,255,0.04);
        }
        .link.active {
          color: var(--accent);
          background: var(--accent-dim);
        }
        .resume-btn { margin-left: 0.6rem; padding: 0.5rem 1.1rem; font-size: 0.8rem; }
        .menu { display: flex; padding: 0.4rem; color: var(--text); border-radius: 10px; }
        .menu:hover { background: rgba(255,255,255,0.05); }
        @media (min-width: 900px) {
          .nav { display: flex; }
          .menu { display: none; }
        }
        @media (max-width: 899px) {
          .nav.open {
            display: flex; flex-direction: column; align-items: stretch;
            position: absolute; top: var(--header-h); left: 0; right: 0;
            background: rgba(5, 8, 15, 0.96);
            backdrop-filter: blur(24px);
            border-bottom: 1px solid var(--border);
            padding: 0.85rem 1.35rem 1.35rem; gap: 0.3rem;
            animation: slideDown 0.3s var(--ease);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          }
          .nav.open .link { text-align: left; padding: 0.8rem 1rem; font-size: 0.95rem; }
          .nav.open .resume-btn { margin: 0.6rem 0 0; width: 100%; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
