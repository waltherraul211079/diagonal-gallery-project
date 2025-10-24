"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MenuIcon, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import InjectCarousel from "@/app/components/InjectCarousel"

export default function Inject3dSlim() {
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
          <button onClick={() => window.location.href = '/#home'} className="hover:text-gray-300 text-lg cursor-pointer">
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
          <button onClick={() => window.location.href = '/#nuestra-historia'} className="hover:text-gray-300 whitespace-nowrap text-lg cursor-pointer">
            Nuestra Historia
          </button>
          <button onClick={() => window.location.href = '/#por-que-elegirnos'} className="hover:text-gray-300 whitespace-nowrap text-lg cursor-pointer">
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
            <button onClick={() => { window.location.href = '/#home'; setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
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
            <button onClick={() => { window.location.href = '/#nuestra-historia'; setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
              Nuestra Historia
            </button>
            <button onClick={() => { window.location.href = '/#por-que-elegirnos'; setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
              Por qué Elegirnos
            </button>
            <button onClick={() => { window.location.href = '/#certificaciones'; setIsMenuOpen(false); }} className="hover:text-gray-300 cursor-pointer">
              Certificaciones
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#B8860B'}}>
            Inject 3D Slim
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#B8860B'}}>
            La técnica más avanzada en extensiones capilares. Volumen natural y resultados espectaculares con la innovadora tecnología Inject 3D Slim.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-4 pb-10 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#B8860B'}}>
                ¿Qué es Inject 3D Slim?
              </h2>
              <p className="mb-4" style={{color: '#B8860B'}}>
                Inject 3D Slim es una técnica revolucionaria que permite agregar volumen y longitud de manera completamente natural. Utilizamos hebras ultra-finas que se integran perfectamente con tu cabello natural.
              </p>
              <p className="mb-6" style={{color: '#B8860B'}}>
                Esta técnica es ideal para personas que buscan un cambio sutil pero efectivo, proporcionando densidad y movimiento natural al cabello.
              </p>
              
              <p className="mb-4" style={{color: '#B8860B'}}>
                Las Extensiones Inject 3D Slim son fabricadas en piezas de 50cm, 60cm y 70cm de largo y aproximadamente 20gr cada pieza.
              </p>
              <br />
              
              {/* Tabla de Estilos y Precios */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4" style={{color: '#B8860B'}}>
                  Estilos y Largos Disponibles
                </h3>
                <div className="bg-transparent rounded-lg shadow-lg overflow-hidden border border-[#B8860B]/30">
                  <table className="w-full">
                    <thead className="bg-[#B8860B] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Capa y largo</th>
                        <th className="px-4 py-3 text-center">Precio tono oscuro</th>
                        <th className="px-4 py-3 text-center">Precio tono claro</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#B8860B]">
                      <tr className="border-b border-[#B8860B]/20">
                        <td className="px-4 py-3">25cm 50cm / 1 Pieza 20gr</td>
                        <td className="px-4 py-3 text-center">€79,90</td>
                        <td className="px-4 py-3 text-center">€89,90</td>
                      </tr>
                      <tr className="border-b border-[#B8860B]/20">
                        <td className="px-4 py-3">25cm 60cm / 1 pieza 20gr</td>
                        <td className="px-4 py-3 text-center">€79,90</td>
                        <td className="px-4 py-3 text-center">€89,90</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">25cm 70cm / 1 pieza 25gr</td>
                        <td className="px-4 py-3 text-center">Agotado</td>
                        <td className="px-4 py-3 text-center">Agotado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tabla de Colores */}
              <div>
                <h4 className="text-lg font-semibold mb-3" style={{color: '#B8860B'}}>
                  Colores:
                </h4>
                <div className="bg-transparent rounded-lg shadow-lg overflow-hidden border border-[#B8860B]/30">
                  <div className="bg-[#B8860B] text-white">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="px-4 py-3 text-left">
                        <h5 className="font-medium">Tonos oscuros</h5>
                      </div>
                      <div className="px-4 py-3 text-left">
                        <h5 className="font-medium">Tonos claros</h5>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-0 text-[#B8860B]">
                    <div className="px-4 py-3">
                      <ul className="space-y-1">
                        <li>• 1</li>
                        <li>• 1B</li>
                        <li>• 2</li>
                        <li>• 4</li>
                        <li>• 7</li>
                      </ul>
                    </div>
                    <div className="px-4 py-3">
                      <ul className="space-y-1">
                        <li>• 613</li>
                        <li>• 60</li>
                        <li>• 60/8</li>
                        <li>• Color personalizado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-lg mx-auto self-start mt-6">
              {/* Inject Carousel */}
              <div className="w-full h-80 relative bg-transparent overflow-hidden rounded-lg shadow-xl">
                <InjectCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#B8860B'}}>
            Galería de Colores Inject 3D Slim
          </h2>
          <div className="space-y-6">
            {/* Primera fila - 5 imágenes */}
            <div className="grid grid-cols-5 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Negro Nº 1.jpg"
                  alt="Negro Nº 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Negro Nº 1</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Negro Nº 1B.jpg"
                  alt="Negro Nº 1B"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Negro Nº 1B</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Castano Nº2.jpg"
                  alt="Castaño Nº 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Castaño Nº 2</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Castano Nº 4.jpg"
                  alt="Castaño Nº 4"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Castaño Nº 4</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Castano N7.jpg"
                  alt="Castaño Nº 7"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Castaño Nº 7</h3>
                </div>
              </div>
            </div>

            {/* Segunda fila - 4 imágenes centradas */}
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Rubio Extraclaro Nº 60.jpg"
                  alt="Rubio Extraclaro Nº 60"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Rubio Extraclaro Nº 60</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Rubiomechado Nº 60-8.jpg"
                  alt="Rubio Mechado Nº 60-8"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Rubio Mechado Nº 60-8</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Rubio Claro Nº 613.jpg"
                  alt="Rubio Claro Nº 613"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Rubio Claro Nº 613</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/Injec 3d slim/Colores Personalizados.jpg"
                  alt="Colores Personalizados"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center" style={{color: '#B8860B'}}>Colores Personalizados</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#B8860B'}}>
            ¿Lista para transformar tu cabello?
          </h2>
          <p className="text-xl mb-8" style={{color: '#B8860B'}}>
            Descubre el poder que hay en tí con Inject 3D Slim
          </p>
          <a
            href="https://wa.me/34634277456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-yellow-500 text-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-colors duration-300">
              Contactar Ahora
            </Button>
          </a>
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