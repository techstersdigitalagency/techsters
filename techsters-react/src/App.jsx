import { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Offer from './components/Offer.jsx'
import Process from './components/Process.jsx'
import Portfolio from './components/Portfolio.jsx'
import Impact from './components/Impact.jsx'
import Clients from './components/Clients.jsx'
import Team from './components/Team.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Book from './components/Book.jsx'
import Footer from './components/Footer.jsx'
import { WHATSAPP } from './data.jsx'

export default function App() {
  const [pct, setPct] = useState(0)
  const glow = useRef(null)

  useEffect(() => {
    const onScroll = () => setPct((scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100)
    const onMove = (e) => glow.current && (glow.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`)
    addEventListener('scroll', onScroll, { passive: true })
    const fine = matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches
    fine ? addEventListener('mousemove', onMove) : glow.current && (glow.current.style.display = 'none')

    // fade-up reveal for every .rv element
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.15 })
    document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 90}ms`; io.observe(el) })

    return () => { removeEventListener('scroll', onScroll); removeEventListener('mousemove', onMove); io.disconnect() }
  }, [])

  return (
    <>
      <div id="pg" style={{ width: pct + '%' }} />
      <div id="cg" ref={glow} />
      <Header />
      <main>
        <Hero /><About /><Services /><Offer /><Process /><Portfolio />
        <Impact /><Clients /><Team /><Pricing /><Testimonials /><Faq /><Book />
      </main>
      <Footer />
      <a className="wa" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">💬<span>Need help? Chat with us</span></a>
    </>
  )
}
