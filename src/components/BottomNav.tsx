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
          <span className="icon-wrap">{item.icon}</span>
          <span className="label">{item.label}</span>
        </button>
      ))}
      <style>{`
        .bnav {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
          height: calc(var(--nav-h) + var(--safe-bottom));
          padding-bottom: var(--safe-bottom);
          background: rgba(5, 8, 15, 0.9);
          backdrop-filter: blur(24px) saturate(1.3);
          -webkit-backdrop-filter: blur(24px) saturate(1.3);
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-around; align-items: center;
          box-shadow: 0 -8px 32px rgba(0,0,0,0.3);
        }
        .item {
          display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
          color: var(--text-muted); font-size: 0.58rem; font-weight: 500;
          padding: 0.4rem 0.35rem; min-width: 48px;
          transition: color 0.2s;
          position: relative;
        }
        .icon-wrap {
          display: grid; place-items: center;
          width: 36px; height: 28px; border-radius: 10px;
          transition: background 0.25s, color 0.25s, transform 0.25s var(--ease);
        }
        .item.active { color: var(--accent); }
        .item.active .icon-wrap {
          background: var(--accent-dim);
          transform: translateY(-2px);
        }
        .item.active .label { font-weight: 650; }
        @media (min-width: 900px) { .bnav { display: none; } }
      `}</style>
    </nav>
  )
}
