"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, MenuIcon, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AccesoriosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMetodosDropdownOpen, setIsMetodosDropdownOpen] = useState(false)

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
    <main 
      className="flex min-h-screen flex-col bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/images/services-bg-hd.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
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

      {/* Page Title Section */}
      <section className="pt-40 pb-8 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{color: '#B8860B'}}>
            Accesorios para el Cuidado de tu cabello
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#B8860B'}}>
            Descubre nuestra selección de accesorios premium para el cuidado y mantenimiento de tus extensiones de cabello.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Product Card 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="aspect-square">
                <Image 
                  src="/images/hair-1.jpeg" 
                  alt="Cepillo Especial para Extensiones"
                  width={400}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold" style={{color: '#B8860B'}}>Cepillo Especial para Extensiones</h3>
                <p className="mt-2 text-sm" style={{color: '#B8860B'}}>
                  Cepillo diseñado específicamente para el cuidado de extensiones, evita enredos y mantiene el cabello suave.
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="aspect-square">
                <Image 
                  src="/images/hair-2.jpeg" 
                  alt="Kit de Mantenimiento"
                  width={400}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold" style={{color: '#B8860B'}}>Kit de Mantenimiento</h3>
                <p className="mt-2 text-sm" style={{color: '#B8860B'}}>
                  Kit completo con productos esenciales para el cuidado y mantenimiento de tus extensiones.
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="aspect-square">
                <Image 
                  src="/images/hair-3.jpeg" 
                  alt="Champú Especial"
                  width={400}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold" style={{color: '#B8860B'}}>Champú Especial</h3>
                <p className="mt-2 text-sm" style={{color: '#B8860B'}}>
                  Champú formulado específicamente para extensiones de cabello, mantiene el brillo y la suavidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#B8860B'}}>¿Necesitas ayuda para elegir?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color: '#B8860B'}}>
            Nuestro equipo de expertos está aquí para asesorarte y ayudarte a encontrar los accesorios perfectos para tu tipo de cabello.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
            Contactar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p style={{color: '#B8860B'}}>&copy; 2024 Silva Hair. Todos los derechos reservados.</p>
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