import { useEffect } from 'react'
import { ServiceDetail } from '@/data/serviceDetails'
import LazyImage from './LazyImage'

interface ServiceModalProps {
  service: ServiceDetail | null
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
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

  if (!isOpen || !service) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#171717]/95 backdrop-blur-md animate-in fade-in duration-300" />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-gradient-to-br from-[#F8F7F4] to-[#E8E4DC] rounded-none shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#171717]/80 backdrop-blur-sm text-[#F8F7F4] flex items-center justify-center hover:bg-[#B39A70] transition-all duration-300 group"
          aria-label="Close modal"
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

        {/* Content Container */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Hero Image Section */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <LazyImage
              src={`${import.meta.env.BASE_URL}${service.image}`}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#B39A70]" />
                <span className="text-[#B39A70] text-[10px] tracking-[0.3em] uppercase font-medium">
                  Service Details
                </span>
              </div>
              
              <h2 className="font-display text-[#F8F7F4] text-3xl md:text-5xl leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 lg:p-16">
            {/* Subtitle */}
            <div className="mb-8">
              <h3 className="font-display text-[#171717] text-2xl md:text-3xl mb-6 relative inline-block">
                {service.subtitle}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#B39A70] to-transparent" />
              </h3>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              {service.description.split('\n\n').map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.split('\n').map((line, lineIndex) => {
                    // A heading is a short line that doesn't end like a sentence
                    const trimmed = line.trim()
                    const isHeading = trimmed.length > 0 && trimmed.length < 60 && !/[.!?:,;]$/.test(trimmed)
                    
                    if (isHeading && line.trim()) {
                      return (
                        <h4
                          key={lineIndex}
                          className="font-display text-[#171717] text-xl md:text-2xl mt-8 mb-4 first:mt-0"
                        >
                          {line}
                        </h4>
                      )
                    }
                    
                    if (line.trim()) {
                      return (
                        <p
                          key={lineIndex}
                          className="text-[#77736C] text-base md:text-lg leading-relaxed mb-4"
                        >
                          {line}
                        </p>
                      )
                    }
                    
                    return null
                  })}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-[#77736C]/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-3 bg-[#B39A70] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300 font-medium group"
                >
                  Request a Quote
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a
                  href="tel:+971502597995"
                  className="inline-flex items-center justify-center gap-3 border-2 border-[#171717] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300 font-medium"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
