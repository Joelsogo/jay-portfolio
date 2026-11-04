import { FiHome, FiUser, FiCode, FiBriefcase, FiLayers, FiMail } from 'react-icons/fi'
import type { SectionId } from '../App'

const items: { id: SectionId; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <FiHome size={18} /> },
  { id: 'about', label: 'About', icon: <FiUser size={18} /> },
  { id: 'skills', label: 'Skills', icon: <FiCode size={18} /> },
  { id: 'experience', label: 'Work', icon: <FiBriefcase size={18} /> },
  { id: 'projects', label: 'Projects', icon: <FiLayers size={18} /> },
  { id: 'contact', label: 'Contact', icon: <FiMail size={18} /> },
]

interface Props {
  active: SectionId
  onNavigate: (id: SectionId) => void
}

export default function BottomNav({ active, onNavigate }: Props) {
  return (
    <nav className="bnav" aria-label="Mobile navigation">
      {items.map((item) => (
        <button
          key={item.id}
          className={`item ${active === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
          aria-label={item.label}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
      <style>{`
        .bnav {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
          height: calc(var(--nav-h) + var(--safe-bottom));
          padding-bottom: var(--safe-bottom);
          background: rgba(7, 11, 20, 0.92);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-around; align-items: center;
        }
        .item {
          display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
          color: var(--text-muted); font-size: 0.6rem; font-weight: 500;
          padding: 0.35rem 0.4rem; min-width: 48px; transition: color 0.15s;
        }
        .item.active { color: var(--accent); }
        .item.active span { font-weight: 600; }
        @media (min-width: 900px) { .bnav { display: none; } }
      `}</style>
    </nav>
  )
}
