import { useEffect, useState } from 'react'
import { GalleryProject } from '@/data/gallery'
import LazyImage from './LazyImage'

interface GalleryModalProps {
  project: GalleryProject | null
  isOpen: boolean
  onClose: () => void
}

export default function GalleryModal({ project, isOpen, onClose }: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project])

  if (!isOpen || !project) return null

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]/95 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#F8F7F4] rounded-none shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] flex items-center justify-center hover:bg-[#B39A70] transition-all duration-300 group"
          aria-label="Close gallery"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="group-hover:rotate-90 transition-transform duration-300"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Image Display */}
          <div className="relative bg-[#171717] aspect-video">
            <LazyImage
              src={`${import.meta.env.BASE_URL}${project.images[currentImageIndex]}`}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Arrows (only if multiple images) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] flex items-center justify-center hover:bg-[#B39A70] transition-all duration-300"
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] flex items-center justify-center hover:bg-[#B39A70] transition-all duration-300"
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] px-4 py-2 text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          {/* Project Info */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#B39A70]" />
              <span className="text-[#B39A70] text-[10px] tracking-[0.3em] uppercase font-medium">
                {project.category}
              </span>
            </div>

            <h2 className="font-display text-[#171717] text-3xl md:text-4xl mb-4">
              {project.title}
            </h2>

            {project.location && (
              <div className="flex items-center gap-2 text-[#77736C] text-sm mb-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#B39A70]">
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {project.location}
              </div>
            )}

            <p className="text-[#77736C] text-base leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Thumbnail Grid */}
            {project.images.length > 1 && (
              <div className="border-t border-[#E8E4DC] pt-8">
                <h3 className="text-[#171717] text-sm tracking-wider uppercase mb-4 font-medium">
                  Project Images ({project.images.length})
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`
                        relative aspect-square overflow-hidden border-2 transition-all duration-300
                        ${currentImageIndex === index 
                          ? 'border-[#B39A70] scale-95' 
                          : 'border-[#E8E4DC] hover:border-[#B39A70]'
                        }
                      `}
                    >
                      <LazyImage
                        src={`${import.meta.env.BASE_URL}${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
