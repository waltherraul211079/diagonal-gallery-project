"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MenuIcon, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function ExtensionesAdhesivas() {
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
          <Link href="/" className="hover:text-gray-300 text-lg cursor-pointer">
            Inicio
          </Link>
          <div className="relative dropdown-container">
            <button 
              onClick={() => setIsMetodosDropdownOpen(!isMetodosDropdownOpen)}
              className="hover:text-gray-300 text-lg flex items-center gap-2 cursor-pointer"
            >
              Métodos
              <ChevronDown className={`h-4 w-4 transition-transform ${isMetodosDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMetodosDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black bg-opacity-90 rounded-lg shadow-lg p-4 min-w-[200px] z-50">
                <div className="flex flex-col space-y-2">
                  <a href="/inject-3d-slim" className="hover:text-gray-300 text-base whitespace-nowrap cursor-pointer">
                    Inject 3d Slim
                  </a>
                  <a href="/butterfly-welf" className="hover:text-gray-300 text-base whitespace-nowrap cursor-pointer">
                    Butterfly Welf
                  </a>
                  <a href="/invisible-welf-slim" className="hover:text-gray-300 text-base whitespace-nowrap cursor-pointer">
                    Invisible Welf Slim
                  </a>
                  <a href="/extensiones-adhesivas" className="hover:text-gray-300 text-base whitespace-nowrap cursor-pointer">
                    Extensiones Adhesivas
                  </a>
                  <a href="/toppers" className="hover:text-gray-300 text-base whitespace-nowrap cursor-pointer">
                    Toppers
                  </a>
                  <a href="/flequillos" className="hover:text-gray-300 text-base whitespace-nowrap cursor-pointer">
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
          <button onClick={() => window.location.href = '/#nuestra-historia'} className="hover:text-gray-300 text-lg cursor-pointer">
            Nuestra Historia
          </button>
          <button onClick={() => window.location.href = '/#por-que-elegirnos'} className="hover:text-gray-300 text-lg cursor-pointer">
            Por qué Elegirnos
          </button>
          <button onClick={() => window.location.href = '/#certificaciones'} className="hover:text-gray-300 text-lg cursor-pointer">
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
      <section className="pt-40 pb-20 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Extensiones Adhesivas
          </h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            La solución perfecta para un cambio rápido y temporal. Nuestras extensiones adhesivas ofrecen versatilidad y comodidad sin compromisos.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                ¿Qué son las Extensiones Adhesivas?
              </h2>
              <p className="text-black mb-4">
                Las extensiones adhesivas son la opción ideal para quienes buscan flexibilidad y facilidad de uso. Se aplican mediante un adhesivo especial que es seguro para el cabello y permite cambios rápidos de look.
              </p>
              <p className="text-black mb-6">
                Perfectas para eventos especiales, cambios temporales o para probar un nuevo estilo antes de comprometerse con algo más permanente.
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Aplicación rápida (30-45 min)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Fácil remoción
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Duración de 6-8 semanas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Reutilizable
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/inject-6.jpeg"
                alt="Extensiones Adhesivas resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Ventajas de las Extensiones Adhesivas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Rapidez</h3>
              <p className="text-gray-600 text-center">
                Aplicación en menos de una hora. Perfecto para cambios de último minuto.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🔄
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Versatilidad</h3>
              <p className="text-gray-600 text-center">
                Cambia tu look cuando quieras. Ideal para experimentar con diferentes estilos.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Económico</h3>
              <p className="text-gray-600 text-center">
                Opción más accesible para probar extensiones sin una gran inversión inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Cuidados y Mantenimiento
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Cuidados Diarios</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Cepilla suavemente desde las puntas hacia arriba
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Evita productos con alcohol cerca de las cintas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Usa productos sin sulfatos
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Recomendaciones</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Duerme con el cabello recogido en una trenza suelta
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Evita el calor excesivo en las cintas adhesivas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Programa revisiones cada 3-4 semanas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            ¿Lista para un cambio rápido?
          </h2>
          <p className="text-xl mb-8 text-black">
            Prueba nuestras extensiones adhesivas y transforma tu look en minutos
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Reservar Ahora
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