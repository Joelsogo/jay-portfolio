import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'

const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
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
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Contact</span>
          <h2>Get in touch</h2>
          <p>Open to QA, evaluation, research, and support roles</p>
        </div>

        <div className="grid">
          <form className="card form reveal" onSubmit={handleSubmit}>
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
            {status === 'error' && <p className="msg err">Something went wrong. Please email me directly.</p>}
            {status === 'ok' && <p className="msg ok">Thanks — I'll reply as soon as possible.</p>}
          </form>

          <div className="info">
            {[
              { href: 'mailto:joeloluwasogo@gmail.com', icon: <FiMail size={18} />, label: 'Email', value: 'joeloluwasogo@gmail.com' },
              { href: 'tel:+2348164651948', icon: <FiPhone size={18} />, label: 'Phone / WhatsApp', value: '08164651948' },
              { href: undefined, icon: <FiMapPin size={18} />, label: 'Location', value: 'Ilorin, Nigeria' },
              { href: 'https://www.linkedin.com/in/joel-oluwasogo-563257179/', icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'joel-oluwasogo' },
              { href: 'https://github.com/Joelsogo', icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/Joelsogo' },
            ].map((item, i) => {
              const content = (
                <>
                  <span className="icon">{item.icon}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </>
              )
              const cls = `card row reveal reveal-delay-${Math.min(i + 1, 4)}`
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className={cls}>{content}</div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .grid { display: grid; gap: 1.35rem; }
        .form { padding: 1.65rem; }
        .field { margin-bottom: 1.1rem; }
        .field label {
          display: block; font-size: 0.78rem; font-weight: 550;
          color: var(--text-secondary); margin-bottom: 0.4rem;
        }
        .field input, .field textarea {
          width: 100%; padding: 0.8rem 1rem;
          background: rgba(5, 8, 15, 0.6); border: 1px solid var(--border);
          border-radius: 12px; color: var(--text); font-family: inherit;
          font-size: 0.9rem; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field input:focus, .field textarea:focus {
          outline: none; border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-dim);
        }
        .msg { margin-top: 0.85rem; font-size: 0.85rem; text-align: center; }
        .msg.ok { color: var(--accent); }
        .msg.err { color: #f87171; }
        .info { display: grid; gap: 0.8rem; }
        .row {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.15rem;
        }
        .row:hover { transform: translateX(3px); }
        .icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: var(--accent-dim); color: var(--accent);
          display: grid; place-items: center; flex-shrink: 0;
          border: 1px solid rgba(45, 212, 191, 0.15);
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
