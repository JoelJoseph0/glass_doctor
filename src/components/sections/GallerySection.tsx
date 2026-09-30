import { useState } from 'react'
import { GALLERY_PROJECTS, GALLERY_CATEGORIES } from '@/data/gallery'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import LazyImage from '@/components/common/LazyImage'

interface GallerySectionProps {
  onProjectClick?: (projectId: string) => void
}

export default function GallerySection({ onProjectClick }: GallerySectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'All Projects'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(project => project.category === activeCategory)

  return (
    <>
      <section
        id="gallery"
        className="py-24 md:py-32 bg-gradient-to-b from-[#E8E4DC] to-[#F8F7F4] relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          
          {/* Header */}
          <div 
            ref={headerRef}
            className={`
              text-center
              max-w-3xl
              mx-auto
              mb-16
              transition-all duration-1000
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#B39A70]" />
              <span className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase font-semibold">
                Our Work
              </span>
              <div className="w-12 h-px bg-[#B39A70]" />
            </div>

            <h2 className="font-display text-[#171717] text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-6">
              Project
              <br />
              <em className="text-[#B39A70]">Gallery</em>
            </h2>

            <p className="text-[#77736C] text-base leading-relaxed">
              Explore our portfolio of completed glass installations across the UAE. 
              Each project showcases our commitment to quality, precision, and innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div 
            className={`
              flex flex-wrap justify-center gap-3 mb-12
              transition-all duration-1000 delay-200
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium
                  border-2 transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-[#B39A70] border-[#B39A70] text-[#171717]'
                    : 'bg-white border-[#E8E4DC] text-[#77736C] hover:border-[#B39A70] hover:text-[#B39A70]'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onProjectClick?.(project.id)}
                className={`
                  group cursor-pointer
                  transition-all duration-700
                  ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60 scale-95' : 'scale-100'}
                `}
                style={{
                  transitionDelay: `${index * 100 + 300}ms`
                }}
              >
                {/* Project Card */}
                <div className="relative bg-white border-2 border-[#E8E4DC] overflow-hidden group-hover:border-[#B39A70] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#B39A70]/10">
                  
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-[#D8D4CC]">
                    <LazyImage
                      src={`${import.meta.env.BASE_URL}${project.coverImage}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Count Badge */}
                    <div className="absolute top-4 right-4 bg-[#B39A70] text-[#171717] px-3 py-1 text-xs font-medium flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="3" width="10" height="8" stroke="currentColor" strokeWidth="1.5" rx="1"/>
                        <circle cx="5" cy="6" r="1" fill="currentColor"/>
                        <path d="M12 9L9.5 7L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {project.images.length}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] px-3 py-1 text-[9px] tracking-wider uppercase">
                      {project.category}
                    </div>

                    {/* View Project Button */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white text-[#171717] py-3 px-6 text-[10px] tracking-[0.25em] uppercase font-semibold transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="w-8 h-px bg-[#B39A70] mb-4 transition-all duration-500 group-hover:w-16" />
                    
                    <h3 className="font-display text-[#171717] text-2xl mb-3 leading-tight group-hover:text-[#B39A70] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {project.location && (
                      <div className="flex items-center gap-2 text-[#77736C] text-xs mb-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#B39A70]">
                          <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.567 7.933 1 6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="6" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.2"/>
                        </svg>
                        {project.location}
                      </div>
                    )}

                    <p className="text-[#77736C] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-[#B39A70] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`
            mt-16 text-center
            transition-all duration-1000 delay-700
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            <p className="text-[#77736C] text-base mb-6">
              Want to see your project here?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#B39A70] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300 hover:shadow-xl active:scale-95 group"
            >
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M1 4H13M10 1L13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
