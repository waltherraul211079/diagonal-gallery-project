"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosServicio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Fixed Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8860B] transition-colors bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver al inicio
        </Link>
      </div>

      {/* Header */}
      <header className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Términos de Servicio
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Al acceder a nuestra página web y utilizar nuestros servicios, aceptas los siguientes términos:
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">1. Uso del sitio:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Este sitio está diseñado para proporcionar información sobre nuestras técnicas de extensiones capilares, servicios y métodos. 
                  Queda prohibido el uso indebido del contenido o su reproducción sin autorización previa.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">2. Reservas y consultas:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Las solicitudes realizadas a través del formulario o WhatsApp no garantizan una reserva hasta que sean confirmadas por nuestro equipo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">3. Propiedad intelectual:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Todos los textos, imágenes, logotipos y contenidos del sitio web son propiedad de Silva Hair Extensions. Queda prohibida su reproducción total o parcial sin 
                  autorización.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">4. Modificaciones:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos actualizar los contenidos, políticas o términos en cualquier momento. Recomendamos revisar esta página periódicamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">5. Contacto:</h2>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Si tienes preguntas sobre estos términos, puedes escribirnos a:
                </p>
                <p className="text-[#D4AF37] font-semibold">
                  📧 contacto@silvahairextensions.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F5DC] py-16 px-4">
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