import { useState, useEffect } from 'react'
import ArrowRight from '@/components/common/ArrowRight'
import { useParallax } from '@/hooks/useParallax'
import LazyImage from '@/components/common/LazyImage'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const parallaxOffset = useParallax(0.3)

  useEffect(() => {
    setIsLoaded(true)
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
      <LazyImage
        src="/ProductsImage/img19.jpg"
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

      <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/55 via-transparent to-[#171717]/85" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/40 to-transparent" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div 
          className={`
            flex items-center gap-4 mb-7
            transition-all duration-1000 delay-300
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="w-10 h-px bg-[#B39A70]" />

          <span className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase">
            Est. 2025
          </span>
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
          Excellence
          <br />

          <em className="italic text-[#E8E4DC]">
            Through
          </em>

          <br />

          Transparency
        </h1>

        <p className={`
          text-[#77736C]
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
              inline-flex
              items-center
              gap-3
              bg-[#B39A70]
              text-[#171717]
              text-[10px]
              tracking-[0.25em]
              uppercase
              px-8 py-4
              hover:bg-[#F8F7F4]
              transition-all
              duration-300
              font-medium
              hover:shadow-xl
              hover:shadow-[#B39A70]/30
              active:scale-95
              group
            "
          >
            Explore Our Solutions
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight />
            </span>
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              border
              border-[#F8F7F4]/35
              text-[#F8F7F4]
              text-[10px]
              tracking-[0.25em]
              uppercase
              px-8 py-4
              hover:border-[#B39A70]
              hover:text-[#B39A70]
              hover:bg-[#B39A70]/10
              transition-all
              duration-300
              active:scale-95
            "
          >
            Get a Quote
          </a>
        </div>
      </div>

      <div className="
        absolute
        bottom-8
        right-8
        md:right-12
        hidden md:flex
        flex-col
        items-center
        gap-3
        animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000
      ">
        <span
          className="
            text-[#77736C]
            text-[8px]
            tracking-[0.38em]
            uppercase
          "
          style={{
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>

        <div className="
          w-px h-14
          bg-gradient-to-b
          from-[#B39A70]
          to-transparent
          animate-pulse
        " />
      </div>
    </section>
  )
}