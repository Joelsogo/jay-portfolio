import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    // Simple client-side feedback (no backend)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Open to evaluation, QA, research, and support roles</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form card" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can I help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }}>
              <FiSend /> {sent ? 'Message noted!' : 'Send Message'}
            </button>
            {sent && (
              <p className="success">Thanks! I'll get back to you soon via email.</p>
            )}
          </form>

          <div className="contact-info">
            <a href="mailto:joeloluwasogo@gmail.com" className="info-item card">
              <div className="icon"><FiMail size={20} /></div>
              <div>
                <strong>Email</strong>
                <span>joeloluwasogo@gmail.com</span>
              </div>
            </a>
            <a href="tel:+2348164651948" className="info-item card">
              <div className="icon"><FiPhone size={20} /></div>
              <div>
                <strong>Phone / WhatsApp</strong>
                <span>08164651948</span>
              </div>
            </a>
            <div className="info-item card">
              <div className="icon"><FiMapPin size={20} /></div>
              <div>
                <strong>Location</strong>
                <span>Ilorin, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          gap: 1.25rem;
        }
        .contact-form {
          padding: 1.5rem;
        }
        .field {
          margin-bottom: 1rem;
        }
        .field label {
          display: block;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        .field input,
        .field textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--bg-dark);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          color: var(--text-light);
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .field input:focus,
        .field textarea:focus {
          outline: none;
          border-color: var(--primary-light);
        }
        .success {
          margin-top: 0.75rem;
          color: var(--primary-light);
          font-size: 0.9rem;
          text-align: center;
        }
        .contact-info {
          display: grid;
          gap: 0.85rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.15rem;
        }
        .info-item .icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--primary);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .info-item strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
        }
        .info-item span {
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1.2fr 1fr;
            align-items: start;
          }
        }
      `}</style>
    </section>
  )
}
