"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MenuIcon, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
          <Link href="/" className="hover:text-gray-300 text-lg cursor-pointer">
            Inicio
          </Link>
          <div className="relative">
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
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
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
      <section className="pt-40 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Inject 3D Slim
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La técnica más avanzada en extensiones capilares. Volumen natural y resultados espectaculares con la innovadora tecnología Inject 3D Slim.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                ¿Qué es Inject 3D Slim?
              </h2>
              <p className="text-gray-600 mb-4">
                Inject 3D Slim es una técnica revolucionaria que permite agregar volumen y longitud de manera completamente natural. Utilizamos hebras ultra-finas que se integran perfectamente con tu cabello natural.
              </p>
              <p className="text-gray-600 mb-6">
                Esta técnica es ideal para personas que buscan un cambio sutil pero efectivo, proporcionando densidad y movimiento natural al cabello.
              </p>
              
              <p className="text-gray-700 mb-4">
                Las Extensiones Inject 3D Slim son fabricadas por piezas de 25cm de largo e aproximadamente 20gr cada pieza
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-3">Estilo y largos disponibles:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  25cm 50cm / 2Piezas 30gr
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  25cm 60cm / 2piezas 40gr
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  25cm 70cm / 2piezas 50gr
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  25cm 75cm / 2piezas 60gr
                </li>
              </ul>
            </div>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Fixed Image */}
              <div className="w-full h-80 relative bg-transparent overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/images/Injec 3d slim/1000057251.jpg"
                  alt="Inject 3D Slim - Extensiones capilares con microesferas"
                  className="w-full h-full object-cover bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Galería de Colores Inject 3D Slim
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Negro Nº 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Negro Nº 1.jpg"
                alt="Negro Nº 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Negro Nº 1</h3>
              </div>
            </div>

            {/* Negro Nº 1B */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Negro Nº 1B.jpg"
                alt="Negro Nº 1B"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Negro Nº 1B</h3>
              </div>
            </div>

            {/* Castaño Nº 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Castano Nº2.jpg"
                alt="Castaño Nº 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Castaño Nº 2</h3>
              </div>
            </div>

            {/* Castaño Nº 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Castano Nº 4.jpg"
                alt="Castaño Nº 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Castaño Nº 4</h3>
              </div>
            </div>

            {/* Rubio Extraclaro Nº 60 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Rubio Extraclaro Nº 60.jpg"
                alt="Rubio Extraclaro Nº 60"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Rubio Extraclaro Nº 60</h3>
              </div>
            </div>

            {/* Rubio Mechado Nº 60-8 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Rubiomechado Nº 60-8.jpg"
                alt="Rubio Mechado Nº 60-8"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Rubio Mechado Nº 60-8</h3>
              </div>
            </div>

            {/* Rubio Claro Nº 613 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Rubio Claro Nº 613.jpg"
                alt="Rubio Claro Nº 613"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Rubio Claro Nº 613</h3>
              </div>
            </div>

            {/* Colores Personalizados */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/Injec 3d slim/Colores Personalizados.jpg"
                alt="Colores Personalizados"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black">Colores Personalizados</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            ¿Lista para transformar tu cabello?
          </h2>
          <p className="text-xl mb-8 text-black">
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

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Silva Hair Extensions. Todos los derechos reservados.</p>
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