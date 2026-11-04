const groups = [
  {
    title: 'Core competencies',
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
    title: 'Tools & technologies',
    items: [
      'Google Workspace, Sheets, Forms',
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
        <div className="section-header">
          <span className="label">Capabilities</span>
          <h2>Skills & tools</h2>
          <p>Research, quality review, and modern technical toolkit</p>
        </div>

        <div className="grid">
          {groups.map((g) => (
            <div key={g.title} className="card group">
              <h3>{g.title}</h3>
              <div className="tags">
                {g.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .grid { display: grid; gap: 1.25rem; }
        .group { padding: 1.5rem; }
        .group h3 {
          font-size: 0.9rem; font-weight: 600; color: var(--text);
          margin-bottom: 1rem;
        }
        .tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        @media (min-width: 640px) {
          .grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
