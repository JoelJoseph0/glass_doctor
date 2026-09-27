import { useState } from 'react'
import { APPLICATIONS } from "@/data/applications" 
import { useScrollReveal } from '@/hooks/useScrollReveal'
import LazyImage from '@/components/common/LazyImage'

export default function ApplicationsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  return (
    <section
      id="applications"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F8F7F4] to-[#E8E4DC] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B39A70]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B39A70]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">

        <div 
          ref={headerRef}
          className={`
            mb-16
            text-center
            max-w-3xl
            mx-auto
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#B39A70]" />
            <span className="
              text-[#B39A70]
              text-[9px]
              tracking-[0.42em]
              uppercase
              font-semibold
            ">
              Applications
            </span>
            <div className="w-12 h-px bg-[#B39A70]" />
          </div>

          <h2 className="
            font-display
            text-[#171717]
            text-4xl
            md:text-5xl
            lg:text-6xl
            leading-[1.08]
            mb-6
          ">
            Glass for
            <br />
            <em className="text-[#B39A70]">Every Space</em>
          </h2>

          <p className="
            text-[#77736C]
            text-base
            leading-relaxed
          ">
            From residential elegance to commercial grandeur, our glass solutions 
            transform spaces across diverse applications throughout the UAE.
          </p>
        </div>

        {/* Applications Grid - Hexagon/Creative Layout */}
        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">
          {APPLICATIONS.map((application, index) => (
            <div
              key={application.name}
              onMouseEnter={() => setHoveredApp(index)}
              onMouseLeave={() => setHoveredApp(null)}
              className={`
                group
                relative
                transition-all
                duration-700
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${hoveredApp !== null && hoveredApp !== index ? 'opacity-60 scale-95' : 'scale-100'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card with Clip Path */}
              <div className="
                relative
                h-80
                overflow-hidden
                bg-white
                border-2
                border-[#E8E4DC]
                group-hover:border-[#B39A70]
                transition-all
                duration-500
                group-hover:shadow-2xl
                group-hover:shadow-[#B39A70]/20
              ">
                
                {/* Image */}
                <div className="relative h-full">
                  <LazyImage
                    src={`${import.meta.env.BASE_URL}${application.image}`}
                    alt={application.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:rotate-1
                    "
                  />

                  {/* Gradient Overlay */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#171717]/90
                    via-[#171717]/40
                    to-transparent
                  " />

                  {/* Animated Corner Accent */}
                  <div className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                  ">
                    <div className="
                      absolute
                      top-0
                      left-0
                      w-24
                      h-24
                      border-t-4
                      border-l-4
                      border-[#B39A70]
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      transform
                      -translate-x-4
                      -translate-y-4
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                    " />
                    
                    <div className="
                      absolute
                      bottom-0
                      right-0
                      w-24
                      h-24
                      border-b-4
                      border-r-4
                      border-[#B39A70]
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      transform
                      translate-x-4
                      translate-y-4
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                    " />
                  </div>

                  {/* Content */}
                  <div className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-end
                    p-8
                  ">
                    {/* Number Badge */}
                    <div className="
                      absolute
                      top-6
                      right-6
                      w-14
                      h-14
                      bg-[#B39A70]
                      flex
                      items-center
                      justify-center
                      font-display
                      text-[#171717]
                      text-xl
                      font-bold
                      transform
                      rotate-45
                      group-hover:rotate-0
                      transition-all
                      duration-500
                      shadow-lg
                    ">
                      <span className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Decorative Line */}
                    <div className="
                      w-8
                      h-px
                      bg-[#B39A70]
                      mb-4
                      transition-all
                      duration-500
                      group-hover:w-20
                    " />

                    {/* Application Name */}
                    <h3 className="
                      font-display
                      text-[#F8F7F4]
                      text-2xl
                      md:text-3xl
                      leading-tight
                      mb-3
                      transform
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                    ">
                      {application.name}
                    </h3>

                    {/* Description - Appears on Hover */}
                    <p className="
                      text-[#D0CCC4]
                      text-sm
                      leading-relaxed
                      mb-4
                      max-h-0
                      overflow-hidden
                      opacity-0
                      group-hover:max-h-20
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    ">
                      Professional glass solutions tailored for {application.name.toLowerCase()}.
                    </p>

                    {/* Learn More Link */}
                    <div className="
                      flex
                      items-center
                      gap-2
                      text-[#B39A70]
                      text-xs
                      tracking-wider
                      uppercase
                      font-semibold
                      transform
                      translate-y-4
                      opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      delay-100
                    ">
                      <span>Explore</span>
                      <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M1 4H15M12 1L15 4L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                  bg-gradient-to-t
                  from-[#B39A70]/20
                  to-transparent
                " />

              </div>

              {/* 3D Shadow Effect */}
              <div className="
                absolute
                inset-0
                bg-[#B39A70]
                -z-10
                transform
                translate-x-2
                translate-y-2
                opacity-0
                group-hover:opacity-20
                transition-all
                duration-500
              " />

            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className={`
          mt-20
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
          p-8
          bg-white
          border-2
          border-[#E8E4DC]
          transition-all
          duration-1000
          delay-600
          ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <div className="flex-1">
            <h3 className="
              font-display
              text-2xl
              md:text-3xl
              text-[#171717]
              mb-3
            ">
              Need a custom solution?
            </h3>
            <p className="
              text-[#77736C]
              text-sm
              leading-relaxed
            ">
              Our team specializes in creating bespoke glass installations 
              for unique architectural requirements across all application types.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              bg-[#171717]
              text-white
              text-[10px]
              tracking-[0.25em]
              uppercase
              px-8
              py-4
              font-semibold
              hover:bg-[#B39A70]
              transition-all
              duration-300
              hover:shadow-xl
              active:scale-95
              group
              whitespace-nowrap
            "
          >
            Discuss Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 4H13M10 1L13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
