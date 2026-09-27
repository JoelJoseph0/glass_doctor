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
        src={`${import.meta.env.BASE_URL}ProductsImage/img21.jpg`}
        alt="Curved architectural glass building"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-105
          animate-[ken-burns_20s_ease-in-out_infinite_alternate]
        "
      />

      {/* Enhanced gradient overlays */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-b from-[#171717]/70 via-[#171717]/50 to-[#171717]/70
      " />
      
      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_0%,#171717_100%)]
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
            group
          ">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#B39A70] group-hover:w-12 transition-all duration-500" />

            <div className="
              w-2
              h-2
              border-2
              border-[#B39A70]
              rotate-45
              group-hover:rotate-90
              group-hover:scale-125
              transition-all
              duration-500
            " />

            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#B39A70] group-hover:w-12 transition-all duration-500" />
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
            group
            hover:text-[#E8E4DC]
            transition-colors
            duration-500
          ">
            <span className="inline-block">"Precision in Glass.</span>
            <br className="hidden sm:block" />
            <em className="inline-block hover:text-[#B39A70] transition-colors duration-300">Excellence in Every Detail."</em>
            
            {/* Text shadow effect */}
            <span className="absolute inset-0 text-[#B39A70] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 pointer-events-none">
              Excellence
            </span>
          </h2>

          <p className="
            text-[#E8E4DC]
            text-[9px]
            sm:text-[10px]
            tracking-[0.28em]
            uppercase
            px-4
            hover:text-[#B39A70]
            transition-colors
            duration-300
          ">
            The Glass Doctor — Excellence Through Transparency
          </p>

        </div>
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(23,23,23,0.8)] pointer-events-none" />
    </section>
  )
}

/* Add Ken Burns animation to index.css */