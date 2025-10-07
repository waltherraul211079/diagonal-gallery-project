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
        <div className="flex justify-center">
          <Link href="/">
            <img
              src="/images/silva-h-logo-branca-300x291.png"
              alt="Silva Hair Extensions Logo"
              className="h-28 md:h-32 animate-popup"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden md:flex justify-start gap-6 pl-0">
          <Link href="/#nuestra-historia" className="hover:text-gray-300 text-lg">
            Nuestra Historia
          </Link>
          <Link href="/#por-que-elegirnos" className="hover:text-gray-300 text-lg">
            Por qué Elegirnos
          </Link>
          <Link href="/#certificaciones" className="hover:text-gray-300 text-lg">
            Certificaciones
          </Link>
        </nav>

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
                <a href="/inject-3d-slim" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Inject 3d Slim
                </a>
                <a href="/butterfly-welf" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Butterfly Welf
                </a>
                <a href="/invisible-welf-slim" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Invisible Welf Slim
                </a>
                <a href="/extensiones-adhesivas" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Extensiones Adhesivas
                </a>
                <a href="/toppers" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Toppers
                </a>
                <a href="/flequillos" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Flequillos
                </a>
                <a href="/accesorios" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Accesorios
                </a>
              </div>
              <div className="flex flex-col items-center space-y-3 mt-6">
                <Link href="/#nuestra-historia" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Nuestra Historia
                </Link>
                <Link href="/#por-que-elegirnos" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Por qué Elegirnos
                </Link>
                <Link href="/#certificaciones" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                  Certificaciones
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Accesorios para el Cuidado de tu Cabello
          </h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
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
                <h3 className="font-semibold">Cepillo Especial para Extensiones</h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
                <h3 className="font-semibold">Kit de Mantenimiento</h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
                <h3 className="font-semibold">Champú Especial</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Champú formulado específicamente para extensiones de cabello, mantiene el brillo y la suavidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">¿Necesitas ayuda para elegir?</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para asesorarte y responder todas tus dudas sobre nuestros productos y accesorios.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all duration-300">
            <MessageCircle className="h-5 w-5" />
            Contáctanos por WhatsApp
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