"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MenuIcon, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function ButterflyWelf() {
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
    
    // For other sections, navigate to main page with hash
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
          <Link href="/" className="hover:text-gray-300 text-lg">
            Inicio
          </Link>
          <div className="relative dropdown-container">
            <button 
              onClick={() => setIsMetodosDropdownOpen(!isMetodosDropdownOpen)}
              className="hover:text-gray-300 text-lg flex items-center gap-1"
            >
              Métodos
              <ChevronDown className={`h-4 w-4 transition-transform ${isMetodosDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMetodosDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  <a href="/inject-3d-slim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Inject 3d Slim
                  </a>
                  <a href="/butterfly-welf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Butterfly Welf
                  </a>
                  <a href="/invisible-welf-slim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Invisible Welf Slim
                  </a>
                  <a href="/extensiones-adhesivas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Extensiones Adhesivas
                  </a>
                  <a href="/toppers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Toppers
                  </a>
                  <a href="/flequillos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Flequillos
                  </a>
                </div>
              </div>
            )}
          </div>
          <Link href="/accesorios" className="hover:text-gray-300 text-lg">
            Accesorios
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex justify-center mb-4 md:mb-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/images/silva-h-logo-branca-300x291.png"
              alt="Silva Hair Extensions Logo"
              className="h-28 md:h-32 animate-popup"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden md:flex justify-start gap-6 pl-0">
          <button onClick={() => scrollToSection('nuestra-historia')} className="hover:text-gray-300 whitespace-nowrap text-lg">
            Nuestra Historia
          </button>
          <button onClick={() => scrollToSection('por-que-elegirnos')} className="hover:text-gray-300 whitespace-nowrap text-lg">
            Por qué Elegirnos
          </button>
          <button onClick={() => scrollToSection('certificaciones')} className="hover:text-gray-300 text-lg">
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
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
              Inicio
            </Link>
            <div className="flex flex-col items-center space-y-3">
              <button 
                onClick={() => setIsMetodosDropdownOpen(!isMetodosDropdownOpen)}
                className="hover:text-gray-300 flex items-center gap-2"
              >
                Métodos
                <ChevronDown className={`h-5 w-5 transition-transform ${isMetodosDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMetodosDropdownOpen && (
                <div className="flex flex-col items-center space-y-2 text-lg pl-4">
                  <a href="/inject-3d-slim" className="hover:text-gray-300">
                    Inject 3d Slim
                  </a>
                  <a href="/butterfly-welf" className="hover:text-gray-300">
                    Butterfly Welf
                  </a>
                  <a href="/invisible-welf-slim" className="hover:text-gray-300">
                    Invisible Welf Slim
                  </a>
                  <a href="/extensiones-adhesivas" className="hover:text-gray-300">
                    Extensiones Adhesivas
                  </a>
                  <a href="/toppers" className="hover:text-gray-300">
                    Toppers
                  </a>
                  <a href="/flequillos" className="hover:text-gray-300">
                    Flequillos
                  </a>
                </div>
              )}
            </div>
            <Link href="/accesorios" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
              Accesorios
            </Link>
            <button onClick={() => { scrollToSection('nuestra-historia'); setIsMenuOpen(false); }} className="hover:text-gray-300">
              Nuestra Historia
            </button>
            <button onClick={() => { scrollToSection('por-que-elegirnos'); setIsMenuOpen(false); }} className="hover:text-gray-300">
              Por qué Elegirnos
            </button>
            <button onClick={() => { scrollToSection('certificaciones'); setIsMenuOpen(false); }} className="hover:text-gray-300">
              Certificaciones
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Butterfly Welf
          </h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Técnica innovadora que proporciona volumen y movimiento natural. El método Butterfly Welf crea un efecto mariposa único en tu cabello.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                ¿Qué es Butterfly Welf?
              </h2>
              <p className="text-gray-600 mb-4">
                Butterfly Welf es una técnica especializada que utiliza un patrón de colocación único que imita el movimiento natural del cabello, creando un efecto voluminoso y dinámico.
              </p>
              <p className="text-gray-600 mb-6">
                Esta técnica es perfecta para quienes buscan un cambio dramático pero natural, proporcionando cuerpo y textura excepcionales.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Efecto volumen natural
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Movimiento dinámico
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Duración de 4-5 meses
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Técnica patentada
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/inject-2.jpeg"
                alt="Butterfly Welf resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Beneficios del Butterfly Welf
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-2">Volumen Instantáneo</h3>
              <p className="text-gray-600">
                Obtén el volumen que siempre has deseado de manera inmediata y completamente natural.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🦋
              </div>
              <h3 className="text-xl font-semibold mb-2">Efecto Mariposa</h3>
              <p className="text-gray-600">
                El patrón único de colocación crea un movimiento natural que imita el vuelo de una mariposa.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                💎
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-gray-600">
                Utilizamos solo cabello humano de la más alta calidad para garantizar resultados excepcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Experimenta la magia del Butterfly Welf
          </h2>
          <p className="text-xl text-black mb-8">
            Transforma tu cabello con nuestra técnica exclusiva
          </p>
          <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            Reservar Cita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">&copy; 2024 Silva Hair Extensions. Todos los derechos reservados.</p>
        </div>
      </footer>

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