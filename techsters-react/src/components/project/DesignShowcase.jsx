import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

export default function DesignShowcase({ p }) {
  const [open, setOpen] = useState(null), [copied, setCopied] = useState('')
  const items = p.pieces.map(([t, c], i) => ({ src: `/projects/${p.slug}/piece-${i + 1}.svg`, cap: `${t}: ${c}` }))
  const copy = (h) => { navigator.clipboard?.writeText(h); setCopied(h); setTimeout(() => setCopied(''), 1400) }
  return (
    <section className="pj-sec"><div className="wrap">
      <h2 className="h2 rv">The <span className="gt">design work</span></h2>
      <p className="sub rv">Click any piece to view it full size.</p>
      <div className="pj-mas">
        {items.map((it, i) => (
          <button key={i} className="rv" onClick={() => setOpen(i)} aria-label={`Open ${it.cap}`}>
            <img src={it.src} alt={it.cap} loading="lazy" /><span className="cap">{it.cap}</span>
          </button>
        ))}
      </div>

      <h3 className="pj-h3 rv">Colour palette <small>Click a colour to copy it</small></h3>
      <div className="pj-pal rv">
        {p.palette.map(([n, h]) => <button key={h} style={{ background: h, color: h === '#fff3e6' ? '#0c0f1d' : '#fff' }} onClick={() => copy(h)}><span>{n}</span>{copied === h ? 'Copied!' : h}</button>)}
      </div>

      <h3 className="pj-h3 rv">Typography</h3>
      <div className="pj-ty rv">
        {p.fonts.map(([n, fam, use]) => <div key={n}><span style={{ fontFamily: `'${fam}', sans-serif` }}>Aa</span><div><b>{n}</b><small>{use}</small><p style={{ fontFamily: `'${fam}', sans-serif` }}>ABCDEFGHIJKLM abcdefghijklm 0123456789</p></div></div>)}
      </div>
      {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </div></section>
  )
}
