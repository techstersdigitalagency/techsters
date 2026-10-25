import { useEffect } from 'react'

export default function Lightbox({ items, index, onClose, onIndex }) {
  const n = items.length
  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % n)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + n) % n)
    }
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [index, n, onClose, onIndex])
  const it = items[index]
  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lbx" aria-label="Close" onClick={onClose}>&times;</button>
      <button className="lbn l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + n) % n) }}>&larr;</button>
      <figure key={index} onClick={(e) => e.stopPropagation()}>
        <img src={it.src} alt={it.cap || ''} />
        <figcaption>{it.cap} <span>{index + 1} / {n}</span></figcaption>
      </figure>
      <button className="lbn r" aria-label="Next" onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % n) }}>&rarr;</button>
    </div>
  )
}
