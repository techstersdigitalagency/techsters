import { useEffect, useRef, useState } from 'react'

// Screenshot inside a device frame. Hover (or tap) to scroll through the full-length page.
function Scroller({ src, alt }) {
  const box = useRef(null), img = useRef(null)
  const [d, setD] = useState(0), [on, setOn] = useState(false)
  const measure = () => img.current && box.current && setD(Math.max(img.current.offsetHeight - box.current.offsetHeight, 0))
  useEffect(() => { measure(); addEventListener('resize', measure); return () => removeEventListener('resize', measure) }, [src])
  return (
    <div ref={box} className="vp" onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)} onClick={() => setOn(!on)}>
      <img ref={img} src={src} alt={alt} onLoad={measure}
        style={{ transform: `translateY(${on ? -d : 0}px)`, transition: `transform ${on ? Math.max(d / 90, 2) : 0.8}s ${on ? 'linear' : 'ease'}` }} />
      <span className="hint">{on ? 'Scrolling…' : 'Hover to scroll'}</span>
    </div>
  )
}

const MODES = ['Desktop', 'Mobile', 'Responsive']
const tick = <svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" /></svg>

export default function WebShowcase({ p }) {
  const [m, setM] = useState(0), [d, setD] = useState(0), [mb, setMb] = useState(0)
  const mode = ['desktop', 'mobile', 'both'][m]
  const spot = (e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px') }
  return (
    <section className="pj-sec"><div className="wrap">
      <h2 className="h2 rv">See it on <span className="gt">every screen</span></h2>
      <p className="sub rv">Switch devices, then hover a screen to scroll through the page.</p>
      <div className="pj-seg rv" style={{ '--i': m }}><i />{MODES.map((l, i) => <button key={l} className={m === i ? 'on' : ''} onClick={() => setM(i)}>{l}</button>)}</div>

      <div className="pj-stage" data-m={mode}>
        <div className="bwin" key={'d' + mode}>
          <div className="bb"><i /><i /><i /><span>{p.slug}.com.ng</span></div>
          <Scroller src={p.desktop[d]} alt={`${p.title} desktop screen ${d + 1}`} />
        </div>
        <div className="phn" key={'m' + mode}><Scroller src={p.mobile[mb]} alt={`${p.title} mobile screen ${mb + 1}`} /></div>
      </div>

      <div className="pj-ths">
        {mode !== 'mobile' && <div className="pj-th"><small>Desktop</small>{p.desktop.map((s, i) => <button key={s} className={d === i ? 'on' : ''} onClick={() => setD(i)}><img src={s} alt="" /></button>)}</div>}
        {mode !== 'desktop' && <div className="pj-th"><small>Mobile</small>{p.mobile.map((s, i) => <button key={s} className={'m' + (mb === i ? ' on' : '')} onClick={() => setMb(i)}><img src={s} alt="" /></button>)}</div>}
      </div>

      <h3 className="pj-h3 rv">Key features</h3>
      <div className="og">{p.features.map(([t, s]) => <div key={t} className="oc rv" onMouseMove={spot}>{tick}<h3>{t}</h3><p>{s}</p></div>)}</div>
    </div></section>
  )
}
