export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="label">About</span>
          <h2>Profile</h2>
          <p>Research, quality assurance, and analytical writing</p>
        </div>

        <div className="grid">
          <div className="card body">
            <p>
              Analytical engineering graduate with experience in quality assurance, technical
              investigation, customer issue analysis, operational reporting, and structured
              documentation.
            </p>
            <p>
              Skilled at breaking down complex issues, checking information for accuracy,
              recording evidence and findings, and communicating clear explanations. Holds a
              B.Eng. in Electrical &amp; Electronics Engineering and a Google Cybersecurity
              Professional Certificate.
            </p>
            <p>
              Interested in applying research, critical thinking, and written precision to
              evaluating AI-generated outputs and producing reliable, well-supported evaluation
              content.
            </p>
          </div>

          <div className="side">
            <div className="card block">
              <h3>Current focus</h3>
              <ul>
                <li>Quality assurance &amp; ticket investigation</li>
                <li>Evidence-based documentation</li>
                <li>Process &amp; documentation improvement</li>
                <li>AI output evaluation &amp; research</li>
              </ul>
            </div>
            <div className="card block">
              <h3>Details</h3>
              <dl>
                <div><dt>Location</dt><dd>Ilorin, Nigeria</dd></div>
                <div><dt>Phone</dt><dd>08164651948</dd></div>
                <div><dt>Email</dt><dd>joeloluwasogo@gmail.com</dd></div>
                <div><dt>Education</dt><dd>B.Eng, University of Ilorin (2022)</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grid {
          display: grid; gap: 1.25rem;
        }
        .body { padding: 1.5rem 1.6rem; }
        .body p {
          color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;
          margin-bottom: 1rem;
        }
        .body p:last-child { margin-bottom: 0; }
        .side { display: grid; gap: 1rem; }
        .block { padding: 1.35rem 1.4rem; }
        .block h3 {
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 0.85rem;
        }
        .block ul li {
          color: var(--text-secondary); font-size: 0.9rem;
          padding: 0.3rem 0 0.3rem 1rem; position: relative;
        }
        .block ul li::before {
          content: ''; position: absolute; left: 0; top: 0.7rem;
          width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
        }
        dl > div {
          display: flex; justify-content: space-between; gap: 1rem;
          padding: 0.4rem 0; border-bottom: 1px solid var(--border);
          font-size: 0.875rem;
        }
        dl > div:last-child { border-bottom: none; }
        dt { color: var(--text-muted); }
        dd { color: var(--text-secondary); text-align: right; }
        @media (min-width: 768px) {
          .grid { grid-template-columns: 1.5fr 1fr; align-items: start; }
        }
      `}</style>
    </section>
  )
}
