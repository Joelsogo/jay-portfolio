import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'QA Ticket Investigation System',
    desc: 'Structured investigation workflows for engineering tickets: reproduction steps, evidence capture, defect escalation, and resolution tracking at Credlock.',
    tags: ['QA', 'Documentation', 'Process'],
    type: 'Professional',
  },
  {
    title: 'Personal Portfolio (React)',
    desc: 'Mobile-first professional portfolio built with React, TypeScript, and Vite. Designed for recruiters and evaluation specialist applications.',
    tags: ['React', 'TypeScript', 'Vite'],
    type: 'Open source',
    github: 'https://github.com/Joelsogo/jay-portfolio',
  },
  {
    title: 'Task Manager',
    desc: 'Web-based task management interface for organising work items, priorities, and status tracking.',
    tags: ['HTML', 'JavaScript', 'UI'],
    type: 'Open source',
    github: 'https://github.com/Joelsogo/Task-manager',
  },
  {
    title: 'Junior Frontend Take-Home',
    desc: 'Completed take-home assignment demonstrating frontend implementation, component structure, and attention to requirements.',
    tags: ['JavaScript', 'Frontend'],
    type: 'Assignment',
    github: 'https://github.com/Joelsogo/Junior-Frontend-Take-Home-Assignment',
  },
  {
    title: 'Weather App',
    desc: 'Client-side weather interface consuming external APIs, with responsive layout and clear data presentation.',
    tags: ['CSS', 'API', 'UI'],
    type: 'Open source',
    github: 'https://github.com/Joelsogo/weather-app',
  },
  {
    title: 'Ecommerce UI',
    desc: 'Product listing and storefront layout focused on clean structure, responsive design, and usable navigation.',
    tags: ['CSS', 'HTML', 'UI'],
    type: 'Open source',
    github: 'https://github.com/Joelsogo/Ecommerce',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Selected work</span>
          <h2>Projects</h2>
          <p>Professional workflows and selected technical work</p>
        </div>

        <div className="grid">
          {projects.map((p, i) => (
            <article key={p.title} className={`card project reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="top">
                <span className="type">{p.type}</span>
                <div className="links">
                  {p.github && (
                    <>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub size={16} />
                      </a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="Open">
                        <FiExternalLink size={16} />
                      </a>
                    </>
                  )}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .grid {
          display: grid; gap: 1.15rem;
          grid-template-columns: 1fr;
        }
        .project {
          padding: 1.5rem 1.5rem;
          display: flex; flex-direction: column;
        }
        .project:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
        }
        .top {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 0.75rem;
        }
        .type {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--text-muted);
        }
        .links { display: flex; gap: 0.7rem; }
        .links a {
          color: var(--text-muted);
          width: 32px; height: 32px; border-radius: 9px;
          display: grid; place-items: center;
          transition: color 0.2s, background 0.2s;
        }
        .links a:hover {
          color: var(--accent);
          background: var(--accent-dim);
        }
        .project h3 {
          font-size: 1.05rem; font-weight: 650; margin-bottom: 0.5rem;
          letter-spacing: -0.015em;
        }
        .project p {
          color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;
          margin-bottom: 1rem; flex: 1;
        }
        .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        @media (min-width: 640px) {
          .grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 960px) {
          .grid { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
