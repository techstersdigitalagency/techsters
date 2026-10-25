import { TEAM } from '../data.jsx'

export default function Team() {
  return (
    <section id="team"><div className="wrap">
      <h2 className="h2 rv">Meet the <span className="gt">team</span></h2>
      <p className="sub rv">The designers, developers and strategists behind your brand.</p>
      <div className="tm">
        {TEAM.map((m, i) => (
          <div key={i} className="mb rv" tabIndex={0} style={{ '--a': m.a, '--b': m.c, ...(m.img && { '--img': `url(${m.img})` }) }}>
            <div className="fc">{m.n.split(' ').map((w) => w[0]).join('').slice(0, 2)}<p>{m.b}</p></div>
            <div className="mi"><b>{m.n}</b><small>{m.r}</small></div>
          </div>
        ))}
      </div>
    </div></section>
  )
}
