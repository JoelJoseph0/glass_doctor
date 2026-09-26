import ArrowRight from '@/components/common/ArrowRight'
import { PRODUCTS } from '@/data/products'
import LazyImage from '@/components/common/LazyImage'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ProductsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      id="products"
      className="py-24 md:py-32 bg-[#F8F7F4]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div 
          ref={headerRef}
          className={`
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            mb-14
            transition-all duration-1000
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#B39A70]" />

              <span className="
                text-[#B39A70]
                text-[9px]
                tracking-[0.42em]
                uppercase
              ">
                Solutions
              </span>
            </div>

            <h2 className="
              font-display
              text-[#171717]
              text-4xl
              md:text-5xl
              leading-[1.08]
            ">
              Our Glass Solutions
            </h2>
          </div>

          <p className="
            text-[#77736C]
            text-sm
            max-w-[220px]
            mt-6
            md:mt-0
            leading-relaxed
          ">
            Designed for contemporary spaces.
            <br />
            Engineered for lasting performance.
          </p>
        </div>

        <div className="
          grid
          md:grid-cols-2
          gap-4
        ">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.name}
              className={`
                group
                relative
                overflow-hidden
                cursor-pointer
                transition-all
                duration-700
                hover:shadow-2xl
                hover:shadow-[#171717]/20
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${
                  product.tall
                    ? 'h-[520px]'
                    : 'h-[380px]'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <LazyImage
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.06]
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#171717]/85
                via-[#171717]/15
                to-transparent
              " />

              <div className="
                absolute
                bottom-0
                left-0
                right-0
                p-8
              ">
                <div className="
                  w-8
                  h-px
                  bg-[#B39A70]
                  mb-4
                  transition-all
                  duration-500
                  group-hover:w-16
                " />

                <h3 className="
                  font-display
                  text-[#F8F7F4]
                  text-2xl
                  md:text-3xl
                  mb-2
                ">
                  {product.name}
                </h3>

                <p className="
                  text-[#D0CCC4]
                  text-sm
                ">
                  {product.description}
                </p>

                <div className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-[#B39A70]
                  text-[10px]
                  tracking-[0.22em]
                  uppercase
                  opacity-0
                  -translate-y-1
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  group
                ">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}