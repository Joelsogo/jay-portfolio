export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Research • Quality Assurance • Analytical Writing</p>
        </div>

        <div className="about-grid">
          <div className="about-text card">
            <p>
              Analytical engineering graduate with hands-on experience in quality assurance,
              technical investigation, customer issue analysis, operational reporting, and
              structured documentation.
            </p>
            <p>
              Skilled at breaking down complex issues, verifying information for accuracy,
              recording evidence and findings, and communicating clear explanations. Holds a
              B.Eng. in Electrical & Electronics Engineering and a Google Cybersecurity
              Professional Certificate.
            </p>
            <p>
              Interested in applying research, critical thinking, and written precision to
              evaluating AI-generated outputs and producing reliable, well-supported evaluation
              content.
            </p>
          </div>

          <div className="about-side">
            <div className="info-card card">
              <h3>Current Focus</h3>
              <ul>
                <li>Quality Assurance & Ticket Investigation</li>
                <li>Evidence-based Documentation</li>
                <li>Process & Documentation Improvement</li>
                <li>AI Output Evaluation & Research</li>
              </ul>
            </div>
            <div className="info-card card">
              <h3>Location & Contact</h3>
              <p>Ilorin, Nigeria</p>
              <p>08164651948</p>
              <p>joeloluwasogo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          gap: 1.25rem;
        }
        .about-text {
          padding: 1.5rem;
        }
        .about-text p {
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-size: 0.98rem;
        }
        .about-text p:last-child {
          margin-bottom: 0;
        }
        .about-side {
          display: grid;
          gap: 1rem;
        }
        .info-card {
          padding: 1.35rem;
        }
        .info-card h3 {
          font-size: 1rem;
          color: var(--primary-light);
          margin-bottom: 0.75rem;
        }
        .info-card ul {
          list-style: none;
        }
        .info-card li {
          color: var(--text-muted);
          font-size: 0.9rem;
          padding: 0.3rem 0;
          padding-left: 1rem;
          position: relative;
        }
        .info-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .info-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0.35rem;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1.6fr 1fr;
            align-items: start;
          }
        }
      `}</style>
    </section>
  )
}
