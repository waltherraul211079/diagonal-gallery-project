"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ExtensionesAdhesivasCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  // Imágenes que representan extensiones adhesivas en diferentes colores
  const images = [
    {
      src: "/images/Extensiones Adhesivas/1000073454.jpg",
      alt: "Extensiones Adhesivas - Modelo 1"
    },
    {
      src: "/images/Extensiones Adhesivas/1000073435.jpg",
      alt: "Extensiones Adhesivas - Modelo 2"
    }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <div className="relative w-full max-w-lg mx-auto self-start mt-6">
      {/* Carousel Container */}
      <div className="w-full h-80 relative bg-transparent overflow-hidden rounded-lg shadow-xl">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
        />
        
        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={20} />
        </button>
        
        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImage 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default ExtensionesAdhesivasCarousel