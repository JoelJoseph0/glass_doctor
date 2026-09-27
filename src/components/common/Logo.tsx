interface LogoProps {
  light?: boolean
}

export default function Logo({
  light = true,
}: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative bg-white rounded-sm px-2 py-1">
        <img 
          src={`${import.meta.env.BASE_URL}Logo.png`}
          alt="The Glass Doctor Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>
      
      {/* Text logo for better visibility */}
      <div className="hidden md:flex flex-col">
        <span 
          className={`
            font-display text-xl tracking-wider uppercase leading-tight font-semibold
            ${light ? 'text-[#F8F7F4]' : 'text-[#171717]'}
          `}
        >
          The Glass Doctor
        </span>
        <span className="text-[#B39A70] text-[8px] tracking-[0.32em] uppercase leading-none mt-1">
          Excellence Through Transparency
        </span>
      </div>
    </div>
  )
}
