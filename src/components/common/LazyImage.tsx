import { useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export default function LazyImage({ src, alt, className = '', style }: LazyImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const isLoaded = loadedSrc === src

  return (
    <div className="relative w-full h-full">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8E4DC] via-[#D8D4CC] to-[#E8E4DC] animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
      )}

      {/* Actual image — the browser defers off-screen loads via loading="lazy" */}
      <img
        ref={(img) => {
          // Cached images can finish before React attaches onLoad
          if (img?.complete && img.naturalWidth > 0) setLoadedSrc(src)
        }}
        src={src}
        alt={alt}
        loading="lazy"
        className={`
          ${className}
          transition-opacity duration-700
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={style}
        onLoad={() => setLoadedSrc(src)}
        onError={() => setLoadedSrc(src)}
      />
    </div>
  )
}
