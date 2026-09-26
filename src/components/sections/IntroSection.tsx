import ArrowRight from '@/components/common/ArrowRight'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import LazyImage from '@/components/common/LazyImage'

export default function IntroSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#F8F7F4]"
    >
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
            <div className="overflow-hidden">
              <LazyImage
                src="/ProductsImage/img20.jpg"
                alt="Modern glass interior"
                className="
                  w-full
                  h-[520px]
                  md:h-[680px]
                  object-cover
                  hover:scale-[1.03]
                  transition-transform
                  duration-700
                "
              />
            </div>

            <div className="
              absolute
              -bottom-5
              -right-5
              w-44
              h-44
              bg-[#E8E4DC]
              -z-10
            " />

            <div className="
              absolute
              top-8
              -right-4
              md:-right-8
              bg-[#171717]
              px-6 py-5
            ">
              <div className="
                font-display
                text-[#B39A70]
                text-4xl
                leading-none
              ">
                10+
              </div>

              <div className="
                text-[#77736C]
                text-[9px]
                tracking-[0.25em]
                uppercase
                mt-1
              ">
                Years
              </div>
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
            <div className="flex items-center gap-4 mb-7">
              <div className="w-8 h-px bg-[#B39A70]" />

              <span className="
                text-[#B39A70]
                text-[9px]
                tracking-[0.42em]
                uppercase
              ">
                Who We Are
              </span>
            </div>

            <h2 className="
              font-display
              text-[#171717]
              text-4xl
              md:text-5xl
              leading-[1.08]
              mb-8
            ">
              Precision in Glass.
              <br />
              <em>Excellence in Every Detail</em>
            </h2>

            <p className="
              text-[#77736C]
              text-sm
              md:text-base
              leading-relaxed
              mb-5
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
              mb-10
            ">
              From precision glass tempering, bending, lamination, polishing and
              mitering to partitions, smart glass, frosting, sandblasting, back
              painting and acid etching, our expertise combines advanced technology
              with meticulous craftsmanship.
            </p>

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
                border-b
                border-[#B39A70]
                pb-1
                hover:text-[#B39A70]
                transition-colors
                duration-300
              "
            >
              Discover Our Story
              <ArrowRight />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}