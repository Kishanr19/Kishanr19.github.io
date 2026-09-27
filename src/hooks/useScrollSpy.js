import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently most "in view"
 * for driving an active nav-link indicator.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))

    // Near-bottom-of-page fallback: the last section may never satisfy the
    // -50% bottom margin above if there isn't enough room left to scroll
    // past it, so the observer alone can leave an earlier link stuck active.
    const lastId = ids[ids.length - 1]
    function handleScroll() {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (scrolledToBottom && lastId) {
        setActiveId(lastId)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ids])

  return activeId
}
