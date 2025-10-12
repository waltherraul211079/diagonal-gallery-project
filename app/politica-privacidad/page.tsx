"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              En Silva Hair Extensions, respetamos tu privacidad y protegemos los datos personales que compartes con nosotros. 
              Esta política explica cómo recopilamos, usamos y almacenamos tu información.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">1. Datos que recopilamos:</h2>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    Nombre, correo electrónico, número de teléfono.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    Información sobre tus preferencias y consultas a través del sitio web o WhatsApp.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">2. Uso de los datos:</h2>
                <p className="text-gray-300 leading-relaxed mb-4">Utilizamos tus datos para:</p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    Responder a tus consultas y enviarte información sobre nuestros servicios.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    Gestionar reservas o solicitudes realizadas.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    Enviar comunicaciones promocionales (sólo si das tu consentimiento).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">3. Compartición de datos:</h2>
                <p className="text-gray-300 leading-relaxed">
                  No compartimos tu información personal con terceros, salvo que sea estrictamente necesario para prestar el servicio o por obligación legal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">4. Seguridad:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">5. Tus derechos:</h2>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Tienes derecho a acceder, rectificar o eliminar tus datos. Para ejercer estos derechos, contáctanos en:
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