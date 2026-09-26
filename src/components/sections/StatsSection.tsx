import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'

const STATS = [
  {
    value: '1+',
    label: 'Year of Excellence',
    numericValue: 1,
  },
  {
    value: '150+',
    label: 'Projects Completed',
    numericValue: 150,
  },
  {
    value: '100%',
    label: 'Quality Focused',
    numericValue: 100,
  },
  {
    value: '20+',
    label: 'UAE Clients Served',
    numericValue: 20,
  },
]

function StatItem({ stat, index, isVisible }: { stat: typeof STATS[0], index: number, isVisible: boolean }) {
  const count = useCountUp(stat.numericValue, 2000, isVisible)
  
  return (
    <div
      className={`
        py-14
        px-6
        md:px-8
        text-center
        transition-all
        duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="
        font-display
        text-[#171717]
        text-5xl
        md:text-6xl
        mb-3
        leading-none
      ">
        {isVisible ? (stat.value.includes('%') ? `${count}%` : `${count}+`) : '0'}
      </div>

      <div className="
        text-[#77736C]
        text-[9px]
        tracking-[0.25em]
        uppercase
        leading-relaxed
      ">
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section className="bg-[#E8E4DC]" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          divide-x
          divide-[#77736C]/20
        ">
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}