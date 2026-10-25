import { useState } from 'react'
import { SERVICES } from '../data.jsx'

export default function Services() {
  const [on, setOn] = useState(0)
  const hover = (i) => () => { if (matchMedia('(hover:hover)').matches && innerWidth > 960) setOn(i) }
  return (
    <section id="services"><div className="wrap">
      <h2 className="h2 rv">Our <span className="gt">services</span></h2>
      <p className="sub rv">Tap or hover a panel to open it.</p>
      <div className="ac rv">
        {SERVICES.map((s, i) => (
          <div key={s.t} className={'pn' + (on === i ? ' on' : '')} style={{ '--c1': s.c[0], '--c2': s.c[1] }} tabIndex={0}
            onClick={() => setOn(i)} onMouseEnter={hover(i)} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOn(i))}>
            <h3>{s.t}</h3>
            <div className="bo"><p>{s.p}</p>{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </div></section>
  )
}
