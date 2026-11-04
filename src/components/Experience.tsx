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

const education = {
  degree: 'B.Eng., Electrical & Electronics Engineering',
  school: 'University of Ilorin',
  year: '2022',
}

const certifications = [
  'Google Cybersecurity Professional Certificate (Google/Coursera) — 09/2026',
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
        <div className="section-title">
          <h2>Experience</h2>
          <p>Professional roles, education & certifications</p>
        </div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div key={i} className="job card">
              <div className="job-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="edu-certs">
          <div className="card edu">
            <h3>Education</h3>
            <p className="degree">{education.degree}</p>
            <p className="school">
              {education.school} · {education.year}
            </p>
          </div>
          <div className="card certs">
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
          display: grid;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .job {
          padding: 1.35rem;
        }
        .job-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }
        .job h3 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }
        .company {
          color: var(--primary-light);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .period {
          font-size: 0.8rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .job ul {
          list-style: none;
        }
        .job li {
          color: var(--text-muted);
          font-size: 0.9rem;
          padding: 0.3rem 0 0.3rem 1rem;
          position: relative;
          line-height: 1.5;
        }
        .job li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.75rem;
        }
        .edu-certs {
          display: grid;
          gap: 1rem;
        }
        .edu, .certs {
          padding: 1.35rem;
        }
        .edu h3, .certs h3 {
          font-size: 1.05rem;
          color: var(--primary-light);
          margin-bottom: 0.75rem;
        }
        .degree {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .school {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .certs ul {
          list-style: none;
        }
        .certs li {
          color: var(--text-muted);
          font-size: 0.88rem;
          padding: 0.35rem 0;
          border-bottom: 1px solid var(--border);
        }
        .certs li:last-child {
          border-bottom: none;
        }
        @media (min-width: 768px) {
          .edu-certs {
            grid-template-columns: 1fr 1.4fr;
          }
        }
      `}</style>
    </section>
  )
}
