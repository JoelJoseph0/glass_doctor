interface PageHeroProps {
  eyebrow: string
  title: string
  intro: string
  crumb: string
}

export default function PageHero({ eyebrow, title, intro, crumb }: PageHeroProps) {
  return (
    <section className="relative bg-[#171717] pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#B39A70]/20 rounded-full blur-[120px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <nav aria-label="Breadcrumb" className="text-[#E8E4DC] text-xs mb-8">
          <a href="/" className="hover:text-[#B39A70] transition-colors">Home</a>
          <span className="mx-2 text-[#B39A70]">/</span>
          <span className="text-[#B39A70]">{crumb}</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#B39A70]" />
          <span className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase font-semibold">
            {eyebrow}
          </span>
        </div>

        <h1 className="font-display text-[#F8F7F4] text-4xl md:text-6xl leading-[1.08] max-w-4xl mb-6">
          {title}
        </h1>

        <p className="text-[#77736C] text-base md:text-lg leading-relaxed max-w-2xl">
          {intro}
        </p>
      </div>
    </section>
  )
}
