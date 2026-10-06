import PageHero from '@/components/pages/PageHero'
import LazyImage from '@/components/common/LazyImage'
import ArrowRight from '@/components/common/ArrowRight'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'
import { SERVICE_DETAILS } from '@/data/serviceDetails'
import { servicePath } from '@/seo/routes'

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Our Glass & Aluminium Services"
        intro="From glass tempering and partitions to smart glass, double glazed units, curtain walls and aluminium works, we design, fabricate and install glass solutions across the UAE."
      />

      <section className="py-16 md:py-24 bg-[#F8F7F4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_DETAILS.map((service) => (
              <li key={service.id}>
                <a
                  href={servicePath(service.id)}
                  className="group block h-full bg-white border-2 border-[#E8E4DC] hover:border-[#B39A70] hover:shadow-2xl hover:shadow-[#171717]/10 transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden bg-[#D8D4CC]">
                    <LazyImage
                      src={`${import.meta.env.BASE_URL}${service.image}`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-8 h-px bg-[#B39A70] mb-4 transition-all duration-500 group-hover:w-16" />
                    <h2 className="font-display text-[#171717] text-2xl mb-3 leading-tight group-hover:text-[#B39A70] transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-[#77736C] text-sm leading-relaxed mb-5">
                      {service.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#B39A70] text-[10px] tracking-[0.22em] uppercase font-semibold group-hover:gap-4 transition-all duration-300">
                      Explore Service
                      <ArrowRight />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </main>
  )
}
