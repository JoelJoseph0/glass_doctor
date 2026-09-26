import { useState, useEffect } from 'react'

export function useImageLoad(src: string) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = new Image()
    
    img.onload = () => {
      setIsLoaded(true)
      setHasError(false)
    }
    
    img.onerror = () => {
      setHasError(true)
      setIsLoaded(false)
    }
    
    img.src = src
    
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { isLoaded, hasError }
}
