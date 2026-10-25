import { useState } from 'react'
import { PROJECTS, FILTERS } from '../data.jsx'

export default function Portfolio() {
  const [f, setF] = useState('all')
  return (
    <section id="work"><div className="wrap">
      <h2 className="h2 rv">Our <span className="gt">portfolio</span></h2>
      <p className="sub rv">A selection of brands we've built and grown.</p>
      <div className="fl">{FILTERS.map(([k, l]) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{l}</button>)}</div>
      <div className="pg">
        {PROJECTS.map((p) => (
          <a key={p.n} href="#book" className={'pc' + (f !== 'all' && !p.t.includes(f) ? ' hd' : '')}
            style={{ '--a': p.a, '--b': p.b, ...(p.img && { '--img': `url(${p.img})` }) }}>
            <em>{p.m}</em><small>{p.k}</small><h3>{p.n}</h3><span>Start a similar project</span>
          </a>
        ))}
      </div>
    </div></section>
  )
}
