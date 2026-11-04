import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi'
import type { SectionId } from '../App'

const items: { id: SectionId; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <FiHome size={20} /> },
  { id: 'about', label: 'About', icon: <FiUser size={20} /> },
  { id: 'skills', label: 'Skills', icon: <FiCode size={20} /> },
  { id: 'experience', label: 'Work', icon: <FiBriefcase size={20} /> },
  { id: 'contact', label: 'Contact', icon: <FiMail size={20} /> },
]

interface Props {
  active: SectionId
  onNavigate: (id: SectionId) => void
}

export default function BottomNav({ active, onNavigate }: Props) {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${active === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
          aria-label={item.label}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}

      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: calc(var(--nav-height) + var(--safe-bottom));
          padding-bottom: var(--safe-bottom);
          background: rgba(11, 17, 32, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 90;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          color: var(--text-muted);
          font-size: 0.65rem;
          font-weight: 500;
          padding: 0.4rem 0.6rem;
          border-radius: 12px;
          transition: color 0.2s, background 0.2s;
          min-width: 56px;
        }
        .nav-item.active {
          color: var(--primary-light);
        }
        .nav-item.active span {
          font-weight: 600;
        }
        @media (min-width: 768px) {
          .bottom-nav { display: none; }
        }
      `}</style>
    </nav>
  )
}
