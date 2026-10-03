import { useState, useEffect } from 'react'
import ArrowRight from '@/components/common/ArrowRight'
import { useParallax } from '@/hooks/useParallax'
import LazyImage from '@/components/common/LazyImage'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const parallaxOffset = useParallax(0.3)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="
        relative
        h-screen
        min-h-[680px]
        flex items-end
        overflow-hidden
        bg-[#171717]
      "
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-0 -left-20 w-96 h-96 bg-[#B39A70]/30 rounded-full blur-[120px] animate-pulse"
          style={{
            animationDuration: '4s',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-[#E8E4DC]/20 rounded-full blur-[140px] animate-pulse"
          style={{
            animationDuration: '5s',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
      </div>

      <LazyImage
        src={`${import.meta.env.BASE_URL}ProductsImage/img19.jpg`}
        alt="Modern glass facade"
        className={`
          absolute inset-0
          w-full h-full
          object-cover
          transition-all duration-1000
          ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}
        `}
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${isLoaded ? 1 : 1.1})`
        }}
      />

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/60 via-[#171717]/30 to-[#171717]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#B39A70]/10 via-transparent to-transparent" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#B39A70]/40 rounded-full animate-pulse"
          style={{
            animationDuration: '3s',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        <div 
          className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#E8E4DC]/30 rounded-full animate-pulse"
          style={{
            animationDuration: '4s',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#B39A70]/50 rounded-full animate-pulse"
          style={{
            animationDuration: '5s',
            animationDelay: '0.5s',
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div 
          className={`
            flex items-center gap-4 mb-7
            transition-all duration-1000 delay-300
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="w-10 h-px bg-gradient-to-r from-[#B39A70] to-transparent" />

          <div className="relative">
            <span className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase font-medium">
              Est. 2025
            </span>
            <div className="absolute -inset-2 bg-[#B39A70]/5 blur-xl -z-10" />
          </div>
        </div>

        <h1 className={`
          font-display
          text-[#F8F7F4]
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-[88px]
          leading-[0.92]
          tracking-[-0.01em]
          mb-8
          max-w-3xl
          transition-all duration-1000 delay-500
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <span className="inline-block hover:text-[#E8E4DC] transition-colors duration-500">
            Excellence
          </span>
          <br />

          <em className="italic text-[#E8E4DC] inline-block hover:text-[#B39A70] transition-colors duration-500">
            Through
          </em>

          <br />

          <span className="inline-block hover:text-[#E8E4DC] transition-colors duration-500">
            Transparency
          </span>
          
          {/* Decorative accent */}
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#B39A70] via-[#E8E4DC]/50 to-transparent" />
        </h1>

        <p className={`
          text-[#E8E4DC]
          text-sm
          md:text-base
          leading-relaxed
          max-w-sm
          mb-12
          transition-all duration-1000 delay-700
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          Precision glass and architectural solutions for residential,
          commercial, and architectural projects across the UAE.
        </p>

        <div 
          className={`
            flex flex-col sm:flex-row gap-4
            transition-all duration-1000 delay-900
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <a
            href="#products"
            className="
              relative
              inline-flex
              items-center
              gap-3
              bg-[#B39A70]
              text-[#171717]
              text-[10px]
              tracking-[0.25em]
              uppercase
              px-8 py-4
              overflow-hidden
              transition-all
              duration-300
              font-medium
              active:scale-95
              group
              before:absolute
              before:inset-0
              before:bg-gradient-to-r
              before:from-[#F8F7F4]
              before:to-[#E8E4DC]
              before:translate-x-[-100%]
              before:transition-transform
              before:duration-500
              hover:before:translate-x-0
              hover:shadow-2xl
              hover:shadow-[#B39A70]/40
            "
          >
            <span className="relative z-10">Explore Our Solutions</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight />
            </span>
          </a>

          <a
            href="#contact"
            className="
              relative
              inline-flex
              items-center
              gap-3
              border-2
              border-[#F8F7F4]/35
              text-[#F8F7F4]
              text-[10px]
              tracking-[0.25em]
              uppercase
              px-8 py-4
              backdrop-blur-sm
              bg-[#171717]/20
              overflow-hidden
              transition-all
              duration-300
              active:scale-95
              group
              hover:border-[#B39A70]
              hover:text-[#B39A70]
              hover:bg-[#B39A70]/10
              hover:shadow-lg
              hover:shadow-[#B39A70]/20
              before:absolute
              before:inset-0
              before:bg-gradient-to-r
              before:from-[#B39A70]/10
              before:to-transparent
              before:translate-x-[-100%]
              before:transition-transform
              before:duration-500
              hover:before:translate-x-0
            "
          >
            <span className="relative z-10">Get a Quote</span>
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="
        absolute
        bottom-8
        right-8
        md:right-12
        hidden md:flex
        flex-col
        items-center
        gap-3
        animate-in fade-in slide-in-from-bottom-4 duration-1000
      " style={{ animationDelay: '1000ms' }}>
        <span
          className="
            text-[#E8E4DC]
            text-[8px]
            tracking-[0.38em]
            uppercase
            font-medium
          "
          style={{
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>

        <div className="relative">
          <div className="
            w-px h-14
            bg-gradient-to-b
            from-[#B39A70]
            via-[#B39A70]/50
            to-transparent
          " />
          <div className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-1 h-3
            bg-[#B39A70]
            rounded-full
            animate-bounce
          " />
        </div>
      </div>
    </section>
  )
}