import { useState } from 'react'
import { WHATSAPP } from '../data.jsx'

export default function Book() {
  const [msg, setMsg] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const text = `Hello Techsters, I am ${f.n} (${f.e}). I am interested in: ${f.s}. ${f.m}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank')
    setMsg('Opening WhatsApp with your details...')
  }
  return (
    <section id="book"><div className="wrap"><div className="bk rv">
      <div>
        <h2 className="h2">Let's build your <span className="gt">next brand move</span></h2>
        <p className="sub">Tell us about your business and what you want to achieve. We'll reply with clear next steps.</p>
        <ul><li>Free consultation, no pressure</li><li>Honest advice on what you need</li><li>A clear plan and timeline</li></ul>
      </div>
      <form onSubmit={submit}>
        <input name="n" placeholder="Your name" required aria-label="Your name" />
        <input name="e" type="email" placeholder="Email address" required aria-label="Email" />
        <select name="s" aria-label="Service"><option>Web design &amp; development</option><option>Graphic design</option><option>Digital marketing</option><option>Digital skills training</option></select>
        <textarea name="m" placeholder="Tell us about your project" aria-label="Project details" />
        <button className="btn b1" type="submit">Send via WhatsApp</button>
        <p id="ok" role="status">{msg}</p>
      </form>
    </div></div></section>
  )
}
