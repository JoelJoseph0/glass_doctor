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
        bg-gradient-to-br from-[#B39A70] to-[#9d865e]
        text-[#171717]
        flex
        items-center
        justify-center
        shadow-2xl
        shadow-[#B39A70]/40
        transition-all
        duration-500
        hover:shadow-3xl
        hover:shadow-[#B39A70]/60
        hover:scale-110
        active:scale-95
        border-2
        border-[#F8F7F4]/20
        backdrop-blur-sm
        group
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Back to top"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/30 blur-xl transition-all duration-300 rounded-full" />
      
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="transform rotate-180 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10"
      >
        <path
          d="M10 4V16M10 16L4 10M10 16L16 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Rotating border on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-[#F8F7F4]/0 group-hover:border-[#F8F7F4]/40 group-hover:rotate-180 transition-all duration-700" />
    </button>
  )
}
