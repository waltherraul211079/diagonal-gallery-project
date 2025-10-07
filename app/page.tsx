"use client"

import type React from "react"

import { useState } from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MenuIcon, X, ChevronLeft, ChevronRight, MessageCircle, ChevronDown, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMetodosDropdownOpen, setIsMetodosDropdownOpen] = useState(false)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [currentInjectIndex, setCurrentInjectIndex] = useState(0)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const hairImages = [
    "/images/hair-1.jpeg",
    "/images/hair-2.jpeg",
    "/images/hair-3.jpeg",
    "/images/hair-4.jpeg",
    "/images/hair-5.jpeg",
    "/images/hair-6.jpeg",
    "/images/hair-7.jpeg",
    "/images/hair-8.jpeg",
  ]

  const carouselImages = [
    "/images/carousel-1.jpeg",
    "/images/carousel-2.jpeg",
    "/images/carousel-3.jpeg",
    "/images/carousel-4.jpeg",
    "/images/carousel-5.jpeg",
    "/images/carousel-6.jpeg",
  ]

  const injectImages = [
    "/images/inject-1.jpeg",
    "/images/inject-2.jpeg",
    "/images/inject-3.jpeg",
    "/images/inject-4.jpeg",
    "/images/inject-5.jpeg",
    "/images/inject-6.jpeg",
    "/images/inject-7.jpeg",
  ]

  const galleryImages = [
    "/images/gallery-1.jpeg",
    "/images/gallery-2.jpeg",
    "/images/gallery-3.jpeg",
    "/images/gallery-4.jpeg",
    "/images/gallery-5.jpeg",
    "/images/gallery-6.jpeg",
    "/images/gallery-7.jpeg",
    "/images/gallery-8.jpeg",
    "/images/gallery-9.jpeg",
  ]

  const infiniteGalleryImages = [
    ...galleryImages,
    ...galleryImages,
    ...galleryImages,
    ...galleryImages,
    ...galleryImages,
  ]

  const nextImage = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  const nextInjectImage = () => {
    setCurrentInjectIndex((prevIndex) => (prevIndex === injectImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevInjectImage = () => {
    setCurrentInjectIndex((prevIndex) => (prevIndex === 0 ? injectImages.length - 1 : prevIndex - 1))
  }

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      if (nextIndex >= infiniteGalleryImages.length - galleryImages.length) {
        setTimeout(() => setCurrentGalleryIndex(galleryImages.length), 500)
      }
      return nextIndex
    })
  }

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prevIndex) => {
      const nextIndex = prevIndex - 1
      if (nextIndex < galleryImages.length) {
        setTimeout(() => setCurrentGalleryIndex(infiniteGalleryImages.length - galleryImages.length * 2), 500)
      }
      return nextIndex < 0 ? infiniteGalleryImages.length - 1 : nextIndex
    })
  }

  const repeatedHairImages = Array(144)
    .fill(null)
    .map((_, i) => hairImages[i % hairImages.length])

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const openLightbox = (imageSrc: string) => {
    const imageIndex = galleryImages.indexOf(imageSrc)
    setLightboxIndex(imageIndex >= 0 ? imageIndex : 0)
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage("")
    setLightboxIndex(0)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          prevLightboxImage()
          break
        case 'ArrowRight':
          nextLightboxImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, lightboxIndex])

  const nextLightboxImage = () => {
    const nextIndex = (lightboxIndex + 1) % galleryImages.length
    setLightboxIndex(nextIndex)
    setLightboxImage(galleryImages[nextIndex])
  }

  const prevLightboxImage = () => {
    const prevIndex = lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setLightboxImage(galleryImages[prevIndex])
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && lightboxOpen) {
        closeLightbox()
      }
    }

    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown-container')) {
        setIsMetodosDropdownOpen(false)
      }
    }

    if (isMetodosDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMetodosDropdownOpen])

  return (
    <main className="relative">
      {/* First Section: Diagonal Gallery with Hero Content */}
      <section id="home" className="diagonal-gallery min-h-screen relative overflow-hidden">
        <div className="diagonal-container">
          <div className="diagonal-grid">
            {repeatedHairImages.map((image, index) => (
              <div key={index} className="diamond-cell">
                <div className="diamond-content">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Hair style ${index + 1}`}
                    className="diamond-image"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=600&width=600&query=hair%20extension%20placeholder`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>
        {/* Overlay content: Header and Main Section */}
        <div className="absolute inset-0 flex flex-col z-[2]">
          {/* Header/Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 md:grid md:grid-cols-3 md:items-center md:pt-4 md:px-8 text-white bg-black/30 backdrop-blur-sm transition-all duration-300">
            {/* Mobile Menu Button */}
            <div className="absolute top-4 left-4 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-white hover:bg-white/20"
                aria-label="Open menu"
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </div>

            {/* Desktop Navigation - Left Side */}
            <nav className="hidden md:flex justify-end gap-6 pr-0">
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-300 text-lg cursor-pointer">
                Inicio
              </button>
              <div className="relative dropdown-container">
                <button 
                  onClick={() => setIsMetodosDropdownOpen(!isMetodosDropdownOpen)}
                  className="hover:text-gray-300 text-lg flex items-center gap-1 cursor-pointer"
                >
                  Métodos
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMetodosDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMetodosDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <a href="/inject-3d-slim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Inject 3d Slim
                      </a>
                      <a href="/butterfly-welf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Butterfly Welf
                      </a>
                      <a href="/invisible-welf-slim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Invisible Welf Slim
                      </a>
                      <a href="/extensiones-adhesivas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Extensiones Adhesivas
                      </a>
                      <a href="/toppers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Toppers
                      </a>
                      <a href="/flequillos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Flequillos
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/accesorios" className="hover:text-gray-300 text-lg cursor-pointer">
                Accesorios
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex justify-center mb-4 md:mb-0">
              <Link href="/" className="hover:opacity-80 transition-opacity cursor-pointer">
                <img
                  src="/images/silva-h-logo-branca-300x291.png"
                  alt="Silva Hair Extensions Logo"
                  className="h-28 md:h-32 animate-popup"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right Side */}
            <nav className="hidden md:flex justify-start gap-6 pl-0">
              <button onClick={() => scrollToSection('nuestra-historia')} className="hover:text-gray-300 whitespace-nowrap text-lg cursor-pointer">
                Nuestra Historia
              </button>
              <button onClick={() => scrollToSection('por-que-elegirnos')} className="hover:text-gray-300 whitespace-nowrap text-lg cursor-pointer">
                Por qué Elegirnos
              </button>
              <button onClick={() => scrollToSection('certificaciones')} className="hover:text-gray-300 text-lg cursor-pointer">
                Certificaciones
              </button>
            </nav>
          </header>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/90 z-[60] flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
              <nav className="flex flex-col items-center space-y-6 text-white text-2xl">
                <button onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
                  Inicio
                </button>
                <div className="flex flex-col items-center space-y-3">
                  <button 
                    onClick={() => setIsMetodosDropdownOpen(!isMetodosDropdownOpen)}
                    className="hover:text-gray-300 flex items-center gap-2 cursor-pointer"
                  >
                    Métodos
                    <ChevronDown className={`h-5 w-5 transition-transform ${isMetodosDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMetodosDropdownOpen && (
                    <div className="flex flex-col items-center space-y-2 text-lg pl-4">
                      <a href="/inject-3d-slim" className="hover:text-gray-300 cursor-pointer">
                        Inject 3d Slim
                      </a>
                      <a href="/butterfly-welf" className="hover:text-gray-300 cursor-pointer">
                        Butterfly Welf
                      </a>
                      <a href="/invisible-welf-slim" className="hover:text-gray-300 cursor-pointer">
                        Invisible Welf Slim
                      </a>
                      <a href="/extensiones-adhesivas" className="hover:text-gray-300 cursor-pointer">
                        Extensiones Adhesivas
                      </a>
                      <a href="/toppers" className="hover:text-gray-300 cursor-pointer">
                        Toppers
                      </a>
                      <a href="/flequillos" className="hover:text-gray-300 cursor-pointer">
                        Flequillos
                      </a>
                    </div>
                  )}
                </div>
                <Link href="/accesorios" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer">
                  Accesorios
                </Link>
                <button onClick={() => { scrollToSection('nuestra-historia'); setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
                  Nuestra Historia
                </button>
                <button onClick={() => { scrollToSection('por-que-elegirnos'); setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
                  Por qué Elegirnos
                </button>
                <button onClick={() => { scrollToSection('certificaciones'); setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
                  Certificaciones
                </button>
              </nav>
            </div>
          )}

          {/* Main Content (Hero) */}
          <div className="flex flex-1 flex-col items-center justify-center text-center p-4 pt-32 md:pt-40">
            <p className="text-white text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">
              EXTENSIONES INNOVADORAS QUE REALZAN AUN MÁS TU BELLEZA.
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-md md:max-w-4xl mb-4 md:mb-6 text-white">
              DESPIERTA EL PODER FEMENINO QUE HAY EN TI Y RENUEVA TU AUTOESTIMA CON NUESTRAS EXTENSIONES.
            </h1>
            <p className="text-sm md:text-lg max-w-sm md:max-w-2xl mb-6 md:mb-8 text-white">
              Descubre cómo renovar tu cabello, resaltar tu mirada y aumentar tu confianza sin comprometer tu imagen
              natural.
            </p>
          </div>
        </div>
        {/* Bottom gradient fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFCC6] to-transparent z-10"></div>
      </section>

      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images/services-bg-hd.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Second Section: Servicios */}
        <section id="servicios" className="relative py-20 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">MÉTODOS MODERNOS Y ACTUALES.</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              OFRECEMOS EXTENSIONES SEGURAS QUE DARÁN VITALIDAD, SEGURIDAD Y BIENESTAR A TU VIDA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24">
            {/* Card 1: Inject 3D Slim */}
            <Link href="/inject-3d-slim" className="block">
              <div className="relative bg-golden-card p-8 pt-24 rounded-lg shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <img
                    src="/images/method-1.jpeg"
                    alt="Inject 3D Slim"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#D4AF37]"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">INJECT 3D SLIM</h3>
                <p className="text-base text-gray-800">
                  El método más natural de la actualidad: las extensiones Inject 3D Slim se integran al cabello haciendo
                  un efecto completamente invisible e imperceptible. Ideal para mujeres que buscan volumen y discreción a
                  la vez.
                </p>
              </div>
            </Link>
            {/* Card 2: Butterfly Welf */}
            <Link href="/butterfly-welf" className="block">
              <div className="relative bg-golden-card p-8 pt-24 rounded-lg shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <img
                    src="/images/method-2.jpeg"
                    alt="Butterfly Welf"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#D4AF37]"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">BUTTERFLY WELF</h3>
                <p className="text-base text-gray-800">
                  El método más práctico y rápido de hoy en día. Las extensiones Butterfly combinan practicidad y
                  modernidad en un único diseño. Perfectas para mujeres que desean un cabello más abundante sin tener que
                  esperar horas.
                </p>
              </div>
            </Link>
            {/* Card 3: Invisible Welf Slim */}
            <Link href="/invisible-welf-slim" className="block">
              <div className="relative bg-golden-card p-8 pt-24 rounded-lg shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <img
                    src="/images/method-3.jpeg"
                    alt="Invisible Welf Slim"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#D4AF37]"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">INVISIBLE WELF SLIM</h3>
                <p className="text-base text-gray-800">
                  Un método que fusiona la micropiel con una ligera costura, dejando su diseño aún más invisible, fino y
                  resistente. Extensiones altamente adaptables a cualquier tipo de cabello, ideales para mujeres que
                  buscan un resultado abundante e impactante.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Fifth Section: Nuestra Historia */}
        <section id="nuestra-historia" className="relative py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side: Portrait and Signature */}
              <div className="relative flex flex-col items-center lg:items-start">
                {/* Portrait */}
                <div className="relative w-80 h-80 mb-8">
                  <img
                    src="/images/founder-portrait.jpeg"
                    alt="Founder Portrait"
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-[#D4AF37]"
                  />
                </div>
                {/* Signature */}
                <div className="flex flex-col items-center lg:items-start">
                  <img src="/images/founder-signature.png" alt="E Silva Signature" className="h-16 w-auto mb-2" />
                  <p className="text-gray-600 text-lg italic">Founder e CEO</p>
                </div>
              </div>

              {/* Right side: Content */}
              <div className="text-left">
                <p className="text-gray-600 text-lg mb-4 uppercase tracking-wide">
                  UNA HISTORIA DE PERSEVERANCIA Y DETERMINACIÓN.
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8 leading-tight">
                  DE UNA SIMPLE AYUDANTE A UNA PROFESIONAL EMPRENDEDORA.
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    <span className="font-semibold">Silva Hair Extensions representa mucho más que belleza.</span> Es un
                    símbolo de esfuerzo, dedicación, aprendizaje constante y la satisfacción de ayudar a otras mujeres a
                    sentirse más hermosas, resaltando aun más su belleza natural. Con años de experiencia, ha adquirido
                    formación en diversas áreas y se ha especializado en los métodos más actuales del mercado, logrando
                    mejoras pensadas en su salud y bienestar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Qué Elegirnos */}
        <section id="por-que-elegirnos" className="relative py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side: Carousel */}
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <img
                    src={carouselImages[currentCarouselIndex] || "/placeholder.svg"}
                    alt={`Hair extension ${currentCarouselIndex + 1}`}
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Right side: Content */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                  PORQUE ELEGIR NUESTRAS EXTENSIONES?
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                  PORQUE MÁS QUE UN CAMBIO DE LOOK, ES UN RENACER.
                </h3>
                <div className="space-y-4 text-gray-600 text-lg mb-8">
                  <p>
                    Cada método de extensiones es una oportunidad para que cada mujer se mire al espejo y reconecte con
                    su mejor versión.
                  </p>
                  <p>
                    En Silva Hair Extensions nos ocupamos de cada detalle: desde la selección del cabello de la mejor
                    calidad hasta los métodos de colocación más avanzados y actualizados, para que te sientas realizada
                    y satisfecha.
                  </p>
                  <p className="font-semibold">Un lujo que está a tu alcance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sixth Section: Before/After Results */}
        <section id="resultados" className="relative py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side: Content */}
              <div className="text-left">
                <p className="text-gray-600 text-lg mb-4 uppercase tracking-wide">
                  Resultados reales de nuestras clientas.
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8 leading-tight">
                  DESCUBRE LA TRANSFORMACIÓN CONSEGUIDA CON NUESTROS MÉTODOS PROFESIONALES.
                </h2>
              </div>

              {/* Right side: Before/After Slider */}
              <div className="relative flex justify-center">
                <div
                  className="relative max-w-md overflow-hidden rounded-lg shadow-2xl cursor-ew-resize select-none"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onTouchMove={handleTouchMove}
                >
                  {/* After Image (Background) */}
                  <div className="relative">
                    <img
                      src="/images/after-hair.png"
                      alt="After - Hair with extensions"
                      className="w-full h-auto block"
                      draggable={false}
                    />
                  </div>

                  {/* Before Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src="/images/before-hair.png"
                      alt="Before - Natural hair"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Slider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize"
                    style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                  >
                    {/* Slider Handle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="flex space-x-1">
                        <ChevronLeft className="h-3 w-3 text-gray-600" />
                        <ChevronRight className="h-3 w-3 text-gray-600" />
                      </div>
                    </div>
                  </div>

                  {/* Conditional Overlays */}
                  {sliderPosition > 50 && (
                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      ANTES
                    </div>
                  )}
                  {sliderPosition < 50 && (
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      DESPUÉS
                    </div>
                  )}


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seventh Section: Gallery Slider */}
        <section id="galeria" className="relative py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] leading-tight max-w-5xl mx-auto">
                CADA IMAGEN REFLEJA LA CALIDAD, LA DEDICACIÓN Y EL SELLO FORMATIVO QUE OFRECEMOS EN SILVA HAIR
                EXTENSIONS.
              </h2>
            </div>

            {/* Gallery Slider */}
            <div className="relative">
              {/* Navigation Arrow Left */}
              <button
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#D4AF37] hover:bg-[#C0A030] text-white p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Images Container */}
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentGalleryIndex * (100 / 3)}%)` }}
                >
                  {infiniteGalleryImages.map((image, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-2">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Hair transformation ${(index % galleryImages.length) + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => openLightbox(image)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrow Right */}
              <button
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#D4AF37] hover:bg-[#C0A030] text-white p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Certificaciones Section */}
        <section id="certificaciones" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#B8860B] text-sm md:text-base uppercase tracking-widest mb-4">
              Cursos Online y Presenciales.
            </p>

            <h2 className="text-[#B8860B] text-3xl md:text-5xl font-bold mb-8 leading-tight">
              FORMAMOS MUJERES QUE DESEAN EMPRENDER EN EL MUNDO DE LAS EXTENSIONES DE CABELLO.
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-[#8B7355] text-base md:text-lg mb-4">
                Se parte de la familia Silva Hair Extensions, formándote como especialista en los más
                novedosos métodos de extensiones del mercado, Este es tu momento!
              </p>
              <p className="text-[#B8860B] text-base md:text-lg font-semibold">
                Estaremos encantados de que hagas parte de este equipo.
              </p>
            </div>

            {/* Certificate Image */}
            <div className="flex justify-center">
              <div className="relative max-w-4xl w-full">
                <img
                  src="/images/certificates.jpeg"
                  alt="Certificados Silva Hair Extensions"
                  className="w-full h-auto rounded-lg shadow-xl border-4 border-[#D4AF37]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#B8860B] text-sm md:text-base uppercase tracking-widest mb-4">
              ¿Lista para tu transformación?
            </p>

            <h2 className="text-[#B8860B] text-2xl md:text-4xl font-bold mb-8 leading-tight max-w-6xl mx-auto">
              CONSULTA GRATIS CON UNA ESPECIALISTA Y DESCUBRE EL MÉTODO IDEAL PARA TU TIPO DE CABELLO, ESTILO DE VIDA Y
              OBJETIVOS PERSONALES.
            </h2>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#FFFCC6] to-[#FAF1A4] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Logo and Description */}
            <div className="space-y-6 text-center">
              <img
                src="/images/silva-hair-logo-footer.png"
                alt="Silva Hair Extensions"
                className="h-20 w-auto mx-auto"
              />
              <div className="space-y-4">
                <p className="text-[#B8860B] font-semibold">
                  Nuestras Extensiones están altamente cualificadas para ofrecerle bienestar, confianza y satisfacción.
                </p>
                <p className="text-[#8B7355] text-sm">
                  Cada método es pensado en ti, para adaptarse a tus gustos y comodidades, respetando tu esencia y tu
                  belleza natural
                </p>
              </div>
            </div>

            {/* Secciones */}
            <div className="text-left">
              <h3 className="text-[#B8860B] text-xl font-bold mb-6">Secciones</h3>
              <nav className="space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-[#8B7355] hover:text-[#B8860B] transition-colors text-left">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('servicios')} className="block text-[#8B7355] hover:text-[#B8860B] transition-colors text-left">
                  Métodos
                </button>
                <Link href="/accesorios" className="block text-[#8B7355] hover:text-[#B8860B] transition-colors text-left">
                  Accesorios
                </Link>
                <button onClick={() => scrollToSection('nuestra-historia')} className="block text-[#8B7355] hover:text-[#B8860B] transition-colors text-left">
                  Nuestra Historia
                </button>
                <button onClick={() => scrollToSection('por-que-elegirnos')} className="block text-[#8B7355] hover:text-[#B8860B] transition-colors text-left">
                  Por qué Elegirnos
                </button>
                <button onClick={() => scrollToSection('certificaciones')} className="block text-[#8B7355] hover:text-[#B8860B] transition-colors text-left">
                  Certificaciones
                </button>
              </nav>
            </div>

            {/* Galería */}
            <div className="text-center">
              <button 
                onClick={() => scrollToSection('galeria')} 
                className="text-[#B8860B] text-xl font-bold mb-6 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Galería
              </button>
              <div className="grid grid-cols-2 gap-3 justify-center">
                <img 
                  src="/images/gallery-1.jpeg" 
                  alt="Galería 1" 
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
                  onClick={() => scrollToSection('galeria')}
                />
                <img 
                  src="/images/gallery-2.jpeg" 
                  alt="Galería 2" 
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
                  onClick={() => scrollToSection('galeria')}
                />
                <img 
                  src="/images/gallery-3.jpeg" 
                  alt="Galería 3" 
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
                  onClick={() => scrollToSection('galeria')}
                />
                <img 
                  src="/images/gallery-4.jpeg" 
                  alt="Galería 4" 
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
                  onClick={() => scrollToSection('galeria')}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/30 mt-12 pt-8 text-center">
            <p className="text-[#8B7355] text-sm">
              © 2025 Silva Hair Extensions – Todos los derechos reservados. Web desarrollada por{" "}
              <a
                href="https://github.com/cronoxxxx"
                target="_blank"
                className="text-[#8B7355] hover:text-[#4A4A4A] transition-colors underline"
                rel="noreferrer"
              >
                @cronoxxxx
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Image Preview */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close preview"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevLightboxImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#D4AF37] hover:bg-[#C0A030] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextLightboxImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#D4AF37] hover:bg-[#C0A030] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={lightboxImage || "/placeholder.svg"}
              alt={`Preview ${lightboxIndex + 1} of ${galleryImages.length}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/34634277456"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <img
            src="/images/socialw.png"
            alt="WhatsApp"
            className="h-16 w-16"
          />
        </a>
      </div>
    </main>
  )
}
