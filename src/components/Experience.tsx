const jobs = [
  {
    role: 'Quality Assurance Engineer / Troubleshooting Officer',
    company: 'Credlock Nigeria Limited',
    period: '09/2026 – Present',
    points: [
      'Investigate engineering tickets, distinguish reported symptoms from verified findings, and identify missing information.',
      'Document reproduction steps, expected and actual outcomes, evidence, troubleshooting actions, and resolution status.',
      'Escalate evidence-backed defects to Software Engineering, follow up on fixes, and assist with validation.',
      'Identify recurring issues, check information consistency, and recommend documentation and process improvements.',
    ],
  },
  {
    role: 'Technical Support Officer – Customer Support',
    company: 'Credlock Nigeria Limited',
    period: '07/2026 – 09/2026',
    points: [
      'Investigated customer-reported technical issues and compared reported behaviour with expected workflows.',
      'Prepared clear escalations and communicated findings and resolution guidance to support colleagues and teams.',
    ],
  },
  {
    role: 'Collection Officer / Customer Support',
    company: 'Credlock Nigeria Limited',
    period: '01/2026 – 06/2026',
    points: [
      'Reviewed payment enquiries and account records, verified customer information, and maintained accurate case notes.',
      'Prepared operational summaries and handled sensitive financial information with confidentiality.',
    ],
  },
  {
    role: 'Client Support Specialist (SaaS)',
    company: 'Freelance',
    period: '01/2023 – Present',
    points: [
      'Managed support tickets, analysed reported issues, documented steps and outcomes, and quality-checked client-facing reports.',
      'Worked independently across support tasks and contributed to data accuracy and process improvements.',
    ],
  },
  {
    role: 'Data Engineering Intern',
    company: 'Transmission Company of Nigeria',
    period: '05/2023 – 04/2024',
    points: [
      'Cleaned and organised datasets, checked data consistency, and supported ad-hoc analysis and record keeping.',
    ],
  },
  {
    role: 'HR Business Partner',
    company: 'IT Explorer',
    period: '01/2019 – 12/2022',
    points: [
      'Maintained employee records and schedules, responded to enquiries, and coordinated training activities and documentation.',
    ],
  },
]

const certifications = [
  'Google Cybersecurity Professional Certificate — Google/Coursera (09/2026)',
  'Certified Professional in Project Management (CPPM-GAQM)',
  'Executive Diploma in Operations Management',
  'Professional Certificate in Office Administration Management',
  'Using AI for Customer Service Managers',
  'IT Deployments – Business & Technical Support Planning',
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Career</span>
          <h2>Experience</h2>
          <p>Professional roles, education & certifications</p>
        </div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <article key={i} className={`card job reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <time>{job.period}</time>
              </div>
              <ul>
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="bottom">
          <div className="card edu reveal">
            <h3>Education</h3>
            <p className="degree">B.Eng., Electrical &amp; Electronics Engineering</p>
            <p className="school">University of Ilorin · 2022</p>
          </div>
          <div className="card certs reveal reveal-delay-1">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .timeline {
          display: grid; gap: 1rem; margin-bottom: 1.75rem;
          position: relative;
        }
        .job {
          padding: 1.5rem 1.55rem;
          position: relative;
        }
        .job:hover { transform: translateY(-3px); }
        .head {
          display: flex; flex-wrap: wrap; justify-content: space-between;
          gap: 0.5rem 1rem; margin-bottom: 0.85rem;
        }
        .job h3 { font-size: 1.02rem; font-weight: 650; margin-bottom: 0.2rem; letter-spacing: -0.01em; }
        .company { color: var(--accent); font-size: 0.875rem; font-weight: 550; }
        time {
          font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;
          padding: 0.25rem 0.65rem; border-radius: 8px;
          background: rgba(255,255,255,0.03); border: 1px solid var(--border);
        }
        .job ul li {
          color: var(--text-secondary); font-size: 0.9rem; line-height: 1.55;
          padding: 0.3rem 0 0.3rem 1.1rem; position: relative;
        }
        .job ul li::before {
          content: ''; position: absolute; left: 0; top: 0.7rem;
          width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
        }
        .bottom { display: grid; gap: 1rem; }
        .edu, .certs { padding: 1.5rem 1.55rem; }
        .edu h3, .certs h3 {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 0.85rem;
        }
        .degree { font-weight: 650; margin-bottom: 0.25rem; }
        .school { color: var(--text-secondary); font-size: 0.9rem; }
        .certs ul li {
          color: var(--text-secondary); font-size: 0.875rem;
          padding: 0.45rem 0; border-bottom: 1px solid var(--border);
        }
        .certs ul li:last-child { border-bottom: none; }
        @media (min-width: 768px) {
          .bottom { grid-template-columns: 1fr 1.5fr; }
        }
      `}</style>
    </section>
  )
}
