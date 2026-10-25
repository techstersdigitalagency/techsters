import { useEffect, useState } from 'react'
import { QUOTES } from '../data.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const go = (n) => setI((n + QUOTES.length) % QUOTES.length)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const t = setTimeout(() => go(i + 1), 7000) // restarts whenever the slide changes
    return () => clearTimeout(t)
  }, [i])
  return (
    <section id="voices"><div className="wrap">
      <h2 className="h2 rv">What clients <span className="gt">say</span></h2>
      <div className="tv">
        {QUOTES.map(([q, who], n) => (
          <div key={n} className={'sl' + (n === i ? ' on' : '')}>
            <blockquote>“{q}”</blockquote>
            <cite><i /><span><b>Client name</b>{who}</span></cite>
          </div>
        ))}
      </div>
      <div className="ct">
        <button aria-label="Previous" onClick={() => go(i - 1)}>&larr;</button>
        <button aria-label="Next" onClick={() => go(i + 1)}>&rarr;</button>
        <div className="dt">{QUOTES.map((_, n) => <i key={n} className={n === i ? 'on' : ''} onClick={() => go(n)} />)}</div>
      </div>
    </div></section>
  )
}
