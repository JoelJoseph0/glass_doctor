import ArrowRight from '@/components/common/ArrowRight'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import LazyImage from '@/components/common/LazyImage'

export default function IntroSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#E8E4DC]/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#B39A70]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div 
            ref={imageRef}
            className={`
              relative
              transition-all
              duration-1000
              ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
          >
            {/* Decorative frame corners */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#B39A70] opacity-0 animate-in fade-in slide-in-from-top-4 duration-700 delay-300" style={{ animationFillMode: imageVisible ? 'forwards' : 'none' }} />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#B39A70] opacity-0 animate-in fade-in slide-in-from-top-4 duration-700 delay-400" style={{ animationFillMode: imageVisible ? 'forwards' : 'none' }} />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#B39A70] opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500" style={{ animationFillMode: imageVisible ? 'forwards' : 'none' }} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#B39A70] opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600" style={{ animationFillMode: imageVisible ? 'forwards' : 'none' }} />
            
            <div className="overflow-hidden relative group">
              {/* Image reveal overlay */}
              <div className={`
                absolute inset-0 bg-[#171717] z-10 transition-transform duration-1000 delay-200
                ${imageVisible ? 'translate-x-full' : 'translate-x-0'}
              `} />
              
              <LazyImage
                src={`${import.meta.env.BASE_URL}ProductsImage/img20.jpg`}
                alt="Modern glass interior"
                className="
                  w-full
                  h-[520px]
                  md:h-[680px]
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Enhanced decorative square */}
            <div className="
              absolute
              -bottom-5
              -right-5
              w-44
              h-44
              bg-gradient-to-br from-[#E8E4DC] to-[#D8D4CC]
              -z-10
              transform rotate-6
            " />

            {/* Enhanced experience badge */}
            <div className="
              absolute
              top-8
              -right-4
              md:-right-8
              bg-gradient-to-br from-[#171717] to-[#2a2a2a]
              px-6 py-5
              shadow-2xl
              shadow-[#171717]/40
              border border-[#B39A70]/20
              group
              hover:scale-105
              transition-all
              duration-300
            ">
              <div className="
                font-display
                text-[#B39A70]
                text-4xl
                leading-none
                group-hover:text-[#E8E4DC]
                transition-colors
                duration-300
              ">
                1+
              </div>

              <div className="
                text-[#E8E4DC]
                text-[9px]
                tracking-[0.25em]
                uppercase
                mt-1
              ">
                Years
              </div>
              
              {/* Badge glow */}
              <div className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/10 blur-xl transition-all duration-300 -z-10" />
            </div>
          </div>

          <div 
            ref={contentRef}
            className={`
              lg:pl-8
              transition-all
              duration-1000
              delay-200
              ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
          >
            <div className="flex items-center gap-4 mb-7 group">
              <div className="w-8 h-px bg-gradient-to-r from-[#B39A70] to-transparent" />

              <span className="
                text-[#B39A70]
                text-[9px]
                tracking-[0.42em]
                uppercase
                font-medium
                relative
              ">
                Who We Are
                <span className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/10 blur-xl transition-all duration-300 -z-10" />
              </span>
            </div>

            <h2 className="
              font-display
              text-[#171717]
              text-4xl
              md:text-5xl
              leading-[1.08]
              mb-8
              group
            ">
              <span className="inline-block hover:text-[#B39A70] transition-colors duration-300">
                Precision in Glass.
              </span>
              <br />
              <em className="inline-block hover:text-[#B39A70] transition-colors duration-300">
                Excellence in Every Detail
              </em>
              
              {/* Decorative line */}
              <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-[#B39A70] to-transparent" />
            </h2>

            <div className="space-y-5 mb-10">
              <p className="
                text-[#77736C]
                text-sm
                md:text-base
                leading-relaxed
                relative
                pl-4
                border-l-2
                border-[#B39A70]/20
                hover:border-[#B39A70]/60
                transition-all
                duration-300
              ">
                The Glass Doctor is a Sharjah-based glass and architectural
                solutions company serving clients across the UAE. We specialize
                in transforming glass and aluminum into sophisticated, functional,
                and durable solutions for residential, commercial, and architectural
                projects.
              </p>

              <p className="
                text-[#77736C]
                text-sm
                md:text-base
                leading-relaxed
                relative
                pl-4
                border-l-2
                border-[#E8E4DC]
                hover:border-[#B39A70]/60
                transition-all
                duration-300
              ">
                From precision glass tempering, bending, lamination, polishing and
                mitering to partitions, smart glass, frosting, sandblasting, back
                painting and acid etching, our expertise combines advanced technology
                with meticulous craftsmanship.
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                text-[#171717]
                text-[10px]
                tracking-[0.25em]
                uppercase
                border-b-2
                border-[#B39A70]
                pb-1
                hover:text-[#B39A70]
                hover:gap-4
                transition-all
                duration-300
                group
                relative
              "
            >
              Discover Our Story
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight />
              </span>
              
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B39A70] to-[#E8E4DC] group-hover:w-full transition-all duration-500" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}