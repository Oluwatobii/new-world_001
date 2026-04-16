export function scrollToMenuHash(path: string) {
  const id = path.replace(/^#/, '')
  const el = document.getElementById(id)
  if (!el) return
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
}
