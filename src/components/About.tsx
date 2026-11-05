export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">About</span>
          <h2>Profile</h2>
          <p>Research, quality assurance, and analytical writing</p>
        </div>

        <div className="grid">
          <div className="card body reveal reveal-delay-1">
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
            <div className="card block reveal reveal-delay-2">
              <h3>Current focus</h3>
              <ul>
                <li>Quality assurance &amp; ticket investigation</li>
                <li>Evidence-based documentation</li>
                <li>Process &amp; documentation improvement</li>
                <li>AI output evaluation &amp; research</li>
              </ul>
            </div>
            <div className="card block reveal reveal-delay-3">
              <h3>Details</h3>
              <dl>
                <div><dt>Location</dt><dd>Ilorin, Nigeria</dd></div>
                <div><dt>Phone</dt><dd>08164651948</dd></div>
                <div><dt>Email</dt><dd>joeloluwasogo@gmail.com</dd></div>
                <div><dt>Education</dt><dd>B.Eng, University of Ilorin</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grid { display: grid; gap: 1.25rem; }
        .body { padding: 1.75rem 1.75rem; }
        .body p {
          color: var(--text-secondary); font-size: 0.98rem; line-height: 1.75;
          margin-bottom: 1.1rem;
        }
        .body p:last-child { margin-bottom: 0; }
        .side { display: grid; gap: 1rem; }
        .block { padding: 1.5rem 1.5rem; }
        .block h3 {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 1rem;
        }
        .block ul li {
          color: var(--text-secondary); font-size: 0.9rem;
          padding: 0.4rem 0 0.4rem 1.15rem; position: relative;
        }
        .block ul li::before {
          content: ''; position: absolute; left: 0; top: 0.75rem;
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent-glow);
        }
        dl > div {
          display: flex; justify-content: space-between; gap: 1rem;
          padding: 0.5rem 0; border-bottom: 1px solid var(--border);
          font-size: 0.875rem;
        }
        dl > div:last-child { border-bottom: none; }
        dt { color: var(--text-muted); }
        dd { color: var(--text-secondary); text-align: right; font-weight: 500; }
        @media (min-width: 768px) {
          .grid { grid-template-columns: 1.55fr 1fr; align-items: start; }
        }
      `}</style>
    </section>
  )
}
