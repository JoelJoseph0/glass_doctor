import PageHero from '@/components/pages/PageHero'
import FaqList from '@/components/common/FaqList'
import CTASection from '@/components/sections/CTASection'
import { AREAS } from '@/data/areas'
import { SERVICE_DETAILS } from '@/data/serviceDetails'
import { areaPath, servicePath } from '@/seo/routes'

interface AreaPageProps {
  areaId: string
}

export default function AreaPage({ areaId }: AreaPageProps) {
  const area = AREAS.find((a) => a.id === areaId)
  if (!area) return null

  const otherAreas = AREAS.filter((a) => a.id !== areaId)

  return (
    <main>
      <PageHero
        crumb={area.name}
        eyebrow={`Serving ${area.name}`}
        title={`Glass & Aluminium Company in ${area.name}`}
        intro={area.metaDescription}
      />

      <section className="py-16 md:py-24 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {area.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[#77736C] text-base md:text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}

          <h2 className="font-display text-[#171717] text-2xl md:text-3xl mt-14 mb-6">
            Our Glass Services in {area.name}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-14">
            {SERVICE_DETAILS.map((service) => (
              <li key={service.id}>
                <a
                  href={servicePath(service.id)}
                  className="flex items-center justify-between gap-4 bg-white border-2 border-[#E8E4DC] px-5 py-4 text-[#171717] hover:border-[#B39A70] hover:text-[#B39A70] transition-colors duration-300"
                >
                  <span>{service.title} in {area.name}</span>
                  <span className="text-[#B39A70]">→</span>
                </a>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[#171717] text-2xl md:text-3xl mb-6">
            Areas We Cover in {area.name}
          </h2>
          <ul className="flex flex-wrap gap-2 mb-14">
            {area.districts.map((district) => (
              <li key={district} className="bg-[#E8E4DC] text-[#171717] text-sm px-4 py-2">
                {district}
              </li>
            ))}
          </ul>

          <FaqList title={`Glass Services in ${area.name}: FAQs`} faqs={area.faqs} />

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center bg-[#B39A70] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300"
            >
              Get a Quote in {area.name}
            </a>
            <a
              href="https://wa.me/971502597995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-[#171717] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#171717] hover:text-[#F8F7F4] transition-all duration-300"
            >
              WhatsApp +971 50 259 7995
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#171717]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-[#F8F7F4] text-2xl md:text-3xl mb-8">
            We Also Serve
          </h2>
          <ul className="flex flex-wrap gap-3">
            {otherAreas.map((a) => (
              <li key={a.id}>
                <a
                  href={areaPath(a.id)}
                  className="inline-block border border-[#77736C]/40 text-[#F8F7F4] px-5 py-3 hover:border-[#B39A70] hover:text-[#B39A70] transition-colors duration-300"
                >
                  Glass Company in {a.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
