import { useState, useEffect } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'contact'

function App() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActive(id)
    }
  }

  return (
    <>
      <Header active={active} onNavigate={scrollTo} />
      <main>
        <Home onNavigate={scrollTo} />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BottomNav active={active} onNavigate={scrollTo} />
    </>
  )
}

export default App
