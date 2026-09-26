import { useScrollReveal } from '@/hooks/useScrollReveal'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Precision',
    description:
      'Meticulous attention to measurement, fabrication tolerances, and installation detail at every stage.',
  },
  {
    number: '02',
    title: 'Quality',
    description:
      'Premium sourced materials, rigorous testing, and reliable workmanship on every commission.',
  },
  {
    number: '03',
    title: 'Experience',
    description:
      'Over a decade of professional expertise spanning residential, commercial, and architectural applications.',
  },
  {
    number: '04',
    title: 'Reliability',
    description:
      'Consistent on-schedule delivery and responsive project support from concept through to completion.',
  },
]

export default function WhyUsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section className="py-24 md:py-32 bg-[#171717]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div 
          ref={headerRef}
          className={`
            mb-20
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
              Our Values
            </span>
          </div>

          <h2 className="
            font-display
            text-[#F8F7F4]
            text-4xl
            md:text-5xl
            leading-[1.08]
          ">
            Built Around Quality
          </h2>
        </div>

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          divide-y
          sm:divide-y-0
          sm:divide-x
          divide-[#77736C]/15
        ">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              className={`
                px-0
                sm:px-8
                py-8
                sm:py-0
                first:pl-0
                last:pr-0
                group
                transition-all duration-700
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="
                font-display
                text-[#B39A70]/30
                text-5xl
                mb-6
                group-hover:text-[#B39A70]/60
                transition-colors
                duration-300
              ">
                {principle.number}
              </div>

              <div className="
                w-6
                h-px
                bg-[#B39A70]
                mb-5
                transition-all
                duration-500
                group-hover:w-12
              " />

              <h3 className="
                text-[#F8F7F4]
                text-base
                tracking-[0.18em]
                uppercase
                mb-4
                font-medium
              ">
                {principle.title}
              </h3>

              <p className="
                text-[#77736C]
                text-sm
                leading-relaxed
              ">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}