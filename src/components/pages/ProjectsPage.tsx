import PageHero from '@/components/pages/PageHero'
import GallerySection from '@/components/sections/GallerySection'
import CTASection from '@/components/sections/CTASection'

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        crumb="Projects"
        eyebrow="Our Work"
        title="Our Projects"
        intro="Completed glass installations across the UAE, from commercial interiors and elevator glass to residential partitions and custom glass works."
      />
      <GallerySection />
      <CTASection />
    </main>
  )
}
