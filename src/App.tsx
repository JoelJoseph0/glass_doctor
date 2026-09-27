import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import StatsSection from '@/components/sections/StatsSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import BrandStatement from '@/components/sections/BrandStatement'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection'
import BackToTop from '@/components/common/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ProductsSection />
      <ApplicationsSection />
      <BrandStatement />
      <ProcessSection />
      <WhyUsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  )
}