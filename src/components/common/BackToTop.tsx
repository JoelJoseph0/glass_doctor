import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-8
        right-8
        z-40
        w-12
        h-12
        bg-[#B39A70]
        text-[#171717]
        flex
        items-center
        justify-center
        shadow-xl
        shadow-[#171717]/20
        transition-all
        duration-500
        hover:bg-[#F8F7F4]
        hover:shadow-2xl
        hover:shadow-[#B39A70]/30
        active:scale-90
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Back to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="transform rotate-180"
      >
        <path
          d="M10 4V16M10 16L4 10M10 16L16 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
