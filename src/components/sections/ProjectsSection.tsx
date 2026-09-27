import { useState } from 'react'
import ArrowRight from '@/components/common/ArrowRight'
import { PROJECTS } from '@/data/projects'
import LazyImage from '@/components/common/LazyImage'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-to-b from-[#E8E4DC] to-[#F8F7F4] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#B39A70]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#B39A70]/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">

        <div 
          ref={headerRef}
          className={`
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            mb-20
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[#B39A70] to-transparent" />
              <span className="
                text-[#B39A70]
                text-[9px]
                tracking-[0.42em]
                uppercase
                font-semibold
              ">
                Portfolio
              </span>
            </div>

            <h2 className="
              font-display
              text-[#171717]
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-[1.08]
              mb-4
            ">
              Selected
              <br />
              <em className="text-[#B39A70]">Projects</em>
            </h2>

            <p className="
              text-[#77736C]
              text-base
              leading-relaxed
              max-w-xl
            ">
              Discover our portfolio of exceptional glass and architectural
              installations across the UAE. Each project reflects our commitment
              to precision, quality, and innovation.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[#171717]
              text-[10px]
              tracking-[0.25em]
              uppercase
              border-b-2
              border-[#B39A70]
              pb-2
              mt-8
              md:mt-0
              hover:text-[#B39A70]
              transition-all
              duration-500
              font-semibold
            "
          >
            View All Projects
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight />
            </span>
          </a>
        </div>

        {/* Projects Grid - Enhanced Design */}
        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              className={`
                group
                cursor-pointer
                transition-all
                duration-700
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50 scale-95' : ''}
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card Container with Border */}
              <div className="
                relative
                bg-white
                border-2
                border-[#E8E4DC]
                hover:border-[#B39A70]
                transition-all
                duration-500
                overflow-hidden
                group-hover:shadow-2xl
                group-hover:shadow-[#B39A70]/10
              ">
                
                {/* Image Container */}
                <div className="
                  relative
                  h-80
                  overflow-hidden
                  bg-[#D8D4CC]
                ">
                  <LazyImage
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#171717]/80
                    via-[#171717]/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  " />

                  {/* Number Badge */}
                  <div className="
                    absolute
                    top-4
                    right-4
                    w-12
                    h-12
                    bg-[#B39A70]
                    flex
                    items-center
                    justify-center
                    font-display
                    text-[#171717]
                    text-xl
                    font-bold
                    transform
                    rotate-12
                    group-hover:rotate-0
                    group-hover:scale-110
                    transition-all
                    duration-500
                    shadow-lg
                  ">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* View Details Button */}
                  <div className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-white
                    text-[#171717]
                    py-3
                    px-6
                    text-[10px]
                    tracking-[0.25em]
                    uppercase
                    font-semibold
                    transform
                    translate-y-20
                    opacity-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    hover:bg-[#B39A70]
                    hover:text-white
                  ">
                    View Details
                    <ArrowRight />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white">
                  
                  {/* Decorative Line */}
                  <div className="
                    w-8
                    h-px
                    bg-[#B39A70]
                    mb-4
                    transition-all
                    duration-500
                    group-hover:w-16
                  " />

                  {/* Project Name */}
                  <h3 className="
                    font-display
                    text-[#171717]
                    text-2xl
                    mb-3
                    leading-tight
                    group-hover:text-[#B39A70]
                    transition-colors
                    duration-300
                  ">
                    {project.name}
                  </h3>

                  {/* Location */}
                  <div className="
                    flex
                    items-center
                    gap-2
                    text-[#77736C]
                    text-xs
                    tracking-[0.15em]
                    uppercase
                    mb-3
                  ">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#B39A70]">
                      <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.567 7.933 1 6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="6" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    {project.location}
                  </div>

                  {/* Project Type Tag */}
                  <div className="
                    inline-block
                    bg-[#F8F7F4]
                    border
                    border-[#E8E4DC]
                    text-[#171717]
                    text-[9px]
                    tracking-[0.2em]
                    uppercase
                    px-4
                    py-2
                    font-medium
                    group-hover:bg-[#B39A70]
                    group-hover:text-white
                    group-hover:border-[#B39A70]
                    transition-all
                    duration-300
                  ">
                    {project.type}
                  </div>

                  {/* Expandable Details */}
                  <div className={`
                    mt-4
                    pt-4
                    border-t
                    border-[#E8E4DC]
                    overflow-hidden
                    transition-all
                    duration-500
                    ${selectedProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <p className="text-[#77736C] text-sm leading-relaxed">
                      Professional glass installation showcasing our expertise in 
                      {project.type.toLowerCase()}. Completed with precision and 
                      attention to detail.
                    </p>
                    
                    <button className="
                      mt-3
                      text-[#B39A70]
                      text-xs
                      tracking-wider
                      uppercase
                      font-semibold
                      hover:text-[#171717]
                      transition-colors
                    ">
                      Learn More →
                    </button>
                  </div>

                </div>

                {/* Hover Effect Border */}
                <div className="
                  absolute
                  inset-0
                  border-2
                  border-[#B39A70]
                  scale-0
                  group-hover:scale-100
                  transition-transform
                  duration-500
                  pointer-events-none
                " />

              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`
          mt-16
          text-center
          transition-all
          duration-1000
          delay-700
          ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <div className="
            inline-flex
            flex-col
            items-center
            gap-4
            p-8
            bg-white
            border-2
            border-[#E8E4DC]
            hover:border-[#B39A70]
            transition-all
            duration-500
          ">
            <h3 className="
              font-display
              text-2xl
              text-[#171717]
            ">
              Have a project in mind?
            </h3>
            
            <p className="
              text-[#77736C]
              text-sm
              max-w-md
            ">
              Let's discuss how we can bring your vision to life with our 
              precision glass and architectural solutions.
            </p>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#B39A70]
                text-white
                text-[10px]
                tracking-[0.25em]
                uppercase
                px-8
                py-4
                font-semibold
                hover:bg-[#171717]
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-[#B39A70]/30
                active:scale-95
                group
              "
            >
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
