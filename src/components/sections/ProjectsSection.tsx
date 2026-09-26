import ArrowRight from '@/components/common/ArrowRight'
import { PROJECTS } from '@/data/projects'
import LazyImage from '@/components/common/LazyImage'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#E8E4DC]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div 
          ref={headerRef}
          className={`
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            mb-14
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#B39A70]" />

              <span className="
                text-[#B39A70]
                text-[9px]
                tracking-[0.42em]
                uppercase
              ">
                Portfolio
              </span>
            </div>

            <h2 className="
              font-display
              text-[#171717]
              text-4xl
              md:text-5xl
              leading-[1.08]
            ">
              Selected Projects
            </h2>
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
              border-b
              border-[#B39A70]
              pb-1
              hover:text-[#B39A70]
              transition-all
              duration-300
              mt-6
              md:mt-0
              group
            "
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight />
            </span>
          </a>
        </div>

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className={`
                group cursor-pointer
                transition-all duration-700
                hover:-translate-y-2
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="
                overflow-hidden
                h-72
                mb-5
                bg-[#D8D4CC]
                rounded-sm
                shadow-md
                group-hover:shadow-xl
                transition-shadow
                duration-500
              ">
                <LazyImage
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.05]
                  "
                />
              </div>

              <div className="
                flex
                items-start
                justify-between
              ">
                <div>
                  <div className="
                    w-5
                    h-px
                    bg-[#B39A70]
                    mb-3
                    transition-all
                    duration-500
                    group-hover:w-12
                  " />

                  <h3 className="
                    font-display
                    text-[#171717]
                    text-xl
                    mb-1
                  ">
                    {project.name}
                  </h3>

                  <p className="
                    text-[#77736C]
                    text-[10px]
                    tracking-[0.18em]
                    uppercase
                  ">
                    {project.location}
                  </p>
                </div>

                <span className="
                  text-[#77736C]
                  text-[10px]
                  tracking-[0.1em]
                  uppercase
                  text-right
                  max-w-[110px]
                  leading-relaxed
                  mt-6
                  shrink-0
                  ml-4
                ">
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}