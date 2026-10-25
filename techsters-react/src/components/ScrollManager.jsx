import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on new pages, or to the #section when the link has a hash (e.g. /#work).
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
      return () => clearTimeout(t)
    }
    scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}
