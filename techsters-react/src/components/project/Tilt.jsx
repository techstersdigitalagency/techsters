export default function Tilt({ children, max = 7 }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5, s = e.currentTarget.style
    s.setProperty('--ry', x * max + 'deg'); s.setProperty('--rx', -y * max + 'deg')
    s.setProperty('--gx', (x + 0.5) * 100 + '%'); s.setProperty('--gy', (y + 0.5) * 100 + '%')
  }
  const leave = (e) => { e.currentTarget.style.setProperty('--ry', '0deg'); e.currentTarget.style.setProperty('--rx', '0deg') }
  return <div className="tl" onMouseMove={move} onMouseLeave={leave}>{children}</div>
}
