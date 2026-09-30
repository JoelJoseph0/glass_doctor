import { useState, FormEvent } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactSection() {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.2 })
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal({ threshold: 0.2 })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prepare email content
      const subject = `New Inquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}

Project Details:
${formData.message}

---
This email was sent from The Glass Doctor website contact form.
      `.trim()

      // Create mailto link with both recipients
      const mailtoLink = `mailto:sales@theglassdoctor.ae,accounts@theglassdoctor.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Simulate processing
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
        setErrors({})
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#171717]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`
              transition-all duration-1000
              ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
            `}
          >
            <div className="flex items-center gap-4 mb-7">
              <div className="w-8 h-px bg-[#B39A70]" />
              <span className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase">
                Get in Touch
              </span>
            </div>

            <h2 className="font-display text-[#F8F7F4] text-4xl md:text-5xl leading-[1.08] mb-6">
              Start Your
              <br />
              <em>Project Today</em>
            </h2>

            <p className="text-[#77736C] text-sm md:text-base leading-relaxed mb-12">
              Have a project in mind? Our team in Sharjah is ready to discuss your requirements
              and provide expert guidance on the perfect glass solution for your space across the UAE.
            </p>

            <div className="space-y-8">
              <div>
                <div className="text-[#B39A70] text-[8px] tracking-[0.28em] uppercase mb-2">
                  Phone / WhatsApp
                </div>
                <a
                  href="tel:+971502597995"
                  className="text-[#F8F7F4] text-lg hover:text-[#B39A70] transition-colors duration-300"
                >
                  +971 50 259 7995
                </a>
              </div>

              <div>
                <div className="text-[#B39A70] text-[8px] tracking-[0.28em] uppercase mb-2">
                  Email
                </div>
                <div className="space-y-1">
                  <a
                    href="mailto:sales@theglassdoctor.ae"
                    className="block text-[#F8F7F4] text-base hover:text-[#B39A70] transition-colors duration-300"
                  >
                    sales@theglassdoctor.ae
                  </a>
                  <a
                    href="mailto:accounts@theglassdoctor.ae"
                    className="block text-[#F8F7F4] text-base hover:text-[#B39A70] transition-colors duration-300"
                  >
                    accounts@theglassdoctor.ae
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[#B39A70] text-[8px] tracking-[0.28em] uppercase mb-2">
                  Location
                </div>
                <div className="text-[#F8F7F4] text-base leading-relaxed">
                  Sharjah, United Arab Emirates
                  <br />
                  Serving all of UAE
                </div>
              </div>

              <div>
                <div className="text-[#B39A70] text-[8px] tracking-[0.28em] uppercase mb-2">
                  Hours
                </div>
                <div className="text-[#F8F7F4] text-base leading-relaxed">
                  Monday - Saturday: 8:00 AM - 5:00 PM
                  <br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`
              transition-all duration-1000 delay-200
              ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-[#F8F7F4] text-[10px] tracking-[0.2em] uppercase mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`
                    w-full
                    bg-transparent
                    border-b
                    ${errors.name ? 'border-red-500' : 'border-[#77736C]/30'}
                    text-[#F8F7F4]
                    px-0
                    py-3
                    focus:outline-none
                    focus:border-[#B39A70]
                    transition-colors
                    duration-300
                  `}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-[#F8F7F4] text-[10px] tracking-[0.2em] uppercase mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    w-full
                    bg-transparent
                    border-b
                    ${errors.email ? 'border-red-500' : 'border-[#77736C]/30'}
                    text-[#F8F7F4]
                    px-0
                    py-3
                    focus:outline-none
                    focus:border-[#B39A70]
                    transition-colors
                    duration-300
                  `}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#F8F7F4] text-[10px] tracking-[0.2em] uppercase mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`
                    w-full
                    bg-transparent
                    border-b
                    ${errors.phone ? 'border-red-500' : 'border-[#77736C]/30'}
                    text-[#F8F7F4]
                    px-0
                    py-3
                    focus:outline-none
                    focus:border-[#B39A70]
                    transition-colors
                    duration-300
                  `}
                  placeholder="+971 **********"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-[#F8F7F4] text-[10px] tracking-[0.2em] uppercase mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-[#77736C]/30
                    text-[#F8F7F4]
                    px-0
                    py-3
                    focus:outline-none
                    focus:border-[#B39A70]
                    transition-colors
                    duration-300
                  "
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F8F7F4] text-[10px] tracking-[0.2em] uppercase mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`
                    w-full
                    bg-transparent
                    border
                    ${errors.message ? 'border-red-500' : 'border-[#77736C]/30'}
                    text-[#F8F7F4]
                    px-4
                    py-3
                    focus:outline-none
                    focus:border-[#B39A70]
                    transition-colors
                    duration-300
                    resize-none
                  `}
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  bg-[#B39A70]
                  text-[#171717]
                  text-[10px]
                  tracking-[0.25em]
                  uppercase
                  px-10
                  py-4
                  hover:bg-[#F8F7F4]
                  transition-all
                  duration-300
                  font-medium
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  hover:shadow-xl
                  hover:shadow-[#B39A70]/30
                  active:scale-95
                "
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-[#B39A70] text-sm text-center animate-in fade-in duration-500">
                  ✓ Email client opened! Please send the email to complete your inquiry.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm text-center animate-in fade-in duration-500">
                  ✗ Something went wrong. Please email us directly at sales@theglassdoctor.ae
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
