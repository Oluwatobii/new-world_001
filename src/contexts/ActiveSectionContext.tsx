import { createContext, useLayoutEffect, useState, type ReactNode } from 'react'
import { menuList } from '@/components/Global/menuList'

const sectionIds = menuList.menu.map(menu => menu.path.replace('#', '')).filter(Boolean)

const HEADER_LINE = 100

const defaultPath = menuList.menu[0]?.path ?? '#home'

export const ActiveSectionContext = createContext<string>(defaultPath)

function computeActiveHash(): string {
  let activeId = sectionIds[0]
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const { top } = el.getBoundingClientRect()
    if (top <= HEADER_LINE) {
      activeId = id
    }
  }
  return `#${activeId}`
}

function addScrollListener(
  target: EventTarget | null | undefined,
  handler: EventListener,
  options: AddEventListenerOptions
) {
  if (!target || typeof (target as Node).addEventListener !== 'function') return
  target.addEventListener('scroll', handler, options)
}

function removeScrollListener(
  target: EventTarget | null | undefined,
  handler: EventListener,
  options: EventListenerOptions
) {
  if (!target || typeof (target as Node).removeEventListener !== 'function') return
  target.removeEventListener('scroll', handler, options)
}

/**
 * Must wrap the page so effects run after section nodes exist in the DOM.
 */
export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(defaultPath)

  useLayoutEffect(() => {
    let rafId = 0
    const schedule = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        setActive(computeActiveHash())
      })
    }

    const scrollOpts: AddEventListenerOptions = { passive: true, capture: true }
    const onScroll: EventListener = () => schedule()

    addScrollListener(window, onScroll, scrollOpts)
    addScrollListener(document, onScroll, scrollOpts)
    addScrollListener(document.documentElement, onScroll, scrollOpts)
    addScrollListener(document.body, onScroll, scrollOpts)
    addScrollListener(document.scrollingElement, onScroll, scrollOpts)
    addScrollListener(document.getElementById('root'), onScroll, scrollOpts)

    window.addEventListener('resize', schedule, { passive: true })
    const vv = window.visualViewport
    if (vv) {
      vv.addEventListener('scroll', schedule, { passive: true })
      vv.addEventListener('resize', schedule, { passive: true })
    }

    const io = new IntersectionObserver(schedule, {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1]
    })
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }

    setActive(computeActiveHash())
    requestAnimationFrame(() => setActive(computeActiveHash()))
    const t = window.setTimeout(() => setActive(computeActiveHash()), 400)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.clearTimeout(t)
      removeScrollListener(window, onScroll, scrollOpts)
      removeScrollListener(document, onScroll, scrollOpts)
      removeScrollListener(document.documentElement, onScroll, scrollOpts)
      removeScrollListener(document.body, onScroll, scrollOpts)
      removeScrollListener(document.scrollingElement, onScroll, scrollOpts)
      removeScrollListener(document.getElementById('root'), onScroll, scrollOpts)
      window.removeEventListener('resize', schedule)
      if (vv) {
        vv.removeEventListener('scroll', schedule)
        vv.removeEventListener('resize', schedule)
      }
      io.disconnect()
    }
  }, [])

  return <ActiveSectionContext.Provider value={active}>{children}</ActiveSectionContext.Provider>
}
