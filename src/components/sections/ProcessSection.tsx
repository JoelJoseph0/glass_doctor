import { useScrollReveal } from '@/hooks/useScrollReveal'

const STEPS = [
  {
    number: '01',
    name: 'Consultation',
    description:
      'Understanding your project brief and site requirements.',
  },
  {
    number: '02',
    name: 'Design & Selection',
    description:
      'Selecting the right glass solutions and technical specifications.',
  },
  {
    number: '03',
    name: 'Measurement',
    description:
      'Precise on-site measurement and detailed documentation.',
  },
  {
    number: '04',
    name: 'Fabrication',
    description:
      'Expert manufacturing to exact specifications.',
  },
  {
    number: '05',
    name: 'Installation',
    description:
      'Professional installation and post-handover support.',
  },
]

export default function ProcessSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#F8F7F4]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div 
          ref={headerRef}
          className={`
            mb-16
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#B39A70]" />

            <span className="
              text-[#B39A70]
              text-[9px]
              tracking-[0.42em]
              uppercase
            ">
              How We Work
            </span>
          </div>

          <h2 className="
            font-display
            text-[#171717]
            text-4xl
            md:text-5xl
            leading-[1.08]
          ">
            From Vision to Installation
          </h2>
        </div>

        <div className="relative">

          <div className="
            hidden
            lg:block
            absolute
            top-8
            left-14
            right-14
            h-px
            bg-[#77736C]/15
          " />

          <div className="
            grid
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-8
            lg:gap-4
          ">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`
                  relative
                  group
                  transition-all duration-700
                  hover:-translate-y-2
                  ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="
                  flex
                  items-center
                  gap-3
                  mb-6
                ">
                  <div className="relative">
                    <div className="
                      hidden
                      lg:block
                      w-4
                      h-4
                      border
                      border-[#B39A70]
                      rounded-full
                      bg-[#F8F7F4]
                      absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                    " />
                  </div>

                  <span className="
                    font-display
                    text-[#B39A70]
                    text-3xl
                    leading-none
                  ">
                    {step.number}
                  </span>
                </div>

                <div className="
                  w-5
                  h-px
                  bg-[#B39A70]
                  mb-4
                  transition-all
                  duration-500
                  group-hover:w-10
                " />

                <h3 className="
                  text-[#171717]
                  text-[10px]
                  tracking-[0.2em]
                  uppercase
                  mb-3
                  font-semibold
                ">
                  {step.name}
                </h3>

                <p className="
                  text-[#77736C]
                  text-sm
                  leading-relaxed
                ">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}