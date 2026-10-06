import { SERVICE_DETAILS } from '@/data/serviceDetails'
import LazyImage from '@/components/common/LazyImage'
import { servicePath } from '@/seo/routes'

interface ServicePageProps {
  serviceId: string
}

export default function ServicePage({ serviceId }: ServicePageProps) {
  const service = SERVICE_DETAILS.find((s) => s.id === serviceId)
  if (!service) return null

  const others = SERVICE_DETAILS.filter((s) => s.id !== serviceId)

  return (
    <main>
      {/* Back Button - Fixed */}
      <a
        href="/services/"
        className="fixed top-24 left-6 md:left-10 z-40 flex items-center gap-2 bg-[#171717]/90 backdrop-blur-sm text-[#F8F7F4] px-6 py-3 hover:bg-[#B39A70] hover:text-[#171717] transition-all duration-300"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Back to Services</span>
      </a>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end bg-[#171717] overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src={`${import.meta.env.BASE_URL}${service.image}`}
            alt={`${service.title} by The Glass Doctor`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-[#171717]/20" />
        </div>

        <div className="relative max-w-[1440px] w-full mx-auto px-6 md:px-10 pb-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-[#E8E4DC] text-xs mb-6">
            <a href="/" className="hover:text-[#B39A70] transition-colors">Home</a>
            <span className="mx-2 text-[#B39A70]">/</span>
            <a href="/services/" className="hover:text-[#B39A70] transition-colors">Services</a>
            <span className="mx-2 text-[#B39A70]">/</span>
            <span className="text-[#B39A70]">{service.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#B39A70]" />
            <span className="text-[#B39A70] text-[10px] tracking-[0.3em] uppercase font-medium">
              Our Services
            </span>
          </div>

          <h1 className="font-display text-[#F8F7F4] text-4xl md:text-6xl leading-[1.08] max-w-4xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-[#171717] text-2xl md:text-3xl mb-8 relative inline-block">
            {service.subtitle}
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#B39A70] to-transparent" />
          </h2>

          {service.description.split('\n\n').map((block, index) => {
            const text = block.trim()
            if (!text) return null
            // Short lines that don't end like a sentence are sub-headings
            const isHeading = text.length < 60 && !/[.!?:,;]$/.test(text)
            return isHeading ? (
              <h3 key={index} className="font-display text-[#171717] text-xl md:text-2xl mt-10 mb-4">
                {text}
              </h3>
            ) : (
              <p key={index} className="text-[#77736C] text-base md:text-lg leading-relaxed mb-6">
                {text}
              </p>
            )
          })}

          <div className="mt-12 pt-8 border-t border-[#77736C]/20 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#B39A70] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300"
            >
              Request a Quote
            </a>
            <a
              href="tel:+971502597995"
              className="inline-flex items-center justify-center border-2 border-[#171717] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300"
            >
              Call +971 50 259 7995
            </a>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-20 bg-[#171717]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-[#F8F7F4] text-3xl md:text-4xl mb-10">
            Explore Our Other <em className="text-[#B39A70]">Services</em>
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s) => (
              <li key={s.id}>
                <a
                  href={servicePath(s.id)}
                  className="block h-full border border-[#77736C]/30 p-5 text-[#F8F7F4] hover:border-[#B39A70] hover:text-[#B39A70] transition-colors duration-300"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
