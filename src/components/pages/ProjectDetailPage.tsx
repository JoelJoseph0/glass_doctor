import { useState, useEffect } from 'react'
import { GALLERY_PROJECTS } from '@/data/gallery'
import LazyImage from '@/components/common/LazyImage'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ProjectDetailPageProps {
  projectId: string
  onClose: () => void
}

export default function ProjectDetailPage({ projectId, onClose }: ProjectDetailPageProps) {
  const project = GALLERY_PROJECTS.find(p => p.id === projectId)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollReveal()

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [projectId])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-4xl text-[#171717] mb-4">Project Not Found</h2>
          <button
            onClick={onClose}
            className="text-[#B39A70] hover:text-[#171717] transition-colors duration-300"
          >
            ← Back to Gallery
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Back Button - Fixed */}
      <button
        onClick={onClose}
        className="fixed top-24 left-6 md:left-10 z-40 flex items-center gap-2 bg-[#171717]/90 backdrop-blur-sm text-[#F8F7F4] px-6 py-3 hover:bg-[#B39A70] hover:text-[#171717] transition-all duration-300 group"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Back to Gallery</span>
      </button>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#E8E4DC] to-[#F8F7F4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div
            ref={headerRef}
            className={`
              max-w-4xl mx-auto text-center
              transition-all duration-1000
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-3 bg-[#B39A70]/10 border-2 border-[#B39A70] px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#B39A70] rounded-full animate-pulse" />
              <span className="text-[#B39A70] text-[9px] tracking-[0.3em] uppercase font-semibold">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[#171717] text-4xl md:text-5xl lg:text-7xl leading-[1.08] mb-6">
              {project.title}
            </h1>

            {/* Location */}
            {project.location && (
              <div className="flex items-center justify-center gap-2 text-[#77736C] text-sm mb-8">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#B39A70]">
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {project.location}
              </div>
            )}

            {/* Description */}
            <p className="text-[#77736C] text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl text-[#B39A70] mb-2">
                  {project.images.length}
                </div>
                <div className="text-[#77736C] text-xs tracking-wider uppercase">
                  Images
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl text-[#B39A70] mb-2">
                  100%
                </div>
                <div className="text-[#77736C] text-xs tracking-wider uppercase">
                  Quality
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl text-[#B39A70] mb-2">
                  UAE
                </div>
                <div className="text-[#77736C] text-xs tracking-wider uppercase">
                  Location
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-[#171717]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="relative aspect-video max-w-6xl mx-auto overflow-hidden border-4 border-[#B39A70]/20">
            <LazyImage
              src={`${import.meta.env.BASE_URL}${project.images[selectedImageIndex]}`}
              alt={`${project.title} - Main view`}
              className="w-full h-full object-contain bg-[#171717]"
            />

            {/* Image Navigation (if multiple images) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImageIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] flex items-center justify-center hover:bg-[#B39A70] hover:text-[#171717] transition-all duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  onClick={() => setSelectedImageIndex(prev => prev === project.images.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] flex items-center justify-center hover:bg-[#B39A70] hover:text-[#171717] transition-all duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#171717]/90 backdrop-blur-sm text-[#F8F7F4] px-6 py-2 text-sm font-medium border-2 border-[#B39A70]/30">
                  {selectedImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div
            ref={imagesRef}
            className={`
              transition-all duration-1000
              ${imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h2 className="font-display text-[#171717] text-3xl md:text-4xl text-center mb-4">
              Project <em className="text-[#B39A70]">Gallery</em>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#B39A70] to-transparent mx-auto mb-12" />

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImageIndex(index)
                    window.scrollTo({ top: 400, behavior: 'smooth' })
                  }}
                  className={`
                    relative aspect-square overflow-hidden
                    border-4 transition-all duration-300
                    ${selectedImageIndex === index 
                      ? 'border-[#B39A70] scale-95 shadow-2xl shadow-[#B39A70]/30' 
                      : 'border-[#E8E4DC] hover:border-[#B39A70] hover:shadow-xl'
                    }
                  `}
                >
                  <LazyImage
                    src={`${import.meta.env.BASE_URL}${image}`}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#171717]/0 hover:bg-[#171717]/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#B39A70] px-3 py-1">
                      View
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {selectedImageIndex === index && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-[#B39A70] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#171717]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h3 className="font-display text-[#F8F7F4] text-3xl md:text-4xl mb-4">
            Inspired by this project?
          </h3>
          <p className="text-[#77736C] text-base mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life with our expert glass installation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#B39A70] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#F8F7F4] transition-all duration-300 hover:shadow-xl active:scale-95"
            >
              Get a Quote
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center gap-3 border-2 border-[#B39A70] text-[#B39A70] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#B39A70] hover:text-[#171717] transition-all duration-300"
            >
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
