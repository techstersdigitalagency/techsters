import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null), [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      if (matchMedia('(prefers-reduced-motion:reduce)').matches) return setN(to)
      let s = null
      const step = (t) => { s ??= t; const k = Math.min((t - s) / 1600, 1); setN(Math.round(to * (1 - (1 - k) ** 3))); if (k < 1) requestAnimationFrame(step) }
      requestAnimationFrame(step)
    }, { threshold: 0.6 })
    io.observe(ref.current); return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n}{suffix}</span>
}

export function Story({ p }) {
  const tabs = [['Challenge', p.challenge], ['Solution', p.solution], ['Outcome', p.outcome]]
  const [i, setI] = useState(0)
  return (
    <section className="pj-sec"><div className="wrap pj-ov">
      <div><h2 className="h2 rv">The <span className="gt">story</span></h2><p className="pj-lead rv">{p.overview}</p></div>
      <div className="rv">
        <div className="fl" style={{ marginTop: 0 }}>{tabs.map(([t], n) => <button key={t} className={i === n ? 'on' : ''} onClick={() => setI(n)}>{t}</button>)}</div>
        <p className="pj-story" key={i}>{tabs[i][1]}</p>
      </div>
    </div></section>
  )
}

export function Results({ p }) {
  return (
    <section className="pj-sec"><div className="wrap">
      <h2 className="h2 rv">The <span className="gt">results</span></h2>
      <div className="im rv">{p.results.map(([n, s, l]) => <div key={l}><b><CountUp to={n} suffix={s} /></b><p>{l}</p></div>)}</div>
      <blockquote className="pj-q rv">“{p.quote[0]}”<cite>{p.quote[1]}</cite></blockquote>
    </div></section>
  )
}

export function Pager({ prev, next }) {
  const card = (x, label) => (
    <Link to={`/work/${x.slug}`} className="nx" style={{ '--img': `url(${x.cover})` }}>
      <small>{label}</small><b>{x.title}</b><span>{x.tag}</span>
    </Link>
  )
  return <section className="pj-sec"><div className="wrap pj-nx">{card(prev, '← Previous project')}{card(next, 'Next project →')}</div></section>
}

export function Cta() {
  return (
    <section className="pj-sec"><div className="wrap"><div className="pj-cta rv">
      <h2 className="h2">Want results <span className="gt">like this?</span></h2>
      <p className="sub">Tell us about your project and we'll show you how we'd approach it.</p>
      <div className="cta"><Link className="btn b1" to="/#book">Start your project</Link><Link className="btn" to="/#work">More work</Link></div>
    </div></div></section>
  )
}
