import { AREAS } from '@/data/areas'
import { areaPath } from '@/seo/routes'

export default function AreasSection() {
  return (
    <section className="py-16 md:py-20 bg-[#E8E4DC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#B39A70]" />
          <span className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase font-semibold">
            Areas We Serve
          </span>
        </div>
        <h2 className="font-display text-[#171717] text-3xl md:text-5xl leading-[1.08] mb-6">
          Glass Solutions Across <em className="text-[#B39A70]">All UAE Emirates</em>
        </h2>
        <p className="text-[#77736C] text-base leading-relaxed max-w-2xl mb-10">
          Based in Sharjah, we supply, fabricate and install glass and aluminium works for homes,
          offices, retail and commercial projects in every emirate.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {AREAS.map((area) => (
            <li key={area.id}>
              <a
                href={areaPath(area.id)}
                className="block h-full bg-[#F8F7F4] border-2 border-transparent px-4 py-5 text-center text-[#171717] font-medium hover:border-[#B39A70] hover:text-[#B39A70] transition-colors duration-300"
              >
                {area.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
