import { useState } from 'react'
import ArrowRight from '@/components/common/ArrowRight'
import { PRODUCTS } from '@/data/products'
import LazyImage from '@/components/common/LazyImage'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getServiceIdFromProductName, SERVICE_DETAILS } from '@/data/serviceDetails'
import ServiceModal from '@/components/common/ServiceModal'

export default function ProductsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const [activeProduct, setActiveProduct] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<typeof SERVICE_DETAILS[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleExploreService = (productName: string) => {
    const serviceId = getServiceIdFromProductName(productName)
    const service = SERVICE_DETAILS.find(s => s.id === serviceId)
    if (service) {
      setSelectedService(service)
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <section
      id="products"
      className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">

        <div 
          ref={headerRef}
          className={`
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            mb-16
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[#B39A70] to-transparent" />
              <span className="
                text-[#B39A70]
                text-[9px]
                tracking-[0.42em]
                uppercase
                font-semibold
              ">
                Our Services
              </span>
            </div>

            <h2 className="
              font-display
              text-[#171717]
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-[1.08]
              mb-4
            ">
              Glass &amp; Architectural
              <br />
              <em className="text-[#B39A70]">Solutions</em>
            </h2>
          </div>

          <div className="
            text-[#77736C]
            text-sm
            max-w-[280px]
            mt-6
            md:mt-0
            leading-relaxed
            relative
            pl-4
            border-l-2
            border-[#B39A70]
          ">
            <p>
              Designed for contemporary spaces.
              <br />
              Engineered for lasting performance.
            </p>
          </div>
        </div>

        {/* Products Grid - Masonry Layout */}
        <div className="
          grid
          md:grid-cols-2
          gap-6
        ">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.name}
              onMouseEnter={() => setActiveProduct(index)}
              onMouseLeave={() => setActiveProduct(null)}
              className={`
                group
                relative
                overflow-hidden
                cursor-pointer
                bg-white
                border-2
                border-[#E8E4DC]
                transition-all
                duration-700
                hover:border-[#B39A70]
                hover:shadow-2xl
                hover:shadow-[#171717]/10
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${
                  product.tall
                    ? 'md:row-span-2 h-[680px]'
                    : 'h-[420px]'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Image Section */}
              <div className="relative h-full">
                <LazyImage
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Gradient Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#171717]
                  via-[#171717]/60
                  to-transparent
                  transition-opacity
                  duration-500
                " />

                {/* Corner Accent */}
                <div className="
                  absolute
                  top-0
                  right-0
                  w-0
                  h-0
                  border-t-[60px]
                  border-t-[#B39A70]
                  border-l-[60px]
                  border-l-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                " />

                {/* Content Container */}
                <div className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                  transform
                  transition-transform
                  duration-500
                  group-hover:translate-y-0
                ">
                  
                  {/* Number Indicator */}
                  <div className="
                    inline-block
                    mb-4
                    font-display
                    text-[#B39A70]
                    text-5xl
                    opacity-30
                    group-hover:opacity-60
                    transition-opacity
                    duration-300
                  ">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Decorative Line */}
                  <div className="
                    w-10
                    h-px
                    bg-[#B39A70]
                    mb-4
                    transition-all
                    duration-500
                    group-hover:w-24
                  " />

                  {/* Product Name */}
                  <h3 className="
                    font-display
                    text-[#F8F7F4]
                    text-2xl
                    md:text-3xl
                    mb-3
                    leading-tight
                  ">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="
                    text-[#D0CCC4]
                    text-sm
                    leading-relaxed
                    mb-5
                    transform
                    transition-all
                    duration-500
                    ${activeProduct === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}
                  ">
                    {product.description}
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleExploreService(product.name)
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      text-[#B39A70]
                      text-[10px]
                      tracking-[0.22em]
                      uppercase
                      font-semibold
                      transform
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    <span className="
                      py-2
                      px-4
                      bg-[#B39A70]/20
                      group-hover:bg-[#B39A70]
                      group-hover:text-[#171717]
                      transition-all
                      duration-300
                    ">
                      Explore Service
                    </span>
                    <ArrowRight className="
                      transform
                      group-hover:translate-x-2
                      transition-transform
                      duration-300
                    " />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="
                  absolute
                  inset-0
                  border-4
                  border-[#B39A70]
                  scale-95
                  opacity-0
                  group-hover:scale-100
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  pointer-events-none
                " />
              </div>

            </div>
          ))}
        </div>

        {/* Service Features Grid */}
        <div className={`
          mt-20
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          transition-all
          duration-1000
          delay-500
          ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          {[
            { number: '12+', label: 'Services Offered', icon: '🔧' },
            { number: '100%', label: 'Quality Assured', icon: '✓' },
            { number: 'UAE', label: 'Wide Coverage', icon: '📍' },
            { number: '24/7', label: 'Support Available', icon: '💬' }
          ].map((feature, index) => (
            <div
              key={index}
              className="
                group
                text-center
                p-6
                bg-white
                border-2
                border-[#E8E4DC]
                hover:border-[#B39A70]
                transition-all
                duration-500
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              <div className="
                text-4xl
                mb-3
                transform
                group-hover:scale-110
                transition-transform
                duration-300
              ">
                {feature.icon}
              </div>
              
              <div className="
                font-display
                text-3xl
                text-[#171717]
                mb-2
                group-hover:text-[#B39A70]
                transition-colors
                duration-300
              ">
                {feature.number}
              </div>
              
              <div className="
                text-[#77736C]
                text-xs
                tracking-[0.2em]
                uppercase
              ">
                {feature.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <ServiceModal 
      service={selectedService} 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
    />
    </>
  )
}
