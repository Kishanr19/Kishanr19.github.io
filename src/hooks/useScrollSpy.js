import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids the user has scrolled to, for
 * driving an active nav-link indicator. Picks the last section whose top
 * has crossed a fixed offset below the viewport top (accounting for the
 * sticky navbar), which is more reliable at page edges and when two
 * sections are visible at once than an IntersectionObserver threshold.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const OFFSET = 90 // px below viewport top (clears the sticky navbar); matches each section's scroll-mt-20
    let ticking = false

    function compute() {
      ticking = false

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActiveId(elements[elements.length - 1].id)
        return
      }

      let current = elements[0].id
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = el.id
        }
      }
      setActiveId(current)
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(compute)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    compute()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return activeId
}
