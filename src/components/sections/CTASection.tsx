import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#171717] via-[#1a1a1a] to-[#171717] relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B39A70]/30 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      
      <div className="
        max-w-[1440px]
        mx-auto
        px-6
        md:px-10
        text-center
        relative
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
            group
          ">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#B39A70] group-hover:w-12 transition-all duration-500" />

            <span className="
              text-[#B39A70]
              text-[9px]
              tracking-[0.42em]
              uppercase
              font-medium
              relative
            ">
              Let's Begin
              <span className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/20 blur-xl transition-all duration-300" />
            </span>

            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#B39A70] group-hover:w-12 transition-all duration-500" />
          </div>

          <h2 className="
            font-display
            text-[#F8F7F4]
            text-4xl
            md:text-5xl
            lg:text-[56px]
            leading-[1.08]
            mb-6
            group
          ">
            <span className="inline-block hover:text-[#E8E4DC] transition-colors duration-300">
              Let's Build Something
            </span>
            <br />
            <em className="inline-block hover:text-[#B39A70] transition-colors duration-300">Exceptional.</em>
            
            {/* Text glow */}
            <span className="absolute inset-0 text-[#B39A70] opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 pointer-events-none">
              Exceptional
            </span>
          </h2>

          <p className="
            text-[#E8E4DC]
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
                relative
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
                font-medium
                active:scale-95
                overflow-hidden
                group
                transition-all
                duration-300
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
              <span className="relative z-10">Request a Quote</span>
            </a>

            <a
              href="#contact"
              className="
                relative
                inline-flex
                items-center
                justify-center
                border-2
                border-[#B39A70]/40
                text-[#F8F7F4]
                text-[10px]
                tracking-[0.25em]
                uppercase
                px-10
                py-4
                backdrop-blur-sm
                overflow-hidden
                group
                transition-all
                duration-300
                active:scale-95
                hover:border-[#B39A70]
                hover:text-[#B39A70]
                hover:shadow-lg
                hover:shadow-[#B39A70]/20
                before:absolute
                before:inset-0
                before:bg-[#B39A70]/10
                before:translate-y-full
                before:transition-transform
                before:duration-300
                hover:before:translate-y-0
              "
            >
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}