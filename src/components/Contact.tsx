import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'

/**
 * Formspree setup:
 * 1. Create a free account at https://formspree.io
 * 2. Create a new form and copy the form ID
 * 3. Replace FORMSPREE_ID below with your ID (e.g. "xbjvqjgp")
 */
const FORMSPREE_ID = 'YOUR_FORM_ID' // ← replace with your Formspree form ID

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      // Fallback: open mail client until Formspree is configured
      const data = new FormData(form)
      const name = data.get('name')
      const email = data.get('email')
      const message = data.get('message')
      window.location.href = `mailto:joeloluwasogo@gmail.com?subject=Portfolio contact from ${name}&body=${encodeURIComponent(String(message))}%0A%0AFrom: ${email}`
      setStatus('ok')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="label">Contact</span>
          <h2>Get in touch</h2>
          <p>Open to QA, evaluation, research, and support roles</p>
        </div>

        <div className="grid">
          <form className="card form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="How can I help?" required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%' }}>
              <FiSend size={15} />
              {status === 'sending' ? 'Sending…' : status === 'ok' ? 'Sent — thank you' : 'Send message'}
            </button>
            {status === 'error' && (
              <p className="msg err">Something went wrong. Please email me directly.</p>
            )}
            {status === 'ok' && (
              <p className="msg ok">Thanks — I'll reply as soon as possible.</p>
            )}
          </form>

          <div className="info">
            <a href="mailto:joeloluwasogo@gmail.com" className="card row">
              <span className="icon"><FiMail size={18} /></span>
              <div>
                <strong>Email</strong>
                <span>joeloluwasogo@gmail.com</span>
              </div>
            </a>
            <a href="tel:+2348164651948" className="card row">
              <span className="icon"><FiPhone size={18} /></span>
              <div>
                <strong>Phone / WhatsApp</strong>
                <span>08164651948</span>
              </div>
            </a>
            <div className="card row">
              <span className="icon"><FiMapPin size={18} /></span>
              <div>
                <strong>Location</strong>
                <span>Ilorin, Nigeria</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/joel-oluwasogo-563257179/"
              target="_blank"
              rel="noopener noreferrer"
              className="card row"
            >
              <span className="icon"><FiLinkedin size={18} /></span>
              <div>
                <strong>LinkedIn</strong>
                <span>joel-oluwasogo</span>
              </div>
            </a>
            <a
              href="https://github.com/Joelsogo"
              target="_blank"
              rel="noopener noreferrer"
              className="card row"
            >
              <span className="icon"><FiGithub size={18} /></span>
              <div>
                <strong>GitHub</strong>
                <span>github.com/Joelsogo</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .grid { display: grid; gap: 1.25rem; }
        .form { padding: 1.5rem; }
        .field { margin-bottom: 1rem; }
        .field label {
          display: block; font-size: 0.8rem; font-weight: 500;
          color: var(--text-secondary); margin-bottom: 0.35rem;
        }
        .field input, .field textarea {
          width: 100%; padding: 0.7rem 0.9rem;
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 10px; color: var(--text); font-family: inherit;
          font-size: 0.9rem; transition: border-color 0.15s;
        }
        .field input:focus, .field textarea:focus {
          outline: none; border-color: var(--accent);
        }
        .msg { margin-top: 0.75rem; font-size: 0.85rem; text-align: center; }
        .msg.ok { color: var(--accent); }
        .msg.err { color: #f87171; }
        .info { display: grid; gap: 0.75rem; }
        .row {
          display: flex; align-items: center; gap: 0.9rem;
          padding: 0.95rem 1.1rem;
        }
        .row:hover { border-color: var(--accent-border); }
        .icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--accent-dim); color: var(--accent);
          display: grid; place-items: center; flex-shrink: 0;
        }
        .row strong { display: block; font-size: 0.85rem; margin-bottom: 0.1rem; }
        .row span:last-child { color: var(--text-muted); font-size: 0.8rem; }
        @media (min-width: 768px) {
          .grid { grid-template-columns: 1.15fr 1fr; align-items: start; }
        }
      `}</style>
    </section>
  )
}
