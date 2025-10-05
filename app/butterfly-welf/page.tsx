"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ButterflyWelf() {
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
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Volver al inicio
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/images/silva-h-logo-branca-300x291.png"
              alt="Silva Hair Extensions Logo"
              className="h-28 md:h-32 animate-popup"
            />
          </Link>
        </div>
        <div></div>
      </header>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Butterfly Welf
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Técnica innovadora que proporciona volumen y movimiento natural. El método Butterfly Welf crea un efecto mariposa único en tu cabello.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
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
      <section className="py-16 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Beneficios del Butterfly Welf
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-2">Volumen Instantáneo</h3>
              <p className="text-gray-600">
                Obtén el volumen que siempre has deseado de manera inmediata y completamente natural.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🦋
              </div>
              <h3 className="text-xl font-semibold mb-2">Efecto Mariposa</h3>
              <p className="text-gray-600">
                El patrón único de colocación crea un movimiento natural que imita el vuelo de una mariposa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
      <section className="py-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experimenta la magia del Butterfly Welf
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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