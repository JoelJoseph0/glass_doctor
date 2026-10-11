import PageHero from '@/components/pages/PageHero'
import AreasSection from '@/components/sections/AreasSection'
import CTASection from '@/components/sections/CTASection'

export default function AreasPage() {
  return (
    <main>
      <PageHero
        crumb="Areas We Serve"
        eyebrow="Across the UAE"
        title="Areas We Serve in the UAE"
        intro="From our base in Sharjah we serve Dubai, Abu Dhabi, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah with glass partitions, tempered, laminated, smart and double glazed glass, curtain walls and aluminium works."
      />
      <AreasSection />
      <CTASection />
    </main>
  )
}
