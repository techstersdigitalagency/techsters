import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data.jsx'

function Counter({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      if (matchMedia('(prefers-reduced-motion:reduce)').matches) return setN(to)
      let s = null
      const step = (t) => { s ??= t; const p = Math.min((t - s) / 1800, 1); setN(Math.round(to * (1 - (1 - p) ** 3))); if (p < 1) requestAnimationFrame(step) }
      requestAnimationFrame(step)
    }, { threshold: 0.6 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n}</span>
}

export default function Impact() {
  return (
    <section id="impact"><div className="wrap">
      <h2 className="h2 rv">Our <span className="gt">impact</span></h2>
      <p className="sub rv">Numbers that show the work behind the brands.</p>
      <div className="im rv">{STATS.map(([n, l]) => <div key={l}><b><Counter to={n} />+</b><p>{l}</p></div>)}</div>
    </div></section>
  )
}
