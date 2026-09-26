import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section className="py-24 md:py-32 bg-[#171717]" ref={ref}>
      <div className="
        max-w-[1440px]
        mx-auto
        px-6
        md:px-10
        text-center
      ">
        <div className={`
          max-w-xl mx-auto
          transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}>

          <div className="
            flex
            items-center
            justify-center
            gap-4
            mb-8
          ">
            <div className="w-8 h-px bg-[#B39A70]" />

            <span className="
              text-[#B39A70]
              text-[9px]
              tracking-[0.42em]
              uppercase
            ">
              Let's Begin
            </span>

            <div className="w-8 h-px bg-[#B39A70]" />
          </div>

          <h2 className="
            font-display
            text-[#F8F7F4]
            text-4xl
            md:text-5xl
            lg:text-[56px]
            leading-[1.08]
            mb-6
          ">
            Let's Build Something
            <br />
            <em>Exceptional.</em>
          </h2>

          <p className="
            text-[#77736C]
            text-sm
            md:text-base
            leading-relaxed
            mb-12
          ">
            Have a project in mind? Talk to our team
            about the right glass solution for your space.
          </p>

          <div className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
          ">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#B39A70]
                text-[#171717]
                text-[10px]
                tracking-[0.25em]
                uppercase
                px-10
                py-4
                hover:bg-[#F8F7F4]
                transition-all
                duration-300
                font-medium
                hover:shadow-xl
                hover:shadow-[#B39A70]/30
                active:scale-95
              "
            >
              Request a Quote
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                border
                border-[#77736C]/40
                text-[#F8F7F4]
                text-[10px]
                tracking-[0.25em]
                uppercase
                px-10
                py-4
                hover:border-[#B39A70]
                hover:text-[#B39A70]
                hover:bg-[#B39A70]/10
                transition-all
                duration-300
                active:scale-95
              "
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}