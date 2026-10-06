import PageHero from '@/components/pages/PageHero'
import ContactSection from '@/components/sections/ContactSection_EmailJS'

export default function ContactPage() {
  return (
    <main>
      <PageHero
        crumb="Contact"
        eyebrow="Contact Us"
        title="Contact The Glass Doctor"
        intro="Get a free quote for your glass project. Call or WhatsApp +971 50 259 7995, email sales@theglassdoctor.ae, or send us your requirements below."
      />
      <ContactSection />
    </main>
  )
}
