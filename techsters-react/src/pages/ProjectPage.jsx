import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PROJECTS } from '../projects.js'
import Tilt from '../components/project/Tilt.jsx'
import WebShowcase from '../components/project/WebShowcase.jsx'
import DesignShowcase from '../components/project/DesignShowcase.jsx'
import SocialShowcase from '../components/project/SocialShowcase.jsx'
import { Story, Results, Pager, Cta } from '../components/project/Parts.jsx'
import '../project.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const p = PROJECTS.find((x) => x.slug === slug)
  return p ? <ProjectView key={slug} p={p} /> : <Navigate to="/" replace />
}

function ProjectView({ p }) {
  const n = PROJECTS.length, i = PROJECTS.indexOf(p)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    document.title = `${p.title} | Techsters`
    const sc = () => setPct((scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100)
    addEventListener('scroll', sc, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.pj .rv').forEach((el, k) => { el.style.transitionDelay = (k % 3) * 80 + 'ms'; io.observe(el) })
    return () => { removeEventListener('scroll', sc); io.disconnect() }
  }, [p])

  const words = p.title.split(' ')
  const strip = [...p.services, ...p.tools]
  return (
    <div className="pj" style={{ '--a': p.a, '--b': p.b }}>
      <div id="pg" style={{ width: pct + '%' }} />
      <header id="hd" className="s"><div className="wrap nv">
        <Link to="/" className="lg" aria-label="Techsters home">
          <img src="/techsters-logo.png" alt="Techsters logo" />
          <span>Techsters</span>
        </Link>
        <Link to="/#book" className="btn b1" style={{ padding: '11px 22px' }}>Book consultation</Link>
      </div></header>

      <section className="pj-hero"><div className="wrap">
        <Link to="/#work" className="pj-back">&larr; All work</Link><span className="pj-kind">{p.tag} · {p.year}</span>
        <h1 className="pj-title">{words.map((w, k) => <span className="pj-w" key={k} style={{ '--i': k }}><span className={k === words.length - 1 ? 'gt' : ''}>{w}</span></span>)}</h1>
        <p className="pj-tag">{p.tagline}</p>
        <div className="pj-meta">
          <div><small>Client</small><b>{p.title}</b></div><div><small>Year</small><b>{p.year}</b></div>
          <div><small>Services</small><b>{p.services.join(', ')}</b></div><div><small>Tools</small><b>{p.tools.join(', ')}</b></div>
        </div>
        <div className="cta">
          {p.live && <a className="btn b1" href={p.live} target="_blank" rel="noopener noreferrer">Visit live site &#8599;</a>}
          <Link className={'btn' + (p.live ? '' : ' b1')} to="/#book">Start a similar project</Link>
        </div>
        <div className="pj-cover"><Tilt><img src={p.cover} alt={`${p.title} preview`} /></Tilt></div>
      </div></section>

      <div className="mq pj-strip"><div className="tr">{[...strip, ...strip, ...strip, ...strip].map((s, k) => <span key={k}>{s}</span>)}</div></div>

      <Story p={p} />
      {p.kind === 'web' && <WebShowcase p={p} />}
      {p.kind === 'design' && <DesignShowcase p={p} />}
      {p.kind === 'social' && <SocialShowcase p={p} />}
      <Results p={p} />
      <Pager prev={PROJECTS[(i - 1 + n) % n]} next={PROJECTS[(i + 1) % n]} />
      <Cta />
      <footer><div className="wrap"><div className="cp" style={{ border: 0, margin: 0, padding: 0 }}><span>&copy; {new Date().getFullYear()} Techsters. All rights reserved.</span><Link to="/">Back to home</Link></div></div></footer>
    </div>
  )
}
