import { ReactNode, useEffect, useRef, useState } from 'react'

interface MotionRevealProps {
  children: ReactNode
  className?: string
  /** Section id for in-page nav / scroll-spy (hash links). Applied to the outer wrapper so layout geometry is reliable. */
  id?: string
}

export default function MotionReveal({ children, className, id }: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id={id}
      ref={ref}
      className={['motion-reveal', isVisible ? 'motion-reveal--visible' : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
