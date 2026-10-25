import { useState } from 'react'
import { PRICING } from '../data.jsx'

export default function Pricing() {
  const [k, setK] = useState('web')
  return (
    <section id="pricing"><div className="wrap">
      <h2 className="h2 rv">Simple, clear <span className="gt">pricing</span></h2>
      <p className="sub rv">Pick a service to see our starting packages.</p>
      <div className="fl">{Object.entries(PRICING).map(([id, v]) => <button key={id} className={k === id ? 'on' : ''} onClick={() => setK(id)}>{v.label}</button>)}</div>
      <div className="pz" key={k}>
        {PRICING[k].plans.map(([name, price, unit, note, feats], i) => (
          <div key={name} className={'pk' + (i === 1 ? ' ft' : '')} style={{ animationDelay: i * 90 + 'ms' }}>
            <h3>{name}</h3>
            <div className="am">{price} <small>{unit}</small></div>
            <div className="nt">{note}</div>
            <ul>{feats.map((f) => <li key={f}>{f}</li>)}</ul>
            <a className={'btn' + (i === 1 ? ' b1' : '')} href="#book">Get started</a>
          </div>
        ))}
      </div>
      <p className="pn2">Prices are starting points. Your final quote depends on what your project needs.</p>
    </div></section>
  )
}
