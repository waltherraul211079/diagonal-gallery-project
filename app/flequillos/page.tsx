"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Flequillos() {
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
      <header className="bg-black/90 backdrop-blur-sm text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Volver al inicio
            </Link>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img
                src="/images/silva-h-logo-branca-300x291.png"
                alt="Silva Hair Extensions Logo"
                className="h-16"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Flequillos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Cambia tu look al instante con nuestros flequillos naturales. La forma más rápida y versátil de renovar tu estilo sin compromisos.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Por qué elegir nuestros Flequillos?
              </h2>
              <p className="text-gray-600 mb-4">
                Nuestros flequillos están fabricados con cabello humano de la más alta calidad, diseñados para integrarse perfectamente con tu cabello natural. Son la solución ideal para experimentar con un nuevo look sin el compromiso de cortar tu propio cabello.
              </p>
              <p className="text-gray-600 mb-6">
                Disponibles en múltiples estilos, desde flequillos rectos clásicos hasta modernos flequillos laterales, todos personalizables según tu rostro y preferencias.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Cabello humano 100% natural
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Múltiples estilos disponibles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Fácil aplicación y remoción
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Reutilizable y duradero
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/hair-1.jpeg"
                alt="Flequillos resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Estilos de Flequillos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✂️
              </div>
              <h3 className="text-lg font-semibold mb-2">Recto Clásico</h3>
              <p className="text-sm text-gray-600">
                El flequillo tradicional que nunca pasa de moda. Perfecto para rostros ovalados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🌊
              </div>
              <h3 className="text-lg font-semibold mb-2">Lateral</h3>
              <p className="text-sm text-gray-600">
                Flequillo peinado hacia un lado. Ideal para suavizar facciones angulares.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-lg font-semibold mb-2">Desfilado</h3>
              <p className="text-sm text-gray-600">
                Flequillo con capas que aporta movimiento y textura natural.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🎭
              </div>
              <h3 className="text-lg font-semibold mb-2">Cortina</h3>
              <p className="text-sm text-gray-600">
                Flequillo dividido al medio que enmarca el rostro elegantemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Métodos de Aplicación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Clip-In</h3>
              <p className="text-gray-600 mb-4">
                Aplicación instantánea con clips seguros. Perfecto para uso ocasional o diario.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Aplicación en segundos</li>
                <li>• No requiere profesional</li>
                <li>• Reutilizable infinitas veces</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Adhesivo</h3>
              <p className="text-gray-600 mb-4">
                Fijación con adhesivo especial para mayor seguridad y naturalidad.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Mayor seguridad</li>
                <li>• Aspecto más natural</li>
                <li>• Duración de 2-4 semanas</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrado</h3>
              <p className="text-gray-600 mb-4">
                Aplicación profesional que se integra completamente con tu cabello.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Resultado profesional</li>
                <li>• Máxima naturalidad</li>
                <li>• Personalización completa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Consejos para el Cuidado
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Cuidado Diario</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  Cepilla suavemente con un cepillo de cerdas suaves
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span>
                  Usa productos sin sulfatos
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span>
                  Evita dormir con el flequillo húmedo
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Mantenimiento</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span>
                  Lava cada 15-20 usos
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span>
                  Almacena en un lugar fresco y seco
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span>
                  Revisa y ajusta los clips regularmente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Lista para un cambio de look?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre nuestros flequillos y encuentra el estilo perfecto para ti
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Reservar Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-sm text-white py-8">
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