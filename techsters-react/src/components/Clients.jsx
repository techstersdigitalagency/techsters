import { CLIENTS } from '../data.jsx'

export default function Clients() {
  return (
    <section id="clients"><div className="wrap">
      <h2 className="h2 rv">Brands that <span className="gt">trust us</span></h2>
      <div className="mq"><div className="tr">{[...CLIENTS, ...CLIENTS].map((c, i) => <span key={i}>{c}</span>)}</div></div>
    </div></section>
  )
}
