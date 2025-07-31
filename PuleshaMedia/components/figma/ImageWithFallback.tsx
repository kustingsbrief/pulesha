import image_388d25e208641e4b26bc7da2217cd72fdf4d68e0 from 'figma:asset/388d25e208641e4b26bc7da2217cd72fdf4d68e0.png';
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  image_388d25e208641e4b26bc7da2217cd72fdf4d68e0

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
