import { useEffect, useRef, useState } from 'react'
import { STEPS } from '../data.jsx'

export default function Process() {
  const ref = useRef(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => {
      const r = ref.current.getBoundingClientRect()
      setP(Math.min(Math.max((innerHeight * 0.75 - r.top) / (r.height + 40), 0), 1))
    }
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <section id="process"><div className="wrap">
      <h2 className="h2 rv">How we <span className="gt">work</span></h2>
      <p className="sub rv">A simple four-step path from first call to a brand that performs.</p>
      <div className="ps" ref={ref} style={{ '--p': p }}>
        {STEPS.map(([t, d], i) => <div key={t} className={p >= i / STEPS.length + 0.04 ? 'l' : ''}><i>{i + 1}</i><b>{t}</b><p>{d}</p></div>)}
      </div>
    </div></section>
  )
}
