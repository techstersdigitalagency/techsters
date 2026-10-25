import { EMAIL } from '../data.jsx'

const COLS = [
  ['Explore', [['About', '#about'], ['Team', '#team'], ['Pricing', '#pricing'], ['Reviews', '#voices']]],
  ['Services', [['Web design', '#services'], ['Graphic design', '#services'], ['Marketing', '#services'], ['Training', '#services']]],
  ['Connect', [['Instagram', '#'], ['Twitter / X', '#'], ['Telegram', '#'], [EMAIL, 'mailto:' + EMAIL]]],
]

export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="fg">
        <div><a href="#home" className="lg">Techsters</a><p style={{ marginTop: 14, maxWidth: '24em' }}>Web design, graphic design, digital marketing and digital skills training for brands that want to grow.</p></div>
        {COLS.map(([h, ls]) => <div key={h}><h3>{h}</h3><ul>{ls.map(([l, href]) => <li key={l}><a href={href}>{l}</a></li>)}</ul></div>)}
      </div>
      <div className="cp"><span>&copy; {new Date().getFullYear()} Techsters. All rights reserved.</span><span>Made in Nigeria</span></div>
    </div></footer>
  )
}
