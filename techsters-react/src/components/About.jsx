import { useEffect, useRef, useState } from 'react'

const TEXT = 'Techsters is a digital studio that designs websites, shapes brands and trains people. We help businesses look credible, get found and grow online, and we teach the skills behind it.'
const WORDS = TEXT.split(' ')
const PILLARS = [
  ['Design-led', 'Every page, logo and post is built to look sharp and feel like your brand.'],
  ['Built to convert', 'Clear structure and fast pages that turn visitors into customers.'],
  ['Skills you keep', 'Our training leaves your team able to run it without us.'],
]

export default function About() {
  const ref = useRef(null)
  const [lit, setLit] = useState(0)
  useEffect(() => {
    const f = () => {
      const r = ref.current.getBoundingClientRect()
      const p = Math.min(Math.max((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35), 0), 1)
      setLit(Math.round(p * WORDS.length))
    }
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])

  return (
    <section id="about"><div className="wrap">
      <h2 className="h2 rv">About us</h2>
      <p className="sta" ref={ref}>{WORDS.map((w, i) => <span key={i}><span className={'w' + (i < lit ? ' l' : '')}>{w}</span> </span>)}</p>
      <div className="pil rv">{PILLARS.map(([t, p]) => <div key={t}><b>{t}</b><p>{p}</p></div>)}</div>
    </div></section>
  )
}
