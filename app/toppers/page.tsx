"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MenuIcon, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Toppers() {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMetodosDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMetodosDropdownOpen(!isMetodosDropdownOpen);
  };

  const handleSubmenuClick = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

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
                  <Link href="/inject-3d-slim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Inject 3d Slim
                  </Link>
                  <Link href="/butterfly-welf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Butterfly Welf
                  </Link>
                  <Link href="/invisible-welf-slim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Invisible Welf Slim
                  </Link>
                  <Link href="/extensiones-adhesivas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Extensiones Adhesivas
                  </Link>
                  <Link href="/toppers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Toppers
                  </Link>
                  <Link href="/flequillos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Flequillos
                  </Link>
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
              className="h-28 md:h-32 animate-popup cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden md:flex justify-start gap-6 pl-0">
          <button onClick={() => scrollToSection('nuestra-historia')} className="hover:text-gray-300 text-lg cursor-pointer whitespace-nowrap">
            Nuestra Historia
          </button>
          <button onClick={() => scrollToSection('por-que-elegirnos')} className="hover:text-gray-300 text-lg cursor-pointer whitespace-nowrap">
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
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
          <nav className="flex flex-col items-center space-y-6 text-white text-2xl">
            <button onClick={() => handleSubmenuClick('/')} className="hover:text-gray-300 cursor-pointer">
              Inicio
            </button>
            <div className="relative flex flex-col items-center space-y-3">
              <button 
                onClick={toggleMetodosDropdown}
                className="hover:text-gray-300 flex items-center gap-2 cursor-pointer"
              >
                Métodos
                <ChevronDown className={`h-5 w-5 transition-transform ${isMetodosDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMetodosDropdownOpen && (
                <div className="flex flex-col items-center space-y-2 text-lg pl-4">
                  <a href="#" onClick={() => handleSubmenuClick('/inject-3d-slim')} className="hover:text-gray-300 cursor-pointer">
                    Inject 3d Slim
                  </a>
                  <a href="#" onClick={() => handleSubmenuClick('/butterfly-welf')} className="hover:text-gray-300 cursor-pointer">
                    Butterfly Welf
                  </a>
                  <a href="#" onClick={() => handleSubmenuClick('/invisible-welf-slim')} className="hover:text-gray-300 cursor-pointer">
                    Invisible Welf Slim
                  </a>
                  <a href="#" onClick={() => handleSubmenuClick('/extensiones-adhesivas')} className="hover:text-gray-300 cursor-pointer">
                    Extensiones Adhesivas
                  </a>
                  <a href="#" onClick={() => handleSubmenuClick('/toppers')} className="hover:text-gray-300 cursor-pointer">
                    Toppers
                  </a>
                  <a href="#" onClick={() => handleSubmenuClick('/flequillos')} className="hover:text-gray-300 cursor-pointer">
                    Flequillos
                  </a>
                </div>
              )}
            </div>
            <Link href="/accesorios" onClick={toggleMenu} className="hover:text-gray-300 cursor-pointer">
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
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#B8860B'}}>
            Toppers
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#B8860B'}}>
            La solución perfecta para agregar volumen y cobertura en la zona superior. Nuestros toppers proporcionan densidad instantánea donde más la necesitas.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#B8860B'}}>
                ¿Qué son los Toppers?
              </h2>
              <p className="mb-4" style={{color: '#B8860B'}}>
                Los toppers son piezas capilares especialmente diseñadas para cubrir y dar volumen a la zona superior de la cabeza. Son ideales para personas con adelgazamiento capilar o que buscan mayor densidad en áreas específicas.
              </p>
              <p className="mb-6" style={{color: '#B8860B'}}>
                Fabricados con cabello humano de alta calidad, se integran perfectamente con tu cabello natural, proporcionando cobertura y volumen instantáneos.
              </p>
              <ul className="space-y-2" style={{color: '#B8860B'}}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Cobertura instantánea
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Fácil aplicación
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Cabello humano 100%
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Múltiples sistemas de sujeción
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/inject-7.jpeg"
                alt="Toppers resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#B8860B'}}>
            Tipos de Toppers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                📎
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center" style={{color: '#B8860B'}}>Clip-In</h3>
              <p className="text-center mb-4" style={{color: '#B8860B'}}>
                Fácil aplicación con clips seguros. Perfecto para uso diario y ocasional.
              </p>
              <ul className="text-sm space-y-1" style={{color: '#B8860B'}}>
                <li>• Aplicación en segundos</li>
                <li>• Reutilizable</li>
                <li>• No daña el cabello</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🔗
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center" style={{color: '#B8860B'}}>Semi-Permanente</h3>
              <p className="text-center mb-4" style={{color: '#B8860B'}}>
                Aplicación profesional con mayor duración. Ideal para uso continuo.
              </p>
              <ul className="text-sm space-y-1" style={{color: '#B8860B'}}>
                <li>• Duración 2-3 meses</li>
                <li>• Mayor seguridad</li>
                <li>• Aplicación profesional</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center" style={{color: '#B8860B'}}>Personalizado</h3>
              <p className="text-center mb-4" style={{color: '#B8860B'}}>
                Diseñado específicamente para tu tipo de cabello y necesidades.
              </p>
              <ul className="text-sm space-y-1" style={{color: '#B8860B'}}>
                <li>• Medidas exactas</li>
                <li>• Color perfecto</li>
                <li>• Máxima naturalidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#B8860B'}}>
            Beneficios de los Toppers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#B8860B'}}>Cobertura Precisa</h3>
              <p className="text-sm" style={{color: '#B8860B'}}>Cubre exactamente donde necesitas volumen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#B8860B'}}>Resultado Inmediato</h3>
              <p className="text-sm" style={{color: '#B8860B'}}>Volumen y densidad al instante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#B8860B'}}>Aspecto Natural</h3>
              <p className="text-sm" style={{color: '#B8860B'}}>Se integra perfectamente con tu cabello</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#B8860B'}}>Confianza</h3>
              <p className="text-sm" style={{color: '#B8860B'}}>Recupera tu autoestima y seguridad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#B8860B'}}>
            Proceso de Selección
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#B8860B'}}>Consulta</h3>
                <p className="text-sm" style={{color: '#B8860B'}}>
                  Evaluamos tu cabello y determinamos el tipo de topper ideal para ti.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#B8860B'}}>Personalización</h3>
                <p className="text-sm" style={{color: '#B8860B'}}>
                  Seleccionamos el color, textura y tamaño perfecto para tu caso.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#B8860B'}}>Aplicación</h3>
                <p className="text-sm" style={{color: '#B8860B'}}>
                  Instalamos profesionalmente tu topper para un resultado natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#B8860B'}}>
            ¿Lista para recuperar tu confianza?
          </h2>
          <p className="text-xl mb-8" style={{color: '#B8860B'}}>
            Agenda una consulta y descubre cómo nuestros toppers pueden transformar tu imagen
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Reservar Consulta
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