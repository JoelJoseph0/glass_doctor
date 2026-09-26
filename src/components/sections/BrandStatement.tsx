import LazyImage from '@/components/common/LazyImage'

export default function BrandStatement() {
  return (
    <section className="
      relative
      h-[55vh]
      min-h-[380px]
      flex
      items-center
      overflow-hidden
      bg-[#171717]
    ">
      <LazyImage
        src="/ProductsImage/img21.jpg"
        alt="Curved architectural glass building"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      <div className="
        absolute
        inset-0
        bg-[#171717]/65
      " />

      <div className="
        relative
        z-10
        w-full
        max-w-[1440px]
        mx-auto
        px-6
        md:px-10
        text-center
      ">
        <div className="max-w-2xl mx-auto">

          <div className="
            flex
            items-center
            justify-center
            gap-4
            mb-8
          ">
            <div className="w-8 h-px bg-[#B39A70]" />

            <div className="
              w-2
              h-2
              border
              border-[#B39A70]
              rotate-45
            " />

            <div className="w-8 h-px bg-[#B39A70]" />
          </div>

          <h2 className="
            font-display
            text-[#F8F7F4]
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            leading-[1.1]
            mb-6
            px-4
          ">
            "Precision in Glass.
            <br className="hidden sm:block" />
            <em>Excellence in Every Detail."</em>
          </h2>

          <p className="
            text-[#77736C]
            text-[9px]
            sm:text-[10px]
            tracking-[0.28em]
            uppercase
            px-4
          ">
            The Glass Doctor — Excellence Through Transparency
          </p>

        </div>
      </div>
    </section>
  )
}