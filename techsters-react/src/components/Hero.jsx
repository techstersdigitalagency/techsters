import { useRef } from 'react'

export default function Hero() {
  const stage = useRef(null)
  const tilt = (e) => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    stage.current.style.setProperty('--ry', -14 + x * 16 + 'deg')
    stage.current.style.setProperty('--rx', 7 - y * 14 + 'deg')
  }
  const reset = () => { stage.current.style.setProperty('--ry', '-14deg'); stage.current.style.setProperty('--rx', '7deg') }

  return (
    <section id="home" onMouseMove={tilt} onMouseLeave={reset}>
      <div className="wrap hg">
        <div>
          <p className="hi"><i />Welcome to Techsters</p>
          <h1><span>Empowering brands</span><span className="gt">with digital solutions</span></h1>
          <p className="lead">We design websites, build brands and run marketing that make your business look credible and easy to find. We also train people to do the same.</p>
          <div className="cta"><a className="btn b1" href="#book">Book a free consultation</a><a className="btn" href="#work">See our work</a></div>
        </div>
        <div className="sw" aria-hidden="true">
          <div className="st" ref={stage}>
            <div className="gl" />
            <div className="cd br">
              <div className="bb"><i /><i /><i /><span>yourbrand.com.ng</span></div>
              <div className="si"><div className="ln" style={{ width: '70%' }} /><div className="ln" style={{ width: '48%' }} /><div className="ln s" /><span className="pl" /><div className="ti"><b /><b /><b /></div></div>
            </div>
            <div className="cd ph"><div className="sc"><div className="av" /><div className="bu" /><div className="bu b" /><div className="bu" />
              <div className="gr">{[30, 48, 40, 68, 88].map((h, i) => <u key={i} style={{ height: h + '%' }} />)}</div></div></div>
            <div className="cd bd"><div className="mo">Ab</div>
              <div className="sws"><i style={{ background: '#ff2e63' }} /><i style={{ background: '#7c3cff' }} /><i style={{ background: '#2dffb3' }} /></div>
              <div><b>Brand identity</b><small>Logo, colour, type</small></div></div>
            <span className="ch c1"><i />Web design</span><span className="ch c2"><i />Branding</span><span className="ch c3"><i />Social growth</span>
          </div>
        </div>
      </div>
    </section>
  )
}
