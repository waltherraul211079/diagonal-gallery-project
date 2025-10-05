"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExtensionesAdhesivas() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Volver al inicio
            </Link>
            <img
              src="/images/silva-h-logo-branca-300x291.png"
              alt="Silva Hair Extensions Logo"
              className="h-16"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Extensiones Adhesivas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La solución perfecta para un cambio rápido y temporal. Nuestras extensiones adhesivas ofrecen versatilidad y comodidad sin compromisos.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Qué son las Extensiones Adhesivas?
              </h2>
              <p className="text-gray-600 mb-4">
                Las extensiones adhesivas son la opción ideal para quienes buscan flexibilidad y facilidad de uso. Se aplican mediante un adhesivo especial que es seguro para el cabello y permite cambios rápidos de look.
              </p>
              <p className="text-gray-600 mb-6">
                Perfectas para eventos especiales, cambios temporales o para probar un nuevo estilo antes de comprometerse con algo más permanente.
              </p>
              <ul className="space-y-2 text-gray-600">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Ventajas de las Extensiones Adhesivas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Rapidez</h3>
              <p className="text-gray-600 text-center">
                Aplicación en menos de una hora. Perfecto para cambios de último minuto.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🔄
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Versatilidad</h3>
              <p className="text-gray-600 text-center">
                Cambia tu look cuando quieras. Ideal para experimentar con diferentes estilos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Lista para un cambio rápido?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Prueba nuestras extensiones adhesivas y transforma tu look en minutos
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Reservar Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Silva Hair Extensions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}