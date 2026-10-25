import { FAQS } from '../data.jsx'

export default function Faq() {
  return (
    <section id="faq"><div className="wrap">
      <h2 className="h2 rv">Questions, <span className="gt">answered</span></h2>
      <div className="fq rv">{FAQS.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </div></section>
  )
}
