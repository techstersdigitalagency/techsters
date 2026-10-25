import { useEffect, useState } from 'react'
import { NAV } from '../data.jsx'

const MAP = { offer: 'services', process: 'services', impact: 'work', clients: 'work', voices: 'pricing', faq: 'pricing' }

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [cur, setCur] = useState('home')

  useEffect(() => {
    const f = () => {
      setScrolled(scrollY > 30)
      let c = 'home'
      document.querySelectorAll('main section').forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) c = s.id })
      setCur(MAP[c] || c)
    }
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])

  return (
    <header id="hd" className={scrolled ? 's' : ''}>
      <div className="wrap nv">
        <a href="#home" className="lg" aria-label="Techsters home">
          <svg viewBox="0 0 48 48">
            <defs><linearGradient id="lgx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff2e63" /><stop offset=".5" stopColor="#7c3cff" /><stop offset="1" stopColor="#2dffb3" /></linearGradient></defs>
            <path d="M24 3l18 10.5v21L24 45 6 34.5v-21z" fill="#0a0f1e" stroke="url(#lgx)" strokeWidth="2.5" />
            <text x="24" y="30" textAnchor="middle" fontFamily="Unbounded,sans-serif" fontWeight="800" fontSize="15" fill="#fff">TS</text>
          </svg>
          Techsters
        </a>
        <button id="mt" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>&#9776;</button>
        <nav className={'nl' + (open ? ' o' : '')}>
          {NAV.map(([id, label]) => (
            <a key={id} href={'#' + id} className={cur === id ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#book" className="btn b1" onClick={() => setOpen(false)}>Book consultation</a>
        </nav>
      </div>
    </header>
  )
}
