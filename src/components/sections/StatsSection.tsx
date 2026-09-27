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
        relative
        group
        hover:bg-gradient-to-b hover:from-[#F8F7F4] hover:to-transparent
        transition-all
        duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/5 blur-2xl transition-all duration-500 -z-10" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#B39A70] to-[#E8E4DC] group-hover:w-20 transition-all duration-500" />
      
      <div className="
        font-display
        text-[#171717]
        text-5xl
        md:text-6xl
        mb-3
        leading-none
        group-hover:text-[#B39A70]
        transition-colors
        duration-500
        relative
      ">
        {isVisible ? (stat.value.includes('%') ? `${count}%` : `${count}+`) : '0'}
        
        {/* Number glow */}
        <span className="absolute inset-0 text-[#B39A70] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500">
          {isVisible ? (stat.value.includes('%') ? `${count}%` : `${count}+`) : '0'}
        </span>
      </div>

      <div className="
        text-[#77736C]
        text-[9px]
        tracking-[0.25em]
        uppercase
        leading-relaxed
        group-hover:text-[#B39A70]
        transition-colors
        duration-500
      ">
        {stat.label}
      </div>
      
      {/* Bottom decorative dot */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#B39A70] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
  )
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section className="bg-gradient-to-br from-[#E8E4DC] via-[#F8F7F4] to-[#E8E4DC] relative overflow-hidden" ref={ref}>
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#B39A70]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#E8E4DC]/40 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          divide-x
          divide-[#77736C]/10
        ">
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B39A70]/30 to-transparent" />
    </section>
  )
}