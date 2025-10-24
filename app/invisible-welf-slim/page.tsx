"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MenuIcon, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import InvisibleCarousel from "@/app/components/InvisibleCarousel"

export default function InvisibleWelfSlim() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMetodosDropdownOpen, setIsMetodosDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setIsMetodosDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/'
      return
    }
    
    window.location.href = `/#${sectionId}`
  }
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/images/services-bg-hd.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
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
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer">
              Inicio
            </Link>
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
            <button onClick={() => window.location.href = '/#nuestra-historia'} className="hover:text-gray-300 cursor-pointer">
              Nuestra Historia
            </button>
            <button onClick={() => window.location.href = '/#por-que-elegirnos'} className="hover:text-gray-300 cursor-pointer">
              Por qué Elegirnos
            </button>
            <button onClick={() => window.location.href = '/#certificaciones'} className="hover:text-gray-300 cursor-pointer">
              Certificaciones
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-8 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#B8860B'}}>
            Invisible Welf Slim
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#B8860B'}}>
            La técnica más discreta y natural. Invisible Welf Slim proporciona longitud y volumen sin que nadie note que llevas extensiones.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-8 pb-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#B8860B'}}>
                ¿Qué es Invisible Welf Slim?
              </h2>
              <p className="mb-4" style={{color: '#B8860B'}}>
                Invisible Welf Slim es la técnica más avanzada en discreción. Utiliza hebras ultra-finas y un método de aplicación que hace completamente imperceptible la presencia de extensiones.
              </p>
              <p className="mb-6" style={{color: '#B8860B'}}>
                Ideal para personas con cabello fino o que buscan un resultado completamente natural sin comprometer la comodidad.
              </p>
            </div>
            <div className="relative w-full max-w-lg mx-auto self-start mt-6">
              <div className="w-full h-80 relative bg-transparent overflow-hidden rounded-lg shadow-xl">
                <InvisibleCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Colors Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          {/* Estilos y Largos Disponibles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{color: '#B8860B'}}>
              Estilos y Largos Disponibles
            </h2>
            <div className="bg-gradient-to-br from-[#FFFCC6] to-[#FAF1A4] rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white">
                <div className="grid grid-cols-3 gap-0">
                  <div className="px-4 py-3 font-semibold border-r border-[#B8860B]/30">
                    Capa y largo
                  </div>
                  <div className="px-4 py-3 font-semibold text-center border-r border-[#B8860B]/30">
                    Precio tono oscuro
                  </div>
                  <div className="px-4 py-3 font-semibold text-center">
                    Precio tono claro
                  </div>
                </div>
              </div>
              <div className="divide-y divide-[#D4AF37]/20">
                <div className="grid grid-cols-3 gap-0 hover:bg-[#FFFCC6]/50 transition-colors">
                  <div className="px-4 py-3 border-r border-[#D4AF37]/20" style={{color: '#B8860B'}}>
                    25cm 50cm / 1 Pieza 20gr
                  </div>
                  <div className="px-4 py-3 text-center border-r border-[#D4AF37]/20" style={{color: '#B8860B'}}>
                    €79,90
                  </div>
                  <div className="px-4 py-3 text-center" style={{color: '#B8860B'}}>
                    €89,90
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-0 hover:bg-[#FFFCC6]/50 transition-colors">
                  <div className="px-4 py-3 border-r border-[#D4AF37]/20" style={{color: '#B8860B'}}>
                    25cm 60cm / 1 pieza 20gr
                  </div>
                  <div className="px-4 py-3 text-center border-r border-[#D4AF37]/20" style={{color: '#B8860B'}}>
                    €79,90
                  </div>
                  <div className="px-4 py-3 text-center" style={{color: '#B8860B'}}>
                    €89,90
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-0 hover:bg-[#FFFCC6]/50 transition-colors">
                  <div className="px-4 py-3 border-r border-[#D4AF37]/20" style={{color: '#B8860B'}}>
                    25cm 70cm / 1 pieza 25gr
                  </div>
                  <div className="px-4 py-3 text-center border-r border-[#D4AF37]/20" style={{color: '#B8860B'}}>
                    Agotado
                  </div>
                  <div className="px-4 py-3 text-center" style={{color: '#B8860B'}}>
                    Agotado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colores */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{color: '#B8860B'}}>
              Colores:
            </h2>
            <div className="bg-gradient-to-br from-[#FFFCC6] to-[#FAF1A4] rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white">
                <div className="grid grid-cols-2 gap-0">
                  <div className="px-4 py-3 font-semibold border-r border-[#B8860B]/30">
                    Tonos oscuros
                  </div>
                  <div className="px-4 py-3 font-semibold">
                    Tonos claros
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="px-4 py-6 border-r border-[#D4AF37]/20">
                  <ul className="space-y-2" style={{color: '#B8860B'}}>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      1
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      1B
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      2
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      4
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      7
                    </li>
                  </ul>
                </div>
                <div className="px-4 py-6">
                  <ul className="space-y-2" style={{color: '#B8860B'}}>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      613
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      60
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      60/8
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                      Color personalizado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#B8860B'}}>
            Descubre la magia de lo invisible
          </h2>
          <p className="text-xl mb-8" style={{color: '#B8860B'}}>
            Experimenta la técnica más discreta y natural del mercado
          </p>
          <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            Agendar Consulta
          </Button>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#FFFCC6] to-[#FAF1A4] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="border-t border-[#D4AF37]/30 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <Link
                href="/terminos-servicio"
                className="text-[#8B7355] hover:text-[#4A4A4A] transition-colors underline text-sm"
              >
                Términos del Servicio
              </Link>
              <span className="text-[#8B7355] hidden md:inline">|</span>
              <Link
                href="/politica-privacidad"
                className="text-[#8B7355] hover:text-[#4A4A4A] transition-colors underline text-sm"
              >
                Política de Privacidad
              </Link>
            </div>
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
    </main>
  )
}