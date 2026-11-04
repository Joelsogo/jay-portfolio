# Joel Oluwasogo — Portfolio

Professional, mobile-first portfolio for **Quality Assurance**, **Evaluation Specialist**, and research roles.

**Live stack:** React 18 · TypeScript · Vite 5 · react-icons

## Features

- Clean recruiter-friendly layout (Home, About, Skills, Experience, Projects, Contact)
- Mobile bottom navigation + sticky header
- LinkedIn & GitHub integrated
- Resume CTA → [LinkedIn profile](https://www.linkedin.com/in/joel-oluwasogo-563257179/)
- Contact form with Formspree (or mailto fallback)
- Projects showcase (professional + open source)

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build && npm run preview
```

## Contact form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a form and copy the form ID
3. In `src/components/Contact.tsx`, set:

```ts
const FORMSPREE_ID = 'your_form_id_here'
```

Until configured, the form opens the user's email client (mailto).

## Deploy

Connect this repo to **Vercel** or **Netlify** — works with zero config (`base: './'`).

---

**Joel Oluwasogo** · Ilorin, Nigeria · joeloluwasogo@gmail.com · 08164651948  
[LinkedIn](https://www.linkedin.com/in/joel-oluwasogo-563257179/) · [GitHub](https://github.com/Joelsogo)
