import { OFFERS } from '../data.jsx'

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px')
  e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px')
}

export default function Offer() {
  return (
    <section id="offer"><div className="wrap">
      <h2 className="h2 rv">What we <span className="gt">offer</span></h2>
      <p className="sub rv">Everything a growing brand needs online, from one team.</p>
      <div className="og">
        {OFFERS.map((o) => <div key={o.t} className="oc rv" onMouseMove={spot}>{o.i}<h3>{o.t}</h3><p>{o.p}</p></div>)}
      </div>
    </div></section>
  )
}
