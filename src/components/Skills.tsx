const categories = [
  {
    title: 'Core Competencies',
    items: [
      'Independent Research & Information Verification',
      'Analytical Reasoning',
      'Written Precision',
      'Quality Review & Error Identification',
      'Evidence-Based Documentation',
      'Multi-Step Problem Analysis',
      'Attention to Detail',
      'Guideline Adherence',
      'Feedback Incorporation',
      'Self-Directed Work',
      'Technical Troubleshooting',
      'Data Accuracy & Reporting',
    ],
  },
  {
    title: 'Tools & Technologies',
    items: [
      'Google Workspace / Sheets / Forms',
      'Microsoft Excel',
      'Ticketing / Help-desk workflows',
      'Postman & REST APIs',
      'Git / GitHub',
      'HTML, CSS, JavaScript, TypeScript',
      'React, Next.js',
      'Node.js, Express',
      'Google Apps Script',
      'WordPress / Elementor',
      'Gmail, Slack, Zoom',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Tools</h2>
          <p>Research, quality review, and modern technical toolkit</p>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-card card">
              <h3>{cat.title}</h3>
              <div className="tags">
                {cat.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          gap: 1.25rem;
        }
        .skill-card {
          padding: 1.5rem;
        }
        .skill-card h3 {
          font-size: 1.1rem;
          color: var(--primary-light);
          margin-bottom: 1rem;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
