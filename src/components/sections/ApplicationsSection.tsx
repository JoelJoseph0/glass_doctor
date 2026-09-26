import { APPLICATIONS } from "@/data/applications" 
import { useScrollReveal } from '@/hooks/useScrollReveal'
import LazyImage from '@/components/common/LazyImage'

export default function ApplicationsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      id="applications"
      className="py-24 md:py-32 bg-[#F8F7F4]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div 
          ref={headerRef}
          className={`
            mb-14
            transition-all
            duration-1000
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
              Applications
            </span>
          </div>

          <h2 className="
            font-display
            text-[#171717]
            text-4xl
            md:text-5xl
            leading-[1.08]
          ">
            Glass for Every Space
          </h2>
        </div>

        <div className="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
        ">
          {APPLICATIONS.map((application, index) => (
            <div
              key={application.name}
              className={`
                group
                relative
                h-64
                overflow-hidden
                cursor-pointer
                transition-all
                duration-700
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${application.columns ?? ''}
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <LazyImage
                src={application.image}
                alt={application.name}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.07]
                "
              />

              <div className="
                absolute
                inset-0
                bg-[#171717]/45
                group-hover:bg-[#171717]/60
                transition-colors
                duration-500
              " />

              <div className="
                absolute
                inset-0
                flex
                flex-col
                justify-end
                p-8
              ">
                <div className="
                  w-6
                  h-px
                  bg-[#B39A70]
                  mb-3
                  transition-all
                  duration-400
                  group-hover:w-12
                " />

                <h3 className="
                  font-display
                  text-[#F8F7F4]
                  text-2xl
                ">
                  {application.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}