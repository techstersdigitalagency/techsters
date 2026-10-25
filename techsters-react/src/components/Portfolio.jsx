import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, FILTERS } from '../projects.js'

export default function Portfolio() {
  const [f, setF] = useState('all')
  return (
    <section id="work"><div className="wrap">
      <h2 className="h2 rv">Our <span className="gt">portfolio</span></h2>
      <p className="sub rv">Open any project to see the full case study.</p>
      <div className="fl">{FILTERS.map(([k, l]) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{l}</button>)}</div>
      <div className="pg">
        {PROJECTS.map((p) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className={'pc' + (f !== 'all' && p.kind !== f ? ' hd' : '')}
            style={{ '--a': p.a, '--b': p.b, '--img': `url(${p.cover})` }}>
            <small>{p.tag}</small><h3>{p.title}</h3><span>View case study &rarr;</span>
          </Link>
        ))}
      </div>
    </div></section>
  )
}
