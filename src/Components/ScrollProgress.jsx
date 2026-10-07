import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0

      setScrollProgress(Math.min(progress, 100))
      setIsVisible(window.scrollY > 280)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
  }

  return (
    <button
      className={`scroll-progress${isVisible ? ' scroll-progress-visible' : ''}`}
      type="button"
      onClick={scrollToTop}
      aria-label={`Scroll to top; page is ${Math.round(scrollProgress)}% scrolled`}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg className="scroll-progress-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="scroll-progress-track" cx="24" cy="24" r="21" />
        <circle
          className="scroll-progress-value"
          cx="24"
          cy="24"
          r="21"
          pathLength="100"
          style={{ strokeDashoffset: 100 - scrollProgress }}
        />
      </svg>
      <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
    </button>
  )
}

export default ScrollProgress
