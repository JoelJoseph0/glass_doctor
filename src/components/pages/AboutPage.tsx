import PageHero from '@/components/pages/PageHero'
import IntroSection from '@/components/sections/IntroSection'
import StatsSection from '@/components/sections/StatsSection'
import BrandStatement from '@/components/sections/BrandStatement'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About Us"
        eyebrow="About Us"
        title="About The Glass Doctor"
        intro="A Sharjah-based glass and aluminium company delivering tempered, laminated, smart and decorative glass solutions for homes and businesses across the UAE."
      />
      <IntroSection />
      <StatsSection />
      <BrandStatement />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </main>
  )
}
