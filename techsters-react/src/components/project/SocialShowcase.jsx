import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

export default function SocialShowcase({ p }) {
  const [tab, setTab] = useState(0), [open, setOpen] = useState(null)
  const items = p.posts.map((src, i) => ({ src, cap: `Post ${i + 1}` }))
  return (
    <section className="pj-sec"><div className="wrap">
      <h2 className="h2 rv">The <span className="gt">content</span></h2>
      <p className="sub rv">Tap a post to enlarge it, or switch to stories.</p>
      <div className="fl">{['Feed', 'Stories'].map((l, i) => <button key={l} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>{l}</button>)}</div>

      <div className="pj-soc">
        {tab === 0 ? (
          <div className="ig rv" key="feed">
            <div className="igh"><div className="av2">{p.title[0]}</div><div><b>@{p.handle}</b><small>{p.platforms[0]}</small></div></div>
            <div className="igs">{p.stats.map(([n, l]) => <div key={l}><b>{n}</b><small>{l}</small></div>)}</div>
            <div className="igg">{items.map((it, i) => <button key={i} onClick={() => setOpen(i)} aria-label={it.cap}><img src={it.src} alt={it.cap} loading="lazy" /></button>)}</div>
          </div>
        ) : (
          <div className="stories" key="stories">{p.stories.map((s, i) => <div key={s} className="story"><img src={s} alt={`Story ${i + 1}`} /><i /></div>)}</div>
        )}

        <div className="pj-side">
          <h3 className="pj-h3">Content pillars</h3>
          {p.pillars.map(([n, v]) => (
            <div className="pil2 rv" key={n}><div><span>{n}</span><b>{v}%</b></div><u><i className="fill" style={{ width: v + '%' }} /></u></div>
          ))}
          <h3 className="pj-h3">Platforms</h3>
          <div className="chips">{p.platforms.map((x) => <span key={x}>{x}</span>)}</div>
        </div>
      </div>
      {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </div></section>
  )
}
